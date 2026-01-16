from pydantic import BaseModel, Field, validator
from datetime import datetime
from typing import Optional
import uuid

class AppointmentCreate(BaseModel):
    """Model for creating a new appointment"""
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    email: Optional[str] = None
    service: str = Field(..., min_length=2)
    date: str = Field(...)  # ISO date string
    time: str = Field(..., pattern=r'^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')
    notes: Optional[str] = Field(None, max_length=500)
    
    @validator('phone')
    def validate_phone(cls, v):
        # Remove spaces and special characters
        cleaned = ''.join(filter(str.isdigit, v))
        if len(cleaned) < 10:
            raise ValueError('رقم الهاتف يجب أن يحتوي على 10 أرقام على الأقل')
        return v
    
    @validator('email')
    def validate_email(cls, v):
        if v and '@' not in v:
            raise ValueError('البريد الإلكتروني غير صحيح')
        return v

class AppointmentUpdate(BaseModel):
    """Model for updating appointment status"""
    status: str = Field(..., pattern=r'^(pending|confirmed|cancelled|completed)$')

class Appointment(BaseModel):
    """Full appointment model with all fields"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    service: str
    date: str
    time: str
    notes: Optional[str] = None
    status: str = Field(default='pending')
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }
