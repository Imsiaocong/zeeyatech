@echo off
chcp 65001 >nul
title 放行 Nginx 防火墙端口 80

net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [提示] 需要管理员权限，正在尝试以管理员身份重新运行...
    powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
    exit /b
)

echo 添加入站规则：TCP 80 (Nginx HTTP)
netsh advfirewall firewall delete rule name="Nginx HTTP 80" >nul 2>&1
netsh advfirewall firewall add rule name="Nginx HTTP 80" dir=in action=allow protocol=TCP localport=80

echo.
echo 当前规则：
netsh advfirewall firewall show rule name="Nginx HTTP 80"

echo.
pause
