# 🦷 عيادة طب الأسنان - الدكتورة منال البوخريصي
## دليل النشر والتشغيل

---

## 📁 هيكل المشروع

```
deployment/
├── frontend/          # ملفات React المبنية (جاهزة للرفع)
│   ├── index.html
│   ├── static/
│   └── asset-manifest.json
├── backend/           # خادم FastAPI
│   ├── server.py
│   ├── requirements.txt
│   ├── models/
│   ├── routes/
│   └── utils/
├── README.md          # هذا الملف
└── .env.example       # نموذج متغيرات البيئة
```

---

## 🌐 الخطوة 1: نشر الـ Frontend على Namecheap

### أ) رفع الملفات
1. سجّل دخولك إلى **cPanel** في Namecheap
2. افتح **File Manager**
3. انتقل إلى مجلد `public_html`
4. ارفع جميع محتويات مجلد `frontend/`
5. تأكد أن `index.html` موجود في `public_html/`

### ب) إعداد HTTPS (مهم!)
1. في cPanel، افتح **SSL/TLS**
2. فعّل **Let's Encrypt** للحصول على شهادة مجانية

### ج) إعداد إعادة التوجيه للـ SPA
أنشئ ملف `.htaccess` في `public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🖥️ الخطوة 2: نشر الـ Backend على Railway

### أ) إنشاء مشروع على Railway
1. اذهب إلى [railway.app](https://railway.app)
2. أنشئ حساب وسجّل الدخول
3. اضغط **New Project** → **Deploy from GitHub repo**
4. أو اضغط **Empty Project** → **Add Service** → **Empty Service**

### ب) رفع ملفات الـ Backend
1. ارفع مجلد `backend/` إلى GitHub
2. اربط الـ Repository بـ Railway

### ج) إضافة متغيرات البيئة في Railway
في **Settings** → **Variables**، أضف:

```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/dental_clinic
DB_NAME=dental_clinic
JWT_SECRET=your-super-secret-key-here-min-32-chars
ADMIN_USERNAME=admin
ADMIN_PASSWORD=Manal*2024
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
NOTIFICATION_EMAIL=drmanalelboukhrissi@gmail.com
```

### د) إضافة ملف Procfile
أنشئ ملف `Procfile` في مجلد backend:
```
web: uvicorn server:app --host 0.0.0.0 --port $PORT
```

### هـ) الحصول على رابط الـ API
بعد النشر، ستحصل على رابط مثل:
```
https://your-app.railway.app
```

---

## 🔗 الخطوة 3: ربط الـ Frontend بالـ Backend

### مهم جداً! ⚠️

قبل رفع الـ Frontend، يجب تعديل رابط الـ API:

1. افتح ملف `frontend/static/js/main.*.js`
2. ابحث عن الرابط القديم واستبدله بالجديد:

```javascript
// استبدل هذا:
https://tooth-care-26.preview.emergentagent.com

// بهذا (رابط Railway الخاص بك):
https://your-backend.railway.app
```

### أو استخدم هذا السكربت:
```bash
# على Linux/Mac
sed -i 's|https://tooth-care-26.preview.emergentagent.com|https://your-backend.railway.app|g' frontend/static/js/main.*.js

# على Windows PowerShell
(Get-Content frontend/static/js/main.*.js) -replace 'https://tooth-care-26.preview.emergentagent.com', 'https://your-backend.railway.app' | Set-Content frontend/static/js/main.*.js
```

---

## 🗄️ الخطوة 4: إعداد قاعدة البيانات MongoDB

### الخيار 1: MongoDB Atlas (مجاني)
1. اذهب إلى [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. أنشئ حساب مجاني
3. أنشئ Cluster جديد (اختر M0 Free)
4. أنشئ Database User
5. في **Network Access**، أضف `0.0.0.0/0` للسماح بالاتصال
6. انسخ **Connection String** واستخدمه في `MONGO_URL`

### الخيار 2: Railway MongoDB
1. في مشروع Railway، اضغط **Add Service**
2. اختر **Database** → **MongoDB**
3. انسخ `MONGO_URL` من المتغيرات

---

## 👤 بيانات تسجيل الدخول الافتراضية

| الحقل | القيمة |
|-------|--------|
| اسم المستخدم | `admin` |
| كلمة المرور | `Manal*2024` |
| رابط الدخول | `https://your-domain.com/admin/login` |

---

## 📧 إعداد البريد الإلكتروني (Gmail)

1. فعّل **2-Step Verification** في حساب Gmail
2. اذهب إلى **Google Account** → **Security** → **App passwords**
3. أنشئ كلمة مرور جديدة للتطبيق
4. استخدمها في `EMAIL_PASSWORD`

---

## ✅ قائمة التحقق قبل الإطلاق

- [ ] رفع ملفات Frontend على Namecheap
- [ ] إنشاء ملف `.htaccess`
- [ ] نشر Backend على Railway
- [ ] إعداد MongoDB Atlas
- [ ] تعديل رابط API في ملفات Frontend
- [ ] اختبار تسجيل الدخول
- [ ] اختبار حجز موعد
- [ ] اختبار استلام البريد الإلكتروني

---

## 🆘 المساعدة والدعم

إذا واجهت أي مشاكل:
1. تحقق من **Console** في المتصفح (F12)
2. تحقق من **Logs** في Railway
3. تأكد من صحة متغيرات البيئة

---

## 📝 ملاحظات إضافية

### CORS (مهم!)
الـ Backend مُعد للسماح بجميع النطاقات. إذا أردت تقييده:

```python
# في server.py
origins = [
    "https://your-domain.com",
    "https://www.your-domain.com"
]
```

### الأمان
- غيّر `JWT_SECRET` إلى قيمة عشوائية طويلة
- غيّر كلمة مرور المسؤول بعد أول تسجيل دخول
- استخدم HTTPS دائماً

---

**تم الإعداد بنجاح! 🎉**
