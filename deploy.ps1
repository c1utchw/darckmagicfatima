# ===== СКРИПТ ДЕПЛОЯ НА GITHUB =====
# Просто запусти: .\deploy.ps1

Write-Host "🌑 Деплой сайта Фатимы на GitHub..." -ForegroundColor DarkRed

# Проверяем git
try {
    git --version | Out-Null
} catch {
    Write-Host "❌ Git не установлен! Скачай: https://git-scm.com/download/win" -ForegroundColor Red
    exit 1
}

# Инициализация (если нужно)
if (-not (Test-Path .git)) {
    Write-Host "📦 Инициализация Git..." -ForegroundColor Gray
    git init
    git branch -M main
}

# Добавляем remote
Write-Host "🔗 Добавление remote..." -ForegroundColor Gray
git remote remove origin 2>$null
git remote add origin https://github.com/c1utchw/darckmagicfatima.git

# Коммит
Write-Host "💾 Создание коммита..." -ForegroundColor Gray
git add .
git commit -m "Initial commit: dark magic site for Fatima" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️ Нет изменений для коммита (возможно, уже закоммичено)" -ForegroundColor Yellow
}

# Пуш
Write-Host "🚀 Пуш на GitHub..." -ForegroundColor DarkRed
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "" 
    Write-Host "✅ УСПЕХ! Сайт запушен!" -ForegroundColor Green
    Write-Host "🔗 Репозиторий: https://github.com/c1utchw/darckmagicfatima" -ForegroundColor Cyan
    Write-Host "🌐 Сайт будет доступен: https://c1utchw.github.io/darckmagicfatima/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "⚠️ ВАЖНО: Включи GitHub Pages в настройках репозитория!" -ForegroundColor Yellow
    Write-Host "   Settings → Pages → Source: Deploy from branch → main → Save" -ForegroundColor Yellow
} else {
    Write-Host "❌ Ошибка пуша. Попробуй вручную:" -ForegroundColor Red
    Write-Host "   git push -u origin main" -ForegroundColor Gray
}
