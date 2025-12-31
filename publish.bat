@echo off
echo Building Next.js Static Site...
npm run build

echo Exporting Static HTML...
REM Karena Next.js 15+ pakai output: export
REM Jadi tidak perlu `next export` manual lagi

echo Copying files to publish folder...
robocopy out ..\website_al_manshurah_publish /MIR /NFL /NDL /NJH /NJS /NC
REM Robocopy exit codes 0-7 are success
IF %ERRORLEVEL% GEQ 8 (
    echo Robocopy failed with exit code %ERRORLEVEL%
    exit /b 1
)

echo Creating symbolic link to .git...
IF EXIST ..\website_al_manshurah_publish\.git (
    echo Removing existing .git symbolic link...
    rmdir ..\website_al_manshurah_publish\.git
)
mklink /D ..\website_al_manshurah_publish\.git ..\website_al_manshurah\.git

echo Switching to publish folder and committing...
cd /d ..\website_al_manshurah_publish
git add .
git commit -m "Update publish %DATE% %TIME%"
git push origin master
