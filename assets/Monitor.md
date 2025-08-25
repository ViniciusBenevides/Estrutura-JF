# Manual do Usuário - Sistema de Monitoramento TCU

## 📋 Visão Geral

O **Sistema de Monitoramento TCU** é uma aplicação web desenvolvida em Django que permite monitorar e acompanhar o status de aposentadoria de funcionários através de consultas automáticas ao Tribunal de Contas da União (TCU). O sistema oferece funcionalidades de cadastro, monitoramento contínuo e geração de relatórios.

## 🎯 Funcionalidades Principais

### ✅ Cadastro e Gestão de Pessoas
- Cadastro de funcionários com dados pessoais
- Edição e exclusão de registros
- Ativação/desativação de monitoramento
- Visualização de histórico de consultas

### ✅ Monitoramento Automático
- Consultas automáticas ao TCU
- Verificação de alterações de status
- Notificações por e-mail
- Dashboard com estatísticas em tempo real

### ✅ Relatórios e Análises
- Relatórios detalhados por período
- Exportação em formato CSV
- Histórico de consultas por pessoa
- Estatísticas de alterações de status

### ✅ Sistema de Notificações
- Alertas automáticos por e-mail
- Notificações de alterações de status
- Logs de atividades do sistema

## 🚀 Como Acessar o Sistema

### 1. Acesso via Navegador
```
http://seu_servidor/folhafacil/monitor/
```

### 2. Interface Principal
A interface principal do sistema apresenta:
- **Dashboard**: Estatísticas gerais e ações rápidas
- **Menu de Navegação**: Acesso às diferentes funcionalidades
- **Alertas**: Notificações de alterações detectadas
- **Botões de Ação**: Verificação manual e outras operações

## 👥 Cadastro de Pessoas

### Como Cadastrar uma Nova Pessoa

#### Passo 1: Acessar o Cadastro
1. Na página inicial, clique em **"Nova Pessoa"**
2. Ou acesse diretamente: `http://seu_servidor/folhafacil/monitor/cadastrar/`

#### Passo 2: Preencher os Dados
Preencha os campos obrigatórios:

- **Nome Completo**: Nome completo da pessoa
- **CPF**: CPF da pessoa (formato: 000.000.000-00)
- **Matrícula**: Número de matrícula da pessoa
- **Ativo**: Marque esta opção para incluir no monitoramento

#### Passo 3: Salvar Cadastro
1. Clique em **"Cadastrar"**
2. O sistema validará os dados
3. Se houver sucesso, uma mensagem de confirmação será exibida

### Validações do Sistema
- **CPF Único**: Não é possível cadastrar CPFs duplicados
- **Campos Obrigatórios**: Nome, CPF e matrícula são obrigatórios
- **Formato CPF**: O sistema aceita CPF com ou sem pontuação

## 📊 Dashboard e Monitoramento

### Dashboard Principal
O dashboard exibe as seguintes informações:

#### Estatísticas Gerais
- **Total de Pessoas**: Número total de pessoas cadastradas
- **Pessoas Ativas**: Pessoas sendo monitoradas atualmente
- **Pessoas Inativas**: Pessoas não monitoradas

#### Ações Rápidas
- **Nova Pessoa**: Cadastrar nova pessoa
- **Listar Pessoas**: Ver todas as pessoas cadastradas
- **Relatório**: Gerar relatórios

#### Verificação Manual
- **Botão "Verificar Agora"**: Executa consulta manual ao TCU
- **Última Verificação**: Data e hora da última consulta realizada

### Monitoramento Automático
O sistema realiza consultas automáticas ao TCU para verificar alterações de status:

#### Como Funciona
1. **Consultas Periódicas**: O sistema consulta o TCU em intervalos regulares
2. **Detecção de Alterações**: Compara o status atual com o anterior
3. **Notificações**: Envia e-mails quando detecta alterações
4. **Histórico**: Mantém registro de todas as consultas

#### Alertas de Alterações
Quando uma alteração é detectada, o sistema exibe:
- **Nome da pessoa**
- **Status anterior**
- **Novo status**
- **Data da alteração**

## 👥 Gestão de Pessoas

### Listar Pessoas
Para visualizar todas as pessoas cadastradas:

1. Clique em **"Listar Pessoas"** no dashboard
2. Ou acesse: `http://seu_servidor/folhafacil/monitor/pessoas/`

A lista mostra:
- **Nome** da pessoa
- **CPF** (mascarado)
- **Matrícula**
- **Status** (Ativo/Inativo)
- **Última Atualização**
- **Ações** disponíveis

### Visualizar Detalhes
Para ver detalhes de uma pessoa específica:

1. Na lista de pessoas, clique no **nome** da pessoa
2. Ou acesse: `http://seu_servidor/folhafacil/monitor/pessoas/{id}/`

A página de detalhes mostra:
- **Dados pessoais** completos
- **Status atual** no TCU
- **Histórico de consultas**
- **URL de consulta** no TCU
- **Opções de edição**

### Editar Pessoa
Para editar dados de uma pessoa:

1. Na página de detalhes, clique em **"Editar"**
2. Modifique os campos desejados
3. Clique em **"Salvar"**

**Campos editáveis**:
- Nome
- CPF
- Matrícula
- Status (Ativo/Inativo)

### Excluir Pessoa
Para remover uma pessoa do sistema:

1. Na lista de pessoas, clique em **"Excluir"**
2. Confirme a exclusão
3. A pessoa será removida permanentemente

**⚠️ Atenção**: Esta ação é irreversível e remove todo o histórico!

## 📈 Relatórios

### Gerar Relatórios
Para acessar os relatórios:

1. Clique em **"Relatório"** no dashboard
2. Ou acesse: `http://seu_servidor/folhafacil/monitor/relatorio/`

### Tipos de Relatório
O sistema oferece relatórios com:

#### Informações Incluídas
- **Nome** da pessoa
- **CPF** completo
- **Matrícula**
- **Status** no sistema (Ativo/Inativo)
- **Situação** no TCU
- **Última Atualização**

#### Filtros Disponíveis
- **Período**: Filtrar por data de cadastro
- **Status**: Filtrar por pessoas ativas/inativas
- **Formato**: Visualizar na tela ou exportar CSV

### Exportar Relatório
Para exportar um relatório em CSV:

1. Na página de relatórios, defina os filtros desejados
2. Clique em **"Exportar CSV"**
3. O arquivo será baixado automaticamente

**Nome do arquivo**: `relatorio_tcu_YYYYMMDD_HHMMSS.csv`

## 🔔 Sistema de Notificações

### Notificações por E-mail
O sistema envia notificações automáticas quando detecta alterações:

#### Quando são Enviadas
- **Alteração de Status**: Quando o status no TCU muda
- **Erro de Consulta**: Quando não consegue consultar o TCU
- **Problemas Técnicos**: Quando há falhas no sistema

#### Conteúdo do E-mail
- **Assunto**: "Alteração no Status do TCU - [Nome da Pessoa]"
- **Mensagem**: Detalhes da alteração
- **Link**: Acesso direto aos detalhes da pessoa
- **Data/Hora**: Momento da alteração

### Configuração de E-mails
As notificações são enviadas para os administradores configurados no sistema.

## ⚠️ Solução de Problemas

### Erro: "CPF já cadastrado"
**Causa**: Tentativa de cadastrar CPF duplicado
**Solução**: 
- Verifique se a pessoa já está cadastrada
- Use a busca na lista de pessoas
- Edite o registro existente se necessário

### Erro: "Erro na consulta ao TCU"
**Causa**: Problema de conexão ou serviço indisponível
**Solução**:
- Aguarde alguns minutos e tente novamente
- Verifique se o site do TCU está acessível
- Entre em contato com o administrador

### Erro: "Pessoa não encontrada"
**Causa**: CPF não encontrado no TCU
**Solução**:
- Verifique se o CPF está correto
- Confirme se a pessoa tem processo no TCU
- Consulte manualmente no site do TCU

### Problemas de Performance
**Causa**: Muitas consultas simultâneas
**Solução**:
- Evite fazer muitas verificações manuais
- Use o monitoramento automático
- Aguarde entre as consultas

## 📋 Dicas de Uso

### Para Melhor Organização
1. **Nomes Padronizados**: Use nomes completos e padronizados
2. **CPFs Válidos**: Sempre verifique se o CPF está correto
3. **Matrículas Únicas**: Use matrículas que identifiquem a pessoa
4. **Status Ativo**: Mantenha apenas pessoas relevantes como ativas

### Para Monitoramento Eficiente
1. **Verificações Regulares**: Use o botão "Verificar Agora" periodicamente
2. **Acompanhe Alertas**: Monitore as notificações de alterações
3. **Histórico**: Consulte o histórico para acompanhar mudanças
4. **Relatórios**: Gere relatórios mensais para análise

### Para Manutenção do Sistema
1. **Limpeza Regular**: Remova pessoas que não precisam ser monitoradas
2. **Backup**: Mantenha cópias dos relatórios importantes
3. **Validação**: Confirme periodicamente se os dados estão corretos
4. **Atualizações**: Mantenha o sistema atualizado

## 🔧 Configurações Técnicas

### Requisitos do Sistema
- **Navegador**: Chrome, Firefox, Safari, Edge (versões recentes)
- **JavaScript**: Habilitado
- **Cookies**: Habilitados
- **Conexão**: Internet para consultas ao TCU

### Limitações
- **Consultas Simultâneas**: Máximo de 10 consultas por minuto
- **Tamanho de Dados**: Até 10.000 pessoas cadastradas
- **Histórico**: Mantido por 2 anos
- **E-mails**: Máximo de 100 notificações por dia

### Segurança
- **Dados Sensíveis**: CPFs são mascarados na interface
- **Acesso**: Restrito a usuários autorizados
- **Logs**: Todas as ações são registradas
- **Backup**: Dados são protegidos contra perda

## 📞 Suporte e Contato

### Em Caso de Problemas
1. **Verifique**: Se o problema está listado na seção "Solução de Problemas"
2. **Teste**: Com uma pessoa diferente
3. **Contate**: O administrador do sistema

### Informações para Suporte
Ao reportar um problema, inclua:
- **Nome da pessoa** (se aplicável)
- **CPF** (se aplicável)
- **Mensagem de erro** exata
- **Data e hora** do erro
- **Navegador** utilizado
- **Ação** que estava sendo executada

## 📝 Histórico de Versões

### Versão 1.0 (Dezembro 2024)
- Cadastro e gestão de pessoas
- Monitoramento automático do TCU
- Sistema de notificações por e-mail
- Relatórios e exportação CSV
- Dashboard com estatísticas
- Interface responsiva
- Histórico de consultas
- Filtros e busca

---

**Desenvolvido por**: Equipe de Desenvolvimento TRF1  
**Versão**: 1.0  
**Última atualização**: Dezembro 2024  
**Compatível com**: Django 3.2.25+, Python 3.12+
