# Extensão Chrome - Capturar Página para PDF

Uma extensão do Chrome que permite capturar páginas web completas e convertê-las em PDF diretamente no navegador, sem necessidade de servidores externos.

## 🚀 Funcionalidades

- **Captura de página completa**: Converte toda a página web em PDF, incluindo conteúdo fora da área visível
- **Captura de área visível**: Gera PDF apenas da área atualmente visível na tela
- **Interface amigável**: Popup moderno e intuitivo
- **Notificações**: Feedback visual do progresso da operação
- **Nomes automáticos**: Arquivos PDF nomeados automaticamente com título da página e timestamp
- **Funciona offline**: Não requer conexão com servidores externos

## 📦 Instalação

### Método 1: Instalação Manual (Modo Desenvolvedor)

1. **Clone ou baixe os arquivos** da extensão para uma pasta local
2. **Abra o Chrome** e navegue para `chrome://extensions/`
3. **Ative o "Modo do desenvolvedor"** no canto superior direito
4. **Clique em "Carregar sem compactação"**
5. **Selecione a pasta** onde estão os arquivos da extensão
6. A extensão será instalada e aparecerá na barra de ferramentas

### Método 2: Instalação via arquivo .crx (se disponível)

1. Baixe o arquivo `.crx` da extensão
2. Arraste o arquivo para a página `chrome://extensions/`
3. Confirme a instalação

## 🎯 Como Usar

### Captura via Popup

1. **Clique no ícone da extensão** na barra de ferramentas
2. Escolha uma das opções:
   - **"Capturar Página Completa"**: Gera PDF de toda a página
   - **"Capturar Área Visível"**: Gera PDF apenas da área visível
3. **Aguarde o processamento** (você verá uma notificação)
4. **O PDF será baixado automaticamente** na pasta de downloads

### Captura via Atalho

- A extensão também pode ser ativada clicando diretamente no ícone (sem popup)
- Isso executará a captura completa da página automaticamente

## 📋 Requisitos

- **Google Chrome** versão 88 ou superior
- **Páginas HTTP/HTTPS**: A extensão só funciona em páginas web (não em páginas internas do Chrome)
- **Permissões**: A extensão precisa de acesso à aba ativa e permissão para downloads

## 🔧 Estrutura dos Arquivos

```
prtscr02/
├── manifest.json          # Configuração da extensão
├── background.js          # Script de background (geração de PDF)
├── content.js            # Script de conteúdo (captura de página)
├── popup.html            # Interface do popup
├── popup.js              # Lógica do popup
├── icon.png              # Ícone da extensão
└── README.md             # Este arquivo
```

## ⚙️ Configurações Técnicas

### Permissões Utilizadas

- `activeTab`: Acesso à aba ativa
- `downloads`: Permissão para baixar arquivos
- `notifications`: Exibir notificações de status
- `scripting`: Injetar scripts nas páginas
- `<all_urls>`: Acesso a todas as URLs HTTP/HTTPS

### Formato do PDF

- **Formato**: A4
- **Margens**: 0.4 polegadas em todos os lados
- **Fundo**: Incluído (cores e imagens de fundo)
- **Qualidade**: Alta resolução

## 🐛 Solução de Problemas

### A extensão não funciona em uma página

- **Verifique se a URL é HTTP/HTTPS**: A extensão não funciona em páginas `chrome://`, `file://` ou outras páginas internas
- **Recarregue a página**: Às vezes é necessário recarregar a página após instalar a extensão

### PDF não é gerado

- **Verifique as permissões**: Certifique-se de que o Chrome tem permissão para baixar arquivos
- **Desative outras extensões**: Conflitos com outras extensões podem causar problemas
- **Verifique o console**: Pressione F12 e veja se há erros no console

### Qualidade do PDF está ruim

- **Aguarde o carregamento completo**: Certifique-se de que a página carregou completamente antes de capturar
- **Verifique o zoom**: PDFs são gerados com base no zoom atual da página

## 🔄 Atualizações

Para atualizar a extensão:

1. Substitua os arquivos na pasta da extensão
2. Vá para `chrome://extensions/`
3. Clique no botão "Recarregar" na extensão

## 📝 Changelog

### v2.0
- Remoção da dependência de servidor externo
- Interface popup melhorada
- Captura de área visível
- Melhor tratamento de erros
- Nomes de arquivo automáticos

### v1.0
- Versão inicial com servidor Flask externo

## 🤝 Contribuição

Para contribuir com melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🆘 Suporte

Se encontrar problemas ou tiver sugestões:

1. Verifique a seção "Solução de Problemas" acima
2. Abra uma issue no repositório
3. Inclua informações sobre seu sistema e o erro encontrado