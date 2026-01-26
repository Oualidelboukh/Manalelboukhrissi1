# عيادة طب الأسنان - الدكتورة منال البوخريصي
## Product Requirements Document (PRD)

---

## المشكلة الأصلية
إنشاء موقع إلكتروني متكامل لعيادة أسنان متميزة يتضمن:
- عرض خدمات العيادة
- نظام حجز مواعيد
- لوحة تحكم للمسؤول
- معلومات التواصل

---

## المستخدمون المستهدفون
1. **المرضى**: حجز المواعيد، الاطلاع على الخدمات
2. **مسؤول العيادة**: إدارة المواعيد، متابعة الحجوزات

---

## المتطلبات الأساسية

### ✅ تم إنجازها (25 يناير 2026)

#### Frontend
- [x] صفحة رئيسية (Hero Section)
- [x] قسم الخدمات (9 خدمات)
- [x] قسم عن العيادة
- [x] نموذج حجز المواعيد
- [x] قسم آراء العملاء
- [x] قسم التواصل مع خريطة Google
- [x] Header مع تنقل سلس
- [x] Footer مع روابط اجتماعية
- [x] زر دخول المستخدم (Desktop + Mobile)
- [x] صفحة تسجيل دخول المسؤول
- [x] لوحة تحكم المواعيد
- [x] دعم RTL (العربية)
- [x] Favicon بشعار العيادة

#### Backend
- [x] API حجز المواعيد (CRUD)
- [x] API تسجيل دخول المسؤول (JWT)
- [x] قاعدة بيانات MongoDB
- [x] إشعارات البريد الإلكتروني

#### الاختبارات
- [x] 18 اختبار Backend (100% نجاح)
- [x] اختبار شامل للواجهة الأمامية

---

## البيانات التقنية

### بيانات الدخول للمسؤول
- **اسم المستخدم:** admin
- **كلمة المرور:** Manal*2024
- **الرابط:** /admin/login

### API Endpoints
| Method | Endpoint | الوصف |
|--------|----------|-------|
| POST | /api/admin/login | تسجيل الدخول |
| GET | /api/appointments | جلب المواعيد |
| POST | /api/appointments | إنشاء موعد |
| PATCH | /api/appointments/{id}/status | تحديث حالة الموعد |

### Database Schema
```
appointments: { _id, name, phone, email, service, date, time, notes, status, createdAt }
```

---

## الملفات المرجعية
- `/app/frontend/src/components/Header.jsx`
- `/app/frontend/src/pages/AdminLogin.jsx`
- `/app/frontend/src/pages/AdminDashboard.jsx`
- `/app/backend/routes/admin.py`
- `/app/backend/routes/appointments.py`

---

## المهام القادمة (Backlog)
- [ ] نظام إشعارات SMS للمرضى
- [ ] تقويم تفاعلي للمواعيد المتاحة
- [ ] لوحة إحصائيات متقدمة
- [ ] نظام تذكير بالمواعيد
