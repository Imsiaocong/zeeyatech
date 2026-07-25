@echo off
chcp 65001 >nul
title 恢复 IIS (W3SVC/WAS)

:: 需要管理员权限
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [提示] 需要管理员权限，正在尝试以管理员身份重新运行...
    powershell -NoProfile -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
    exit /b
)

echo =======================================================
echo  恢复 IIS 服务
echo  - WAS    : Manual    -> 启动
echo  - W3SVC  : Automatic -> 启动
echo =======================================================
echo.

echo [1/4] 如果 Nginx 正在占用 80 端口，请先停止它，否则 IIS 会起不来。
echo       按任意键继续...
pause >nul

echo.
echo [2/4] 设置 WAS 启动类型为 Manual 并启动...
sc config WAS start= demand
net start WAS

echo.
echo [3/4] 设置 W3SVC 启动类型为 Automatic 并启动...
sc config W3SVC start= auto
net start W3SVC

echo.
echo [4/4] 当前状态：
sc query WAS   | findstr /i "STATE"
sc query W3SVC | findstr /i "STATE"

echo.
echo 访问 http://localhost 验证 IIS 是否正常。
echo.
pause
