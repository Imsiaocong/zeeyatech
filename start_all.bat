@echo off
chcp 65001 >nul
title 数智工厂 一键启动

cd /d "%~dp0"
set "ROOT=%cd%"

echo =======================================================
echo  数智工厂 平台启动脚本
echo  - Label Studio: http://127.0.0.1:10500
echo  - 公司网站:     http://127.0.0.1:5500
echo =======================================================

:: 启动 Label Studio (后台窗口)
start "Label Studio (10500)" cmd /k "chcp 65001 >nul && cd /d "%ROOT%\label-studio" && set "LABEL_STUDIO_BASE_DATA_DIR=%ROOT%\data-10500" && set "LABEL_STUDIO_PORT=10500" && set "LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED=true" && set "LABEL_STUDIO_HOST=" && set "DOMAIN_FROM_REQUEST=true" && python label_studio/manage.py runserver 0.0.0.0:10500"

:: 启动网页服务器 (Python http.server)
start "DataForge Website (5500)" cmd /k "chcp 65001 >nul && cd /d "%ROOT%" && python -m http.server 5500 --bind 0.0.0.0"

echo.
echo 两个服务已启动，请勿关闭各自的窗口。
echo 访问 http://127.0.0.1:5500 打开公司网站
echo.
pause
