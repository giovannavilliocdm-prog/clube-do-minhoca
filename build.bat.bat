@echo off
echo ========================================
echo   CLUBE DO MINHOCA - Build Automatico
echo ========================================
echo.

echo [1/2] Instalando dependencias...
call npm install
if errorlevel 1 (
    echo.
    echo ERRO: Falha ao instalar dependencias
    pause
    exit /b 1
)

echo.
echo [2/2] Fazendo build do projeto...
call npm run build
if errorlevel 1 (
    echo.
    echo ERRO: Falha ao fazer build
    pause
    exit /b 1
)

echo.
echo ========================================
echo   BUILD CONCLUIDO COM SUCESSO!
echo ========================================
echo.
echo A pasta 'dist' foi criada com sucesso!
echo.
echo PROXIMOS PASSOS:
echo 1. Acesse: https://app.netlify.com/drop
echo 2. Arraste a pasta 'dist' para fazer deploy
echo 3. Configure seu dominio do Registro.br
echo.
echo Pressione qualquer tecla para abrir a pasta dist...
pause > nul

start dist

echo.
echo Pronto! Agora e so arrastar a pasta 'dist' para o Netlify!
echo.
pause
