@echo off
chcp 65001 >nul
title 启动 Nginx
cd /d "%~dp0\nginx-1.28.3"

:: 如果已在运行则不重复启动
tasklist /FI "IMAGENAME eq nginx.exe" | find /I "nginx.exe" >nul
if %errorlevel%==0 (
    echo [信息] Nginx 已在运行，执行配置热加载...
    nginx.exe -s reload
) else (
    echo [信息] 启动 Nginx...
    start "" nginx.exe
)

timeout /t 1 >nul
echo.
echo 当前进程：
tasklist /FI "IMAGENAME eq nginx.exe"
echo.
echo 监听端口：
netstat -ano | findstr :80 | findstr LISTENING
echo.
pause
