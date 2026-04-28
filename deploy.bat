@echo off
chcp 65001 >nul
echo 🌑 Деплой сайта Фатимы на GitHub...

REM Проверка git
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git не установлен! Скачай: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Инициализация
if not exist .git (
    echo 📦 Инициализация Git...
    git init
    git branch -M main
)

REM Remote
echo 🔗 Добавление remote...
git remote remove origin 2>nul
git remote add origin https://github.com/c1utchw/darckmagicfatima.git

REM Коммит
echo 💾 Создание коммита...
git add .
git commit -m "Initial commit: dark magic site for Fatima" 2>nul

REM Пуш
echo 🚀 Пуш на GitHub...
git push -u origin main

if %errorlevel% == 0 (
    echo.
    echo ✅ УСПЕХ! Сайт запушен!
    echo 🔗 Репозиторий: https://github.com/c1utchw/darckmagicfatima
    echo 🌐 Сайт: https://c1utchw.github.io/darckmagicfatima/
    echo.
    echo ⚠️ ВАЖНО: Включи GitHub Pages в настройках!
    echo    Settings → Pages → Source: Deploy from branch → main → Save
) else (
    echo.
    echo ❌ Ошибка. Попробуй вручную: git push -u origin main
)

pause
