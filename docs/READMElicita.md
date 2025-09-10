# Extensão de Captura - Documentação

## 📋 Descrição

A **Extensão de Captura** é uma extensão para navegadores Chrome que permite capturar páginas web completas e convertê-las automaticamente em arquivos PDF. A extensão realiza capturas de tela de toda a página, incluindo conteúdo que requer rolagem, e gera um PDF com todas as seções da página.

## ✨ Funcionalidades

- 📸 Captura de páginas web completas (incluindo conteúdo fora da viewport)
- 📄 Conversão automática para PDF
- 🖱️ Interface simples com um clique
- 💾 Download automático do arquivo PDF gerado
- 🔄 Suporte a páginas longas com rolagem automática

## 🛠️ Requisitos do Sistema

- **Navegador**: Google Chrome (versão 88 ou superior)
- **Sistema Operacional**: Windows, macOS ou Linux
- **Permissões**: A extensão requer permissões para:
  - Acessar abas ativas
  - Executar scripts em páginas web
  - Realizar downloads

## 📥 Instalação

### Método 1: Instalação Manual (Modo Desenvolvedor)

1. **Baixe os arquivos da extensão**
   - Certifique-se de ter todos os arquivos do projeto em uma pasta local

2. **Abra o Chrome e acesse as extensões**
   - Digite `chrome://extensions/` na barra de endereços
   - Ou vá em **Menu** → **Mais ferramentas** → **Extensões**

3. **Ative o modo desenvolvedor**
   - No canto superior direito, ative a opção **"Modo do desenvolvedor"**

4. **Carregue a extensão**
   - Clique em **"Carregar sem compactação"**
   - Selecione a pasta que contém os arquivos da extensão
   - A extensão será instalada e aparecerá na lista

5. **Fixe a extensão na barra de ferramentas**
   - Clique no ícone de extensões (🧩) na barra de ferramentas
   - Encontre "Extensão de Captura" e clique no ícone de alfinete (📌)

## 🚀 Como Usar

### Capturando uma Página

1. **Navegue até a página desejada**
   - Abra a página web que você deseja capturar
   - Aguarde o carregamento completo da página

2. **Acione a extensão**
   - Clique no ícone da **Extensão de Captura** na barra de ferramentas
   - Ou clique no botão **"Capturar Página"** no popup da extensão

3. **Aguarde o processamento**
   - A extensão irá automaticamente:
     - Rolar pela página inteira
     - Capturar screenshots de cada seção
     - Gerar um arquivo PDF
     - Iniciar o download automaticamente

4. **Localize o arquivo**
   - O PDF será salvo com o nome `pagina_capturada.pdf`
   - Verifique a pasta de downloads do seu navegador

### Dicas de Uso

- ⏱️ **Aguarde o carregamento**: Certifique-se de que a página esteja completamente carregada antes de capturar
- 🖼️ **Conteúdo dinâmico**: A extensão captura o conteúdo visível no momento da execução
- 📱 **Páginas responsivas**: Funciona melhor em páginas com layout fixo
- 🔄 **Páginas longas**: A extensão automaticamente rola e captura todo o conteúdo

## 🔧 Estrutura do Projeto

```
extensao-captura/
├── manifest.json      # Configurações da extensão
├── background.js      # Script principal de captura
├── popup.html         # Interface do usuário
├── popup.js          # Lógica da interface
├── icon.png          # Ícone da extensão
└── README.md         # Esta documentação
```

## 📁 Arquivos Principais

### manifest.json
Define as configurações, permissões e estrutura da extensão.

### background.js
Contém a lógica principal para:
- Captura de screenshots
- Rolagem automática da página
- Geração do PDF
- Gerenciamento de downloads

### popup.html/popup.js
Interface simples com botão de captura.

## ⚠️ Limitações Conhecidas

- **Conteúdo protegido**: Algumas páginas podem bloquear capturas por políticas de segurança
- **Páginas muito longas**: Páginas extremamente longas podem demorar mais para processar
- **Conteúdo dinâmico**: Elementos que mudam constantemente podem não ser capturados corretamente
- **Popups e modais**: Elementos flutuantes podem interferir na captura

## 🐛 Solução de Problemas

### A extensão não aparece na barra de ferramentas
- Verifique se está instalada em `chrome://extensions/`
- Certifique-se de que está ativada
- Fixe a extensão clicando no ícone de alfinete

### Erro ao capturar página
- Recarregue a página e tente novamente
- Verifique se a página permite capturas de tela
- Verifique o console do navegador (F12) para mensagens de erro

### PDF não é gerado
- Certifique-se de que a página carregou completamente
- Verifique se há bloqueadores de popup ativos
- Confirme as permissões de download do navegador

### Qualidade da imagem baixa
- A qualidade depende da resolução da tela
- Páginas com muito conteúdo podem ter resolução reduzida automaticamente

## 🔄 Atualizações

Para atualizar a extensão:

1. Substitua os arquivos antigos pelos novos
2. Vá em `chrome://extensions/`
3. Clique no botão de atualização (🔄) da extensão
4. Ou desative e reative a extensão

## 📞 Suporte

Se encontrar problemas ou tiver sugestões:

1. Verifique a seção de **Solução de Problemas**
2. Consulte o console do navegador para mensagens de erro
3. Certifique-se de que todas as permissões estão concedidas

## 📄 Licença

Este projeto é distribuído sob licença livre para uso pessoal e educacional.

---

**Versão**: 1.0  
**Última atualização**: 2025  
**Compatibilidade**: Chrome 88+