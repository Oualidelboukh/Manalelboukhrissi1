from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import os
import jwt
from datetime import datetime, timedelta
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/admin", tags=["admin"])

# Admin credentials (in production, use environment variables and hashed passwords)
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "Manal*2024"  # This should be hashed in production
SECRET_KEY = os.environ.get('JWT_SECRET_KEY', 'dental-clinic-secret-key-change-in-production')

class LoginRequest(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    success: bool
    token: str
    message: str

@router.post("/login", response_model=dict)
async def admin_login(credentials: LoginRequest):
    """
    Admin login endpoint
    """
    try:
        # Verify credentials
        if credentials.username != ADMIN_USERNAME or credentials.password != ADMIN_PASSWORD:
            raise HTTPException(
                status_code=401,
                detail="اسم المستخدم أو كلمة المرور غير صحيحة"
            )
        
        # Create JWT token
        token_data = {
            "username": credentials.username,
            "exp": datetime.utcnow() + timedelta(days=7)  # Token valid for 7 days
        }
        token = jwt.encode(token_data, SECRET_KEY, algorithm="HS256")
        
        logger.info(f"Admin login successful: {credentials.username}")
        
        return {
            "success": True,
            "token": token,
            "message": "تم تسجيل الدخول بنجاح"
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Login error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="حدث خطأ أثناء تسجيل الدخول"
        )

@router.post("/verify-token")
async def verify_token(token: str):
    """
    Verify JWT token
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return {"success": True, "username": payload["username"]}
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="انتهت صلاحية الجلسة")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="رمز غير صالح")