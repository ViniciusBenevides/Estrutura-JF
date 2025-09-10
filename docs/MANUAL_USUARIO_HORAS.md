# Manual do Usuário - Sistema de Processamento de Horas Extras

## 📋 Visão Geral

O **Sistema de Processamento de Horas Extras** é uma ferramenta desenvolvida para automatizar o processamento de dados de catracas eletrônicas, facilitando o controle e cálculo de horas trabalhadas pelos funcionários. O sistema processa arquivos CSV exportados das catracas e gera relatórios detalhados com totais de horas por funcionário.

### 🎯 Objetivos do Sistema

- **Automatizar** o processamento de dados de catracas eletrônicas
- **Calcular** automaticamente horas trabalhadas por funcionário
- **Gerar** relatórios em formatos CSV e Excel
- **Identificar** funcionários com horas extras
- **Facilitar** o controle de ponto eletrônico

## 🚀 Como Acessar o Sistema

### URL de Acesso
```
http://seu-servidor/folhafacil/horas/
```

### Requisitos do Navegador
- Google Chrome, Firefox, Safari ou Edge (versões recentes)
- JavaScript habilitado
- Conexão com internet

## 📊 Interface Principal

### 1. Cabeçalho
- **Título**: Sistema de Processamento de Horas Extras
- **Versão**: Django 3.2.25
- **Tipo**: Processamento de Catracas Eletrônicas

### 2. Seção de Upload
- **Área de arrastar e soltar** para arquivos CSV
- **Seletor de tipo de processamento** (Catraca Eletrônica)
- **Botão de processamento** e **limpeza de dados**

### 3. Dashboard
- **Estatísticas** em tempo real
- **Lista de arquivos processados**
- **Tabela de horas trabalhadas**

## 📁 Preparando os Arquivos

### Formato Aceito
- **Extensão**: `.csv`
- **Origem**: Exportação de catracas eletrônicas
- **Codificação**: UTF-8

### Estrutura Esperada do CSV
O arquivo CSV deve conter as seguintes colunas:
```
CPF;Doc. Prov.;Sentido;Cartao;Catraca;Horario do Evento
```

**Exemplo de dados válidos:**
```
12345678901;João Silva;Entrada;12345;Catraca 1;01/12/2024 08:00:00
12345678901;João Silva;Saída;12345;Catraca 1;01/12/2024 17:00:00
```

### 📋 Requisitos dos Dados
- **CPF**: Deve ser válido (11 dígitos)
- **Horário**: Formato DD/MM/AAAA HH:MM:SS
- **Mínimo de registros**: 2 por funcionário (entrada e saída)
- **Dados obrigatórios**: CPF e Horário do Evento

## 🔄 Processo de Upload e Processamento

### Passo 1: Selecionar Arquivo
1. Clique na **área de upload** (área tracejada)
2. Navegue até a pasta onde está o arquivo CSV
3. Selecione o arquivo e clique em **"Abrir"**
4. O nome do arquivo aparecerá na interface

### Passo 2: Configurar Processamento
1. Verifique se o tipo **"Catraca Eletrônica (CSV)"** está selecionado
2. Confirme que o arquivo selecionado é um CSV válido

### Passo 3: Processar Arquivo
1. Clique no botão **"Processar Arquivo"**
2. Aguarde o processamento (indicador de carregamento aparecerá)
3. Uma mensagem de sucesso será exibida

### ⏱️ Tempo de Processamento
- **Arquivos pequenos** (< 1MB): 5-10 segundos
- **Arquivos médios** (1-5MB): 10-30 segundos
- **Arquivos grandes** (> 5MB): 30-60 segundos

## 📊 Resultados do Processamento

### Arquivos Gerados
O sistema gera automaticamente dois tipos de arquivo:

#### 1. Arquivo CSV (`Total_Horas_[CPF].csv`)
- **Formato**: CSV com codificação UTF-8
- **Colunas**:
  - `CPF`: CPF formatado (XXX.XXX.XXX-XX)
  - `Data_Dia`: Data do registro (DD/MM/AAAA)
  - `Total_Horas_Trabalhadas`: Total em formato HH:MM:SS

#### 2. Arquivo Excel (`Total_Horas_[CPF].xlsx`)
- **Formato**: Planilha Excel (.xlsx)
- **Aba**: "Horas_Trabalhadas"
- **Mesmas colunas** do arquivo CSV

### Exemplo de Resultado
```csv
CPF,Data_Dia,Total_Horas_Trabalhadas
123.456.789-01,01/12/2024,09:00:00
123.456.789-01,02/12/2024,08:30:00
123.456.789-01,03/12/2024,08:45:00
```

## 📈 Dashboard e Estatísticas

### Estatísticas Gerais
- **Funcionários Processados**: Total de CPFs únicos
- **Arquivos Gerados**: Quantidade de relatórios criados

### Tabela de Horas Trabalhadas
Exibe para cada funcionário:
- **CPF**: Identificação do funcionário
- **Data**: Dia do registro
- **Total de Horas**: Horas trabalhadas no formato HH:MM:SS
- **Status**: 
  - 🟢 **Normal**: ≤ 8 horas
  - 🔴 **Horas Extras**: > 8 horas

### Interpretação dos Status
- **Normal**: Funcionário trabalhou 8 horas ou menos
- **Horas Extras**: Funcionário trabalhou mais de 8 horas

## 💾 Download de Arquivos

### Como Baixar
1. Na seção **"Arquivos Processados"**
2. Clique no botão **"Download"** ao lado do arquivo desejado
3. O arquivo será baixado automaticamente

### Local de Download
- **Navegador**: Pasta de downloads padrão
- **Nome**: Mantém o nome original do arquivo
- **Formato**: CSV ou Excel conforme gerado

## 🧹 Limpeza de Dados

### Quando Usar
- **Antes de processar novos dados**
- **Para liberar espaço no servidor**
- **Para evitar confusão entre diferentes processamentos**

### Como Limpar
1. Clique no botão **"Limpar Dados"**
2. Confirme a ação na caixa de diálogo
3. Todos os arquivos processados serão removidos

### ⚠️ Atenção
- **Ação irreversível**: Os dados não podem ser recuperados
- **Confirmação obrigatória**: Sistema pede confirmação antes de limpar

## 🔍 Solução de Problemas

### Erro: "Nenhum arquivo enviado"
**Causa**: Nenhum arquivo foi selecionado
**Solução**: Selecione um arquivo CSV antes de processar

### Erro: "Tipo de arquivo não suportado"
**Causa**: Arquivo não é CSV
**Solução**: Verifique se o arquivo tem extensão `.csv`

### Erro: "Arquivo CSV vazio ou sem dados válidos"
**Causas possíveis**:
- Arquivo está vazio
- Formato incorreto
- Dados corrompidos

**Soluções**:
1. Verifique se o arquivo contém dados
2. Confirme o formato das colunas
3. Tente re-exportar o arquivo da catraca

### Erro: "Nenhum registro com horário válido encontrado"
**Causa**: Formato de data/hora incorreto
**Solução**: Verifique se as datas estão no formato DD/MM/AAAA HH:MM:SS

### Erro: "Nenhum registro válido encontrado para processamento"
**Causas possíveis**:
- CPFs inválidos
- Falta de pares entrada/saída
- Dados inconsistentes

**Soluções**:
1. Verifique se todos os CPFs têm 11 dígitos
2. Confirme que cada funcionário tem entrada e saída
3. Verifique a consistência dos dados

## 📋 Dicas de Uso

### ✅ Boas Práticas
1. **Faça backup** dos arquivos originais antes de processar
2. **Verifique os dados** antes do upload
3. **Limpe dados antigos** antes de processar novos
4. **Baixe os resultados** logo após o processamento
5. **Verifique o status** dos funcionários no dashboard

### ⚡ Otimizações
- **Arquivos menores** processam mais rapidamente
- **Dados limpos** evitam erros de processamento
- **CPFs válidos** garantem resultados corretos

### 🔄 Fluxo Recomendado
1. Exportar dados da catraca
2. Verificar formato do arquivo CSV
3. Fazer upload no sistema
4. Processar arquivo
5. Verificar resultados no dashboard
6. Baixar relatórios gerados
7. Limpar dados (opcional)

## 📞 Suporte Técnico

### Informações para Suporte
Quando precisar de ajuda, tenha em mãos:
- **Versão do navegador**
- **Mensagem de erro** (se houver)
- **Tamanho do arquivo** processado
- **Data e hora** do problema

### Contatos
- **Equipe de TI**: [email/telefone]
- **Documentação**: Este manual
- **Logs do sistema**: `/var/www/html/sistemas/folhafacil/logs/`

## 🔒 Segurança e Privacidade

### Proteção de Dados
- **CPFs**: São mascarados nos relatórios (XXX.XXX.XXX-XX)
- **Arquivos temporários**: São removidos automaticamente
- **Sessões**: Expiram após inatividade

### Recomendações
- **Não compartilhe** arquivos com dados pessoais
- **Use conexão segura** (HTTPS) quando disponível
- **Faça logout** ao terminar de usar o sistema

## 📝 Glossário

### Termos Técnicos
- **CSV**: Comma-Separated Values (valores separados por vírgula)
- **CPF**: Cadastro de Pessoa Física
- **Dashboard**: Painel de controle com estatísticas
- **Upload**: Envio de arquivo para o servidor
- **Download**: Download de arquivo do servidor
- **Processamento**: Análise e cálculo dos dados

### Status do Sistema
- **Normal**: Horas trabalhadas dentro do padrão
- **Horas Extras**: Horas trabalhadas acima do padrão
- **Processando**: Sistema executando cálculos
- **Sucesso**: Operação concluída com êxito
- **Erro**: Problema durante a operação

---

**Versão do Manual**: 1.0  
**Data**: Dezembro 2024  
**Sistema**: FolhaFácil - Módulo de Processamento de Horas Extras  
**Desenvolvido por**: Equipe de TI - TRF
