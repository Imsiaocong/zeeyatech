@echo off
title 启动 Label Studio (10500端口)
echo =======================================================
echo 正在启动专属的 Label Studio 实例...
echo 端口: 10500
echo 数据目录: data-10500
echo =======================================================

:: 将当前执行路径切换到脚本所在的目录 (data-factory)
cd /d "%~dp0"

:: 设置环境变量，指定独立的数据目录
set "LABEL_STUDIO_BASE_DATA_DIR=%~dp0data-10500"
set "LABEL_STUDIO_PORT=10500"

:: 进入源码目录
cd label-studio

:: 启动 Django 开发服务器
python label_studio/manage.py runserver 10500

pause
