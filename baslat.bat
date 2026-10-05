@echo off
chcp 65001 >nul
title AegisLLM - Security Console
echo ========================================================
echo         AegisLLM Security Operations Center
echo ========================================================
echo.
cd /d "%~dp0"

echo [1/2] Sunucu başlatılıyor... (http://localhost:8001)
start http://localhost:8001

echo [2/2] AegisLLM SOC Paneli aktif. Kapatmak için bu pencereyi kapatabilirsiniz.
echo.
".venv\Scripts\python.exe" -m uvicorn aegis.web.app:app --host 127.0.0.1 --port 8001

pause
