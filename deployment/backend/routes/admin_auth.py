from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/admin", tags=["admin"])

ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "Manal*2024"

class LoginRequest(BaseModel):
    username: str
    password: str

@router.post("/login")
async def admin_login(credentials: LoginRequest):
    if credentials.username == ADMIN_USERNAME and credentials.password == ADMIN_PASSWORD:
        return {"access": True}
    
    raise HTTPException(
        status_code=401,
        detail="اسم المستخدم أو كلمة المرور غير صحيحة"
    )
