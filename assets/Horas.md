# Manual do Usuário - Sistema de Processamento de Horas Extras

## 📋 Visão Geral

O **Sistema de Processamento de Horas Extras** é uma aplicação web desenvolvida em Django que permite processar e analisar dados de horas trabalhadas de funcionários. O sistema suporta dois tipos principais de processamento:

1. **Arquivos CSV de Catraca Eletrônica** - Processa dados de entrada e saída de funcionários
2. **Arquivos PDF do Sistema SEI** - Extrai informações de relatórios de ponto eletrônico

## 🎯 Funcionalidades Principais

### ✅ Processamento de Dados
- Upload e processamento de arquivos CSV (catraca eletrônica)
- Upload e processamento de arquivos PDF (sistema SEI)
- Extração automática de dados usando OCR (Tesseract)
- Geração de relatórios consolidados

### ✅ Análise e Visualização
- Dashboard com estatísticas de horas trabalhadas
- Visualização de dados por funcionário
- Relatórios em formato CSV e Excel
- Cálculo automático de horas extras

### ✅ Gerenciamento de Arquivos
- Download de arquivos processados
- Limpeza de dados processados
- Processamento em lote de arquivos

## 🚀 Como Acessar o Sistema

### 1. Acesso via Navegador
```
http://seu_servidor/folhafacil/horas/
```

### 2. Interface Principal
A interface principal do sistema apresenta:
- **Header**: Título do sistema e informações técnicas
- **Seção de Upload**: Área para envio de arquivos
- **Dashboard**: Estatísticas e dados processados
- **Lista de Arquivos**: Arquivos já processados

## 📁 Tipos de Arquivos Suportados

### 📄 Arquivos CSV - Catraca Eletrônica
**Formato aceito**: Arquivos CSV com dados de entrada/saída de funcionários

**Estrutura esperada**:
```csv
CPF;Doc. Prov.;Sentido;Cartao;Catraca;Horario do Evento
12345678901;123456;Entrada;001;001;08:00:00
12345678901;123456;Saída;001;001;17:00:00
```

**Características**:
- Separador: ponto e vírgula (;) ou vírgula (,)
- Cabeçalho: 5 linhas de cabeçalho (serão ignoradas)
- Colunas: CPF, Documento Provisório, Sentido, Cartão, Catraca, Horário
- Encoding: UTF-8

### 📄 Arquivos PDF - Sistema SEI
**Formato aceito**: Relatórios de ponto eletrônico em PDF

**Características**:
- Relatórios gerados pelo sistema SEI
- Contém dados de funcionários e horários
- Processamento via OCR (Tesseract)
- Extração automática de CPF, nome e horários

## 🔧 Como Usar o Sistema

### Passo 1: Acessar o Sistema
1. Abra seu navegador web
2. Digite o endereço: `http://seu_servidor/folhafacil/horas/`
3. Aguarde o carregamento da página principal

### Passo 2: Selecionar o Tipo de Processamento
Na seção "Upload de Arquivos":

1. **Para arquivos CSV (Catraca Eletrônica)**:
   - Selecione "Catraca Eletrônica (CSV)"
   - Clique no botão de upload
   - Escolha o arquivo CSV com os dados da catraca

2. **Para arquivos PDF (Sistema SEI)**:
   - Selecione "Sistema SEI (PDF)"
   - Clique no botão de upload
   - Escolha o arquivo PDF do relatório SEI

### Passo 3: Processar o Arquivo
1. Após selecionar o arquivo, clique em **"Processar Arquivo"**
2. Aguarde o processamento (pode levar alguns minutos para PDFs)
3. O sistema mostrará uma mensagem de sucesso ou erro

### Passo 4: Visualizar Resultados
Após o processamento bem-sucedido:

1. **Dashboard**: Visualize estatísticas gerais
2. **Arquivos Processados**: Veja a lista de arquivos gerados
3. **Download**: Baixe os arquivos processados

## 📊 Dashboard e Estatísticas

### Informações Exibidas
- **Total de Funcionários**: Número de funcionários processados
- **Arquivos Processados**: Lista de arquivos gerados
- **Dados por Funcionário**: CPF, data, horas trabalhadas

### Dados do Dashboard
Para cada funcionário processado, o sistema mostra:
- **CPF**: Documento do funcionário
- **Data**: Data do registro
- **Horas**: Total de horas trabalhadas (formato HH:MM:SS)
- **Horas Decimais**: Horas convertidas para formato decimal

## 📥 Download de Arquivos

### Arquivos Gerados
O sistema gera os seguintes tipos de arquivo:

1. **Total_Horas_[CPF].csv**: Relatório individual por funcionário
2. **Total_Horas_[CPF].xlsx**: Relatório em Excel por funcionário
3. **Arquivos consolidados**: Relatórios com todos os funcionários

### Como Baixar
1. Na seção "Arquivos Processados", clique no nome do arquivo
2. O download será iniciado automaticamente
3. Salve o arquivo em sua pasta de destino

## 🧹 Limpeza de Dados

### Quando Usar
- Para remover arquivos antigos
- Para liberar espaço no servidor
- Antes de processar novos dados

### Como Limpar
1. Clique no botão **"Limpar Dados Processados"**
2. Confirme a ação
3. O sistema removerá todos os arquivos processados

**⚠️ Atenção**: Esta ação é irreversível!

## 🔍 Processamento em Lote

### Processar Pasta Media
Para processar múltiplos arquivos PDF de uma vez:

1. Adicione os arquivos PDF na pasta `media` do servidor
2. Use a funcionalidade de processamento em lote
3. O sistema processará todos os PDFs automaticamente

## ⚠️ Solução de Problemas

### Erro: "Nenhum arquivo enviado"
**Causa**: Nenhum arquivo foi selecionado
**Solução**: Selecione um arquivo antes de clicar em "Processar"

### Erro: "Tipo de arquivo não suportado"
**Causa**: Arquivo com extensão incorreta
**Solução**: 
- Para catraca: use arquivos .csv
- Para SEI: use arquivos .pdf

### Erro: "Erro no processamento"
**Causa**: Problema na estrutura do arquivo
**Solução**:
- Verifique se o arquivo CSV tem o formato correto
- Verifique se o PDF não está corrompido
- Tente com outro arquivo

### Erro: "Tesseract não encontrado"
**Causa**: OCR não instalado (apenas para PDFs)
**Solução**: Entre em contato com o administrador do sistema

### Processamento Lento
**Causa**: Arquivos grandes ou servidor sobrecarregado
**Solução**:
- Aguarde o processamento
- Evite processar múltiplos arquivos simultaneamente
- Use arquivos menores quando possível

## 📋 Dicas de Uso

### Para Melhor Performance
1. **Arquivos CSV**: Use arquivos com até 10.000 linhas
2. **Arquivos PDF**: Processe um por vez
3. **Limpeza**: Faça limpeza regular dos dados antigos

### Para Dados Precisos
1. **Verificação**: Sempre verifique os dados após o processamento
2. **Backup**: Mantenha cópias dos arquivos originais
3. **Validação**: Confirme se os CPFs estão corretos

### Para Organização
1. **Nomenclatura**: Use nomes descritivos para os arquivos
2. **Data**: Inclua a data no nome do arquivo
3. **Versões**: Mantenha versões dos relatórios importantes

## 🔧 Configurações Técnicas

### Requisitos do Sistema
- **Navegador**: Chrome, Firefox, Safari, Edge (versões recentes)
- **JavaScript**: Habilitado
- **Cookies**: Habilitados
- **Upload**: Suporte a arquivos até 50MB

### Formatos Suportados
- **CSV**: UTF-8, separador ; ou ,
- **PDF**: PDF 1.4 ou superior
- **Saída**: CSV, Excel (XLSX)

### Limitações
- **Tamanho máximo**: 50MB por arquivo
- **Linhas CSV**: Até 100.000 linhas
- **Páginas PDF**: Até 50 páginas
- **Processamento simultâneo**: 1 arquivo por vez

## 📞 Suporte e Contato

### Em Caso de Problemas
1. **Verifique**: Se o problema está listado na seção "Solução de Problemas"
2. **Teste**: Com um arquivo diferente
3. **Contate**: O administrador do sistema

### Informações para Suporte
Ao reportar um problema, inclua:
- Tipo de arquivo (CSV ou PDF)
- Tamanho do arquivo
- Mensagem de erro exata
- Data e hora do erro
- Navegador utilizado

## 📝 Histórico de Versões

### Versão 1.0 (Dezembro 2024)
- Processamento de arquivos CSV de catraca eletrônica
- Processamento de arquivos PDF do sistema SEI
- Dashboard com estatísticas
- Download de arquivos processados
- Limpeza de dados
- Interface responsiva

---

**Desenvolvido por**: Equipe de Desenvolvimento TRF1  
**Versão**: 1.0  
**Última atualização**: Dezembro 2024  
**Compatível com**: Django 3.2.25+, Python 3.12+
