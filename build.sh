#!/bin/bash

echo "========================================"
echo "  CLUBE DO MINHOCA - Build Automático"
echo "========================================"
echo ""

echo "[1/2] Instalando dependências..."
npm install
if [ $? -ne 0 ]; then
    echo ""
    echo "ERRO: Falha ao instalar dependências"
    exit 1
fi

echo ""
echo "[2/2] Fazendo build do projeto..."
npm run build
if [ $? -ne 0 ]; then
    echo ""
    echo "ERRO: Falha ao fazer build"
    exit 1
fi

echo ""
echo "========================================"
echo "  BUILD CONCLUÍDO COM SUCESSO!"
echo "========================================"
echo ""
echo "A pasta 'dist' foi criada com sucesso!"
echo ""
echo "PRÓXIMOS PASSOS:"
echo "1. Acesse: https://app.netlify.com/drop"
echo "2. Arraste a pasta 'dist' para fazer deploy"
echo "3. Configure seu domínio do Registro.br"
echo ""
echo "Abrindo a pasta dist..."

# Abrir pasta dist dependendo do sistema operacional
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open dist
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open dist 2>/dev/null || nautilus dist 2>/dev/null || echo "Pasta dist criada em: $(pwd)/dist"
fi

echo ""
echo "Pronto! Agora é só arrastar a pasta 'dist' para o Netlify!"
echo ""
