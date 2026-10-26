@echo off
title EchoMind English Local Server
echo ========================================================
echo   EchoMind English - 英文式思考與 Shadowing 跟讀訓練器
echo   正在啟動本地伺服器 (Zero-Dependency Local Server)...
echo ========================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-server.ps1"
pause
