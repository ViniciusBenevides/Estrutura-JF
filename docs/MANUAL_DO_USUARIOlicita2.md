# 📖 Manual do Usuário - Extensão Capturar Página para PDF

## 🎯 O que é esta extensão?

A **Extensão Capturar Página para PDF** permite que você converta qualquer página da web em um arquivo PDF de alta qualidade, diretamente do seu navegador Chrome, sem precisar de programas externos ou conexão com a internet.

---

## 🚀 Instalação Passo a Passo

### Passo 1: Preparar os arquivos
1. Certifique-se de que você tem todos os arquivos da extensão em uma pasta
2. Os arquivos necessários são:
   - `manifest.json`
   - `background.js`
   - `content.js`
   - `popup.html`
   - `popup.js`
   - `icon.png`

### Passo 2: Instalar no Chrome
1. **Abra o Google Chrome**
2. **Digite na barra de endereços**: `chrome://extensions/`
3. **Ative o "Modo do desenvolvedor"** (botão no canto superior direito)
4. **Clique em "Carregar sem compactação"**
5. **Selecione a pasta** onde estão os arquivos da extensão
6. **Pronto!** A extensão aparecerá na sua barra de ferramentas

---

## 🎮 Como Usar

### Método 1: Usando o Popup (Recomendado)

1. **Navegue para a página** que você quer converter em PDF
2. **Clique no ícone da extensão** na barra de ferramentas do Chrome
3. **Escolha uma das opções**:
   - 📥 **Capturar Página Completa**: Converte toda a página (incluindo partes que não estão visíveis)
   - 👁️ **Capturar Área Visível**: Converte apenas o que está aparecendo na tela
4. **Aguarde o processamento** (você verá uma mensagem "Processando...")
5. **O PDF será baixado automaticamente** na sua pasta de Downloads

### Método 2: Clique Direto (Captura Completa)

1. **Navegue para a página** desejada
2. **Clique uma vez no ícone** da extensão
3. **A captura completa será iniciada automaticamente**
4. **O PDF será baixado** quando estiver pronto

---

## 📋 Interface do Popup

Quando você clica no ícone da extensão, verá uma janela com:

### Informações da Página
- **Título da página** atual
- **URL da página** atual

### Botões de Ação
- **📥 Capturar Página Completa**
  - Converte toda a página, incluindo conteúdo que precisa de rolagem
  - Ideal para artigos longos, páginas extensas
  
- **👁️ Capturar Área Visível**
  - Converte apenas o que está visível na tela no momento
  - Mais rápido, ideal para capturas específicas

### Indicadores de Status
- **⏳ Processando...**: Mostra quando a conversão está em andamento
- **✅ Concluído**: Confirma quando o PDF foi gerado com sucesso
- **❌ Erro**: Informa se houve algum problema

---

## 📁 Onde Encontrar os PDFs

Os arquivos PDF são salvos automaticamente na sua **pasta de Downloads** do Chrome com nomes automáticos:

### Formato do Nome
- **Página Completa**: `titulo-da-pagina-2025-08-26T11-53-30.pdf`
- **Área Visível**: `titulo-da-pagina-visivel-2025-08-26T11-53-30.pdf`

### Exemplo
Se você capturar a página "Google - Pesquisa" em 26/08/2025 às 11:53:30, o arquivo será:
`Google-Pesquisa-2025-08-26T11-53-30.pdf`

---

## ✅ Páginas Compatíveis

### ✅ Funciona com:
- Páginas HTTP (http://exemplo.com)
- Páginas HTTPS (https://exemplo.com)
- Sites de notícias
- Blogs e artigos
- Redes sociais
- Lojas online
- Documentos online

### ❌ NÃO funciona com:
- Páginas internas do Chrome (chrome://...)
- Arquivos locais (file://...)
- Páginas de erro do navegador
- Extensões do Chrome

---

## 🔧 Configurações do PDF

### Formato Padrão
- **Tamanho**: A4
- **Orientação**: Retrato
- **Margens**: 0,4 polegadas em todos os lados
- **Qualidade**: Alta resolução
- **Fundo**: Incluído (cores e imagens)

### Características
- **Texto selecionável**: Sim, você pode copiar texto do PDF
- **Links funcionais**: Links da página original funcionam no PDF
- **Imagens**: Incluídas em alta qualidade
- **Formatação**: Preservada conforme a página original

---

## 🚨 Solução de Problemas

### "Esta extensão só funciona em páginas HTTP/HTTPS"
**Problema**: Você está tentando usar em uma página não suportada
**Solução**: Navegue para um site normal (como google.com, youtube.com, etc.)

### PDF não foi baixado
**Problema**: O arquivo não apareceu na pasta Downloads
**Soluções**:
1. Verifique se o Chrome tem permissão para baixar arquivos
2. Olhe na pasta Downloads padrão do seu computador
3. Verifique se não há bloqueadores de download ativos

### Extensão não aparece na barra
**Problema**: Ícone da extensão não está visível
**Soluções**:
1. Clique no ícone de "extensões" (quebra-cabeça) na barra do Chrome
2. Encontre "Capturar Página para PDF" e clique no "alfinete"
3. Recarregue a página atual

### Erro durante o processamento
**Problema**: Mensagem de erro aparece
**Soluções**:
1. Recarregue a página e tente novamente
2. Aguarde a página carregar completamente antes de capturar
3. Tente com uma página mais simples primeiro

### PDF com qualidade ruim
**Problema**: Texto ou imagens aparecem borrados
**Soluções**:
1. Aguarde a página carregar completamente
2. Certifique-se de que as imagens carregaram
3. Tente ajustar o zoom da página (100% é ideal)

---

## 💡 Dicas de Uso

### Para Melhores Resultados
1. **Aguarde o carregamento completo** da página antes de capturar
2. **Use zoom 100%** para melhor qualidade
3. **Feche popups ou modais** que possam atrapalhar
4. **Para páginas longas**, use "Capturar Página Completa"
5. **Para capturas rápidas**, use "Capturar Área Visível"

### Casos de Uso Ideais
- **Salvar artigos** para leitura offline
- **Arquivar páginas importantes** para referência
- **Criar relatórios** com conteúdo web
- **Salvar comprovantes** de compras online
- **Documentar pesquisas** acadêmicas
- **Preservar conteúdo** que pode ser alterado

---

## 🔒 Privacidade e Segurança

### O que a extensão faz:
- ✅ Acessa apenas a página atual quando você solicita
- ✅ Processa tudo localmente no seu computador
- ✅ Não envia dados para servidores externos
- ✅ Não armazena histórico de páginas visitadas

### O que a extensão NÃO faz:
- ❌ Não monitora sua navegação
- ❌ Não coleta dados pessoais
- ❌ Não envia informações para terceiros
- ❌ Não funciona em abas privadas/incógnitas

---

## 📞 Suporte

### Se você encontrar problemas:

1. **Primeiro**: Consulte a seção "Solução de Problemas" acima
2. **Segundo**: Tente desinstalar e reinstalar a extensão
3. **Terceiro**: Verifique se você tem a versão mais recente do Chrome

### Informações para Suporte:
Ao reportar um problema, inclua:
- Versão do Chrome
- Sistema operacional
- URL da página que estava tentando capturar
- Mensagem de erro exata (se houver)

---

## 📈 Atualizações

### Como atualizar:
1. Baixe a nova versão dos arquivos
2. Substitua os arquivos antigos
3. Vá para `chrome://extensions/`
4. Clique em "Recarregar" na extensão

### Histórico de Versões:
- **v2.0**: Versão atual com interface melhorada e captura offline
- **v1.0**: Versão inicial (dependia de servidor externo)

---

## ❓ Perguntas Frequentes

### P: A extensão funciona offline?
**R**: Sim! Uma vez instalada, funciona sem conexão com a internet.

### P: Posso editar o PDF depois?
**R**: Sim, você pode abrir o PDF em qualquer editor de PDF para fazer alterações.

### P: Há limite de páginas que posso capturar?
**R**: Não há limite. Capture quantas páginas quiser.

### P: O PDF mantém a formatação original?
**R**: Sim, cores, fontes e layout são preservados.

### P: Funciona em qualquer site?
**R**: Funciona na maioria dos sites públicos HTTP/HTTPS.

### P: Posso escolher onde salvar o PDF?
**R**: O PDF é salvo na pasta Downloads padrão do Chrome automaticamente.

---

**🎉 Aproveite sua nova extensão de captura de PDF!**

*Este manual foi criado para ajudar você a usar a extensão da melhor forma possível. Se tiver dúvidas, consulte as seções relevantes acima.*
