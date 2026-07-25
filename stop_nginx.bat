@echo off
chcp 65001 >nul
title 停止 Nginx
cd /d "%~dp0\nginx-1.28.3"

tasklist /FI "IMAGENAME eq nginx.exe" | find /I "nginx.exe" >nul
if %errorlevel% neq 0 (
    echo [信息] Nginx 未在运行。
) else (
    echo [信息] 优雅停止 Nginx...
    nginx.exe -s quit
    timeout /t 2 >nul
    :: 兜底强杀
    taskkill /F /IM nginx.exe >nul 2>&1
)

echo.
tasklist /FI "IMAGENAME eq nginx.exe"
pause
