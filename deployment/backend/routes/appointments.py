from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from datetime import datetime
import logging
from motor.motor_asyncio import AsyncIOMotorClient
import os

from models.appointment import Appointment, AppointmentCreate, AppointmentUpdate
from utils.email_service import send_appointment_notification

logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'dental_clinic')]
appointments_collection = db.appointments

router = APIRouter(prefix="/appointments", tags=["appointments"])

@router.post("", response_model=dict, status_code=201)
async def create_appointment(appointment_data: AppointmentCreate):
    """
    Create a new appointment
    """
    try:
        # Create appointment object
        appointment = Appointment(**appointment_data.dict())
        appointment_dict = appointment.dict()
        
        # Store in database
        result = await appointments_collection.insert_one(appointment_dict)
        
        if result.inserted_id:
            logger.info(f"Appointment created: {appointment.id}")
            # Remove MongoDB _id from response
            appointment_dict.pop('_id', None)
            
            # Send email notification (async, don't wait for it)
            try:
                await send_appointment_notification(appointment_dict)
                logger.info(f"Email notification sent for appointment: {appointment.id}")
            except Exception as email_error:
                logger.error(f"Failed to send email notification: {str(email_error)}")
                # Don't fail the appointment creation if email fails
            
            return {
                "success": True,
                "message": "تم حجز موعدك بنجاح! سنتصل بك قريباً للتأكيد.",
                "appointment": appointment_dict
            }
        else:
            raise HTTPException(status_code=500, detail="فشل في حفظ الموعد")
            
    except ValueError as e:
        logger.error(f"Validation error: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error creating appointment: {str(e)}")
        raise HTTPException(status_code=500, detail="حدث خطأ أثناء حجز الموعد")

@router.get("", response_model=dict)
async def get_appointments(
    status: Optional[str] = Query(None, regex=r'^(pending|confirmed|cancelled|completed)$'),
    date: Optional[str] = Query(None),
    limit: int = Query(50, ge=1, le=100),
    page: int = Query(1, ge=1)
):
    """
    Get all appointments with optional filtering
    """
    try:
        # Build query
        query = {}
        if status:
            query['status'] = status
        if date:
            query['date'] = date
        
        # Count total
        total = await appointments_collection.count_documents(query)
        
        # Calculate pagination
        skip = (page - 1) * limit
        pages = (total + limit - 1) // limit
        
        # Fetch appointments
        cursor = appointments_collection.find(query).sort('createdAt', -1).skip(skip).limit(limit)
        appointments = await cursor.to_list(length=limit)
        
        # Remove _id from results
        for apt in appointments:
            apt.pop('_id', None)
        
        return {
            "success": True,
            "appointments": appointments,
            "pagination": {
                "total": total,
                "page": page,
                "pages": pages,
                "limit": limit
            }
        }
        
    except Exception as e:
        logger.error(f"Error fetching appointments: {str(e)}")
        raise HTTPException(status_code=500, detail="حدث خطأ أثناء جلب المواعيد")

@router.get("/{appointment_id}", response_model=dict)
async def get_appointment(appointment_id: str):
    """
    Get a specific appointment by ID
    """
    try:
        appointment = await appointments_collection.find_one({'id': appointment_id})
        
        if not appointment:
            raise HTTPException(status_code=404, detail="الموعد غير موجود")
        
        # Remove _id
        appointment.pop('_id', None)
        
        return {
            "success": True,
            "appointment": appointment
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching appointment: {str(e)}")
        raise HTTPException(status_code=500, detail="حدث خطأ أثناء جلب الموعد")

@router.patch("/{appointment_id}/status", response_model=dict)
async def update_appointment_status(appointment_id: str, update_data: AppointmentUpdate):
    """
    Update appointment status
    """
    try:
        # Update appointment
        result = await appointments_collection.update_one(
            {'id': appointment_id},
            {
                '$set': {
                    'status': update_data.status,
                    'updatedAt': datetime.utcnow()
                }
            }
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="الموعد غير موجود")
        
        logger.info(f"Appointment {appointment_id} status updated to {update_data.status}")
        
        return {
            "success": True,
            "message": "تم تحديث حالة الموعد بنجاح",
            "appointment": {
                "id": appointment_id,
                "status": update_data.status,
                "updatedAt": datetime.utcnow().isoformat()
            }
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating appointment: {str(e)}")
        raise HTTPException(status_code=500, detail="حدث خطأ أثناء تحديث الموعد")

@router.delete("/{appointment_id}", response_model=dict)
async def delete_appointment(appointment_id: str):
    """
    Delete an appointment
    """
    try:
        result = await appointments_collection.delete_one({'id': appointment_id})
        
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="الموعد غير موجود")
        
        logger.info(f"Appointment {appointment_id} deleted")
        
        return {
            "success": True,
            "message": "تم حذف الموعد بنجاح"
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting appointment: {str(e)}")
        raise HTTPException(status_code=500, detail="حدث خطأ أثناء حذف الموعد")
