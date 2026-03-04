@echo off
title Actask Task Manager

echo ===============================
echo        ACTASK STARTER
echo ===============================
echo.

cd /d %~dp0

echo Opening application...
start http://127.0.0.1:5500/index.html

echo.
echo If the app doesn't open:
echo 1. Open the project in VS Code
echo 2. Run Live Server
echo.

pause