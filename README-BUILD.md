# 🎭 Clube do Minhoca - Guia de Build e Deploy

## 📦 Pré-requisitos

Você precisa ter instalado no seu computador:
- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org)
- **npm** (vem junto com o Node.js)

## 🚀 Como Fazer o Build

### 1. Abra o Terminal/Prompt de Comando

**Windows:**
- Aperte `Windows + R`
- Digite `cmd` e pressione Enter
- Navegue até a pasta do projeto: `cd caminho\para\a\pasta\clube-do-minhoca`

**Mac/Linux:**
- Abra o Terminal
- Navegue até a pasta do projeto: `cd caminho/para/a/pasta/clube-do-minhoca`

### 2. Instale as Dependências

```bash
npm install
```

⏱️ Isso pode levar alguns minutos na primeira vez.

### 3. Faça o Build

```bash
npm run build
```

✅ Uma pasta chamada `dist` será criada com todos os arquivos prontos para deploy!

### 4. (Opcional) Teste Localmente

Para testar o site antes de fazer deploy:

```bash
npm run preview
```

Abra o navegador em `http://localhost:4173`

---

## 🌐 Deploy na Netlify

### Opção A: Netlify Drop (Mais Rápido)

1. Acesse [netlify.com/drop](https://app.netlify.com/drop)
2. **Arraste a pasta `dist`** (não a pasta raiz do projeto!)
3. Aguarde o upload
4. Seu site estará no ar! 🎉

### Opção B: Deploy via Interface Netlify (Recomendado)

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em **"Add new site"** → **"Deploy manually"**
3. Arraste a pasta `dist`
4. Configure o domínio customizado (veja abaixo)

---

## 🔗 Conectar Domínio do Registro.br

### No Painel da Netlify:

1. Vá para **Site Settings** → **Domain management**
2. Clique em **"Add custom domain"**
3. Digite seu domínio (ex: `clubedominhoca.com.br`)
4. Netlify vai verificar e mostrar os DNS necessários

### No Painel do Registro.br:

**Opção 1 - Apontar DNS (Mais fácil):**

1. Acesse [registro.br](https://registro.br)
2. Faça login e selecione seu domínio
3. Vá em **"Editar Zona"**
4. Adicione/edite estes registros:

```
Tipo: A
Nome: @
Valor: 75.2.60.5
(O IP pode ser diferente - use o que a Netlify mostrar)

Tipo: CNAME
Nome: www
Valor: seu-site.netlify.app
```

**Opção 2 - Nameservers Netlify (Mais controle):**

1. Na Netlify, vá em **Domain Settings** → **Nameservers**
2. Ative o **"Netlify DNS"**
3. Anote os nameservers (exemplo: `dns1.p01.nsone.net`)
4. No Registro.br, vá em **"Alterar Servidores DNS"**
5. Cole os nameservers da Netlify

⏰ **Propagação DNS:** Pode levar de 5 minutos até 48 horas

---

## ✅ Formulário de Contato (Netlify Forms)

O formulário já está configurado! Após o deploy:

1. Vá em **Site Settings** → **Forms**
2. Você verá o formulário "contato"
3. Configure notificações por email se desejar

---

## 🆘 Resolução de Problemas

### Erro: "command not found: npm"
→ Você precisa instalar o Node.js primeiro

### Erro durante o build
→ Delete a pasta `node_modules` e rode `npm install` novamente

### Site não carrega imagens
→ Verifique se todas as imagens estão na pasta `dist` após o build

### Formulário não funciona
→ O formulário só funciona após deploy na Netlify (não funciona localmente)

---

## 📝 Atualizar o Site

Para fazer mudanças no site:

1. Edite os arquivos necessários
2. Rode `npm run build` novamente
3. Arraste a nova pasta `dist` para a Netlify

---

## 🎯 Próximos Passos

- [ ] Fazer o build (`npm run build`)
- [ ] Deploy na Netlify
- [ ] Configurar domínio do Registro.br
- [ ] Testar formulário de contato
- [ ] Configurar SSL (automático na Netlify)
- [ ] Compartilhar o site! 🎉

---

**Dúvidas?** O arquivo `netlify.toml` já está configurado corretamente para o deploy automático.

**Suporte Netlify:** [docs.netlify.com](https://docs.netlify.com)
