# سكربت PowerShell لتغيير رابط API على Windows
# استخدام: .\update-api-url.ps1 -NewUrl "https://your-backend.railway.app"

param(
    [Parameter(Mandatory=$true)]
    [string]$NewUrl
)

$OldUrl = "https://tooth-care-26.preview.emergentagent.com"

Write-Host "🔄 جاري تغيير رابط API..." -ForegroundColor Yellow
Write-Host "   من: $OldUrl" -ForegroundColor Gray
Write-Host "   إلى: $NewUrl" -ForegroundColor Green

$files = Get-ChildItem -Path "frontend/static/js/main.*.js"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace [regex]::Escape($OldUrl), $NewUrl
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "✅ تم تحديث: $($file.Name)" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎉 تم التحديث بنجاح!" -ForegroundColor Green
Write-Host "📁 الآن يمكنك رفع مجلد frontend/ على الاستضافة" -ForegroundColor Cyan
