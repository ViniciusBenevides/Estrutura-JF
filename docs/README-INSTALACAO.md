# 📥 Guia de Instalação - Extensão de Captura

## 🎯 O que é esta extensão?

A **Extensão de Captura** permite capturar páginas web completas e convertê-las automaticamente em arquivos PDF. Com apenas um clique, você pode salvar qualquer página da internet como PDF, incluindo todo o conteúdo que precisa de rolagem.

## 📋 Requisitos

- **Google Chrome** (versão 88 ou superior)
- **Sistema Operacional**: Windows, macOS ou Linux
- **Espaço em disco**: Mínimo 5MB livres

## 🚀 Instalação Passo a Passo

### Passo 1: Baixar os Arquivos
1. Baixe todos os arquivos da extensão
2. Extraia em uma pasta no seu computador (ex: `C:\extensao-captura\`)
3. Certifique-se de que a pasta contém os seguintes arquivos:
   - `manifest.json`
   - `background.js`
   - `popup.html`
   - `popup.js`
   - `icon.png`

### Passo 2: Abrir o Chrome
1. Abra o navegador **Google Chrome**
2. Na barra de endereços, digite: `chrome://extensions/`
3. Pressione **Enter**

### Passo 3: Ativar Modo Desenvolvedor
1. No canto superior direito da página, você verá um botão **"Modo do desenvolvedor"**
2. **Clique** para ativá-lo (deve ficar azul/ativo)

![Modo Desenvolvedor](https://via.placeholder.com/400x100/4285f4/ffffff?text=Modo+do+Desenvolvedor+ATIVO)

### Passo 4: Instalar a Extensão
1. Clique no botão **"Carregar sem compactação"**
2. Na janela que abrir, navegue até a pasta onde você extraiu os arquivos
3. **Selecione a pasta** (não os arquivos individuais)
4. Clique em **"Selecionar pasta"**

### Passo 5: Verificar Instalação
1. A extensão deve aparecer na lista com o nome **"Extensão de Captura"**
2. Certifique-se de que o botão está **ativado** (azul)
3. Se aparecer algum erro, verifique se todos os arquivos estão na pasta

### Passo 6: Fixar na Barra de Ferramentas
1. Clique no ícone de **extensões** (🧩) na barra de ferramentas do Chrome
2. Encontre **"Extensão de Captura"** na lista
3. Clique no ícone de **alfinete** (📌) ao lado do nome
4. O ícone da extensão aparecerá na barra de ferramentas

## ✅ Como Usar Após a Instalação

### Capturar uma Página
1. **Navegue** até a página que deseja capturar
2. **Aguarde** o carregamento completo da página
3. **Clique** no ícone da extensão na barra de ferramentas
4. **Aguarde** o processamento (a página irá rolar automaticamente)
5. O **PDF será baixado** automaticamente para sua pasta de Downloads

### Localizar o Arquivo
- O arquivo será salvo como `pagina_capturada.pdf`
- Verifique sua pasta de **Downloads**
- O Chrome pode mostrar o download na parte inferior da tela

## 🔧 Solução de Problemas

### ❌ "Extensão não aparece na lista"
**Solução:**
- Verifique se todos os arquivos estão na pasta
- Certifique-se de que o arquivo `manifest.json` está presente
- Tente desativar e reativar o "Modo do desenvolvedor"

### ❌ "Erro ao carregar extensão"
**Solução:**
- Verifique se a pasta contém todos os arquivos necessários
- Certifique-se de que não há arquivos corrompidos
- Tente extrair os arquivos novamente

### ❌ "Ícone não aparece na barra"
**Solução:**
- Clique no ícone de extensões (🧩)
- Procure por "Extensão de Captura"
- Clique no alfinete (📌) para fixar

### ❌ "Não consegue capturar a página"
**Solução:**
- Recarregue a página e tente novamente
- Verifique se a página carregou completamente
- Algumas páginas podem bloquear capturas por segurança

### ❌ "PDF não é gerado"
**Solução:**
- Verifique se o Chrome permite downloads
- Desative bloqueadores de popup temporariamente
- Certifique-se de que há espaço em disco suficiente

## 🔄 Atualizando a Extensão

### Quando há uma nova versão:
1. Substitua os arquivos antigos pelos novos na mesma pasta
2. Vá em `chrome://extensions/`
3. Encontre a "Extensão de Captura"
4. Clique no botão **🔄 (atualizar)**
5. Ou desative e reative a extensão

## ⚠️ Limitações Importantes

- **Páginas protegidas**: Alguns sites podem bloquear capturas
- **Conteúdo dinâmico**: Elementos que mudam constantemente podem não aparecer
- **Páginas muito longas**: Podem demorar mais para processar
- **Popups**: Janelas flutuantes podem interferir na captura

## 🆘 Precisa de Ajuda?

### Verificações Básicas:
1. ✅ Chrome atualizado (versão 88+)?
2. ✅ Modo desenvolvedor ativado?
3. ✅ Todos os arquivos na pasta?
4. ✅ Extensão ativada na lista?
5. ✅ Ícone fixado na barra?

### Se ainda não funcionar:
1. **Reinicie** o Chrome completamente
2. **Desinstale** e **reinstale** a extensão
3. **Verifique** se não há antivírus bloqueando
4. **Teste** em uma página simples primeiro

## 📞 Informações Técnicas

- **Versão**: 1.0
- **Compatibilidade**: Chrome 88+
- **Tamanho**: ~50KB
- **Permissões**: Captura de tela, Downloads, Acesso a abas
- **Idioma**: Português

---

## 🎉 Pronto para Usar!

Após seguir todos os passos, sua extensão estará instalada e pronta para capturar páginas web em PDF. Experimente capturar esta própria página como teste!

**Dica**: Para melhores resultados, sempre aguarde o carregamento completo da página antes de capturar.
