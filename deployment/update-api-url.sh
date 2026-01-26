#!/bin/bash
# ===========================================
# سكربت تغيير رابط API
# ===========================================
# استخدام: ./update-api-url.sh https://your-backend.railway.app

if [ -z "$1" ]; then
    echo "❌ خطأ: يجب تحديد رابط الـ API الجديد"
    echo "استخدام: ./update-api-url.sh https://your-backend.railway.app"
    exit 1
fi

NEW_URL=$1
OLD_URL="https://tooth-care-26.preview.emergentagent.com"

echo "🔄 جاري تغيير رابط API..."
echo "   من: $OLD_URL"
echo "   إلى: $NEW_URL"

# تغيير في ملفات JavaScript
for file in frontend/static/js/main.*.js; do
    if [ -f "$file" ]; then
        sed -i "s|$OLD_URL|$NEW_URL|g" "$file"
        echo "✅ تم تحديث: $file"
    fi
done

echo ""
echo "🎉 تم التحديث بنجاح!"
echo "📁 الآن يمكنك رفع مجلد frontend/ على الاستضافة"
