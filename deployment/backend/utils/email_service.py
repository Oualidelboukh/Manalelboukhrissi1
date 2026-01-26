import os
import logging
from typing import Dict
import resend

logger = logging.getLogger(__name__)

# Resend API configuration
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', 'drmanaleiboukhrissi@gmail.com')

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

async def send_appointment_notification(appointment_data: Dict) -> bool:
    """
    Send email notification when new appointment is created
    """
    if not RESEND_API_KEY:
        logger.warning("RESEND_API_KEY not configured, skipping email notification")
        return False
    
    try:
        # Prepare email content
        subject = f"حجز موعد جديد - {appointment_data['name']}"
        
        html_content = f"""
        <!DOCTYPE html>
        <html dir="rtl">
        <head>
            <meta charset="UTF-8">
            <style>
                body {{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; padding: 20px; }}
                .container {{ max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }}
                .header {{ background: linear-gradient(135deg, #1a3a52, #2d5573); color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 30px; }}
                .info-row {{ display: flex; padding: 12px; border-bottom: 1px solid #eee; }}
                .info-label {{ font-weight: bold; color: #1a3a52; min-width: 120px; }}
                .info-value {{ color: #333; }}
                .footer {{ margin-top: 30px; text-align: center; color: #666; font-size: 14px; }}
                .button {{ display: inline-block; background: #c8a882; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 20px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🦷 حجز موعد جديد</h1>
                    <p>عيادة طب الأسنان - الدكتورة منال البوخريصي</p>
                </div>
                
                <h2 style="color: #1a3a52; margin-bottom: 20px;">تفاصيل الموعد:</h2>
                
                <div class="info-row">
                    <div class="info-label">👤 الاسم:</div>
                    <div class="info-value">{appointment_data['name']}</div>
                </div>
                
                <div class="info-row">
                    <div class="info-label">📞 الهاتف:</div>
                    <div class="info-value"><a href="tel:{appointment_data['phone']}">{appointment_data['phone']}</a></div>
                </div>
                
                {f'''<div class="info-row">
                    <div class="info-label">📧 البريد:</div>
                    <div class="info-value"><a href="mailto:{appointment_data['email']}">{appointment_data['email']}</a></div>
                </div>''' if appointment_data.get('email') else ''}
                
                <div class="info-row">
                    <div class="info-label">🦷 الخدمة:</div>
                    <div class="info-value">{appointment_data['service']}</div>
                </div>
                
                <div class="info-row">
                    <div class="info-label">📅 التاريخ:</div>
                    <div class="info-value">{appointment_data['date']}</div>
                </div>
                
                <div class="info-row">
                    <div class="info-label">🕐 الوقت:</div>
                    <div class="info-value">{appointment_data['time']}</div>
                </div>
                
                {f'''<div class="info-row">
                    <div class="info-label">📝 ملاحظات:</div>
                    <div class="info-value">{appointment_data['notes']}</div>
                </div>''' if appointment_data.get('notes') else ''}
                
                <div style="text-align: center;">
                    <a href="{os.environ.get('FRONTEND_URL', 'http://localhost:3000')}/admin/dashboard" class="button">
                        عرض في لوحة التحكم
                    </a>
                </div>
                
                <div class="footer">
                    <p>تم إرسال هذا البريد تلقائياً من نظام حجز المواعيد</p>
                    <p>عيادة طب الأسنان - الدكتورة منال البوخريصي</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        # Send email using Resend
        params = {
            "from": "Dental Clinic <onboarding@resend.dev>",
            "to": [ADMIN_EMAIL],
            "subject": subject,
            "html": html_content,
        }
        
        email = resend.Emails.send(params)
        logger.info(f"Appointment notification sent successfully: {email}")
        return True
        
    except Exception as e:
        logger.error(f"Error sending appointment notification: {str(e)}")
        return False
