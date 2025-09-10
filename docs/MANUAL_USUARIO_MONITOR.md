# Manual do Usuário - Sistema Monitor TCU

## 📋 Visão Geral

O **Sistema Monitor TCU** é uma ferramenta de monitoramento automatizado para acompanhar o status de aposentadoria de servidores junto ao Tribunal de Contas da União (TCU). O sistema consulta periodicamente a base de dados do TCU e notifica automaticamente sobre alterações no status de aposentadoria dos funcionários cadastrados.

### 🎯 Objetivos do Sistema

- **Monitorar** status de aposentadoria no TCU automaticamente
- **Notificar** alterações de status por e-mail
- **Manter** histórico de consultas e alterações
- **Gerar** relatórios de acompanhamento
- **Facilitar** o controle de servidores ativos e inativos
- **Automatizar** verificações periódicas

## 🚀 Como Acessar o Sistema

### URL de Acesso
```
http://seu-servidor/folhafacil/monitor/
```

### Requisitos do Navegador
- Google Chrome, Firefox, Safari ou Edge (versões recentes)
- JavaScript habilitado
- Conexão com internet

## 📊 Interface Principal

### 1. Menu de Navegação
- **Início**: Dashboard principal
- **Pessoas**: Lista de servidores cadastrados
- **Cadastrar**: Adicionar nova pessoa
- **Relatório**: Gerar relatórios

### 2. Área Principal
- **Dashboard**: Estatísticas e ações rápidas
- **Mensagens**: Alertas e notificações
- **Conteúdo**: Dados e formulários específicos

## 🏠 Dashboard - Visão Geral

### Cards de Estatísticas
- **Total de Pessoas**: Quantidade total de servidores cadastrados
- **Pessoas Ativas**: Servidores sendo monitorados ativamente
- **Pessoas Inativas**: Servidores não monitorados

### Botão "Verificar Agora"
- **Função**: Executa verificação manual de todas as pessoas ativas
- **Processo**: Consulta o TCU para cada servidor ativo
- **Resultado**: Atualiza status e detecta alterações

### Ações Rápidas
Botões para acesso direto às principais funcionalidades:
- **Nova Pessoa**: Cadastrar servidor
- **Listar Pessoas**: Ver todos os cadastros
- **Relatório**: Gerar relatórios

### Alertas de Alterações
Quando há mudanças de status detectadas:
- **Card amarelo** com detalhes das alterações
- **Nome da pessoa** afetada
- **Status anterior** e **novo status**
- **Data e hora** da alteração

## 👥 Gestão de Pessoas

### Lista de Pessoas
- **Visualização**: Todos os servidores cadastrados
- **Ordenação**: Por nome (alfabética)
- **Ações**: Ver detalhes, editar, excluir

### Cadastrar Nova Pessoa
**Campos obrigatórios:**
- **Nome**: Nome completo do servidor
- **CPF**: Número do CPF (formato livre)
- **Matrícula**: Número de matrícula
- **Ativo**: Checkbox para ativar monitoramento

### Editar Pessoa
- Acesse a lista de pessoas
- Clique em "Editar" ao lado do registro
- Modifique os campos necessários
- Salve as alterações

### Excluir Pessoa
- Acesse a lista de pessoas
- Clique em "Excluir" ao lado do registro
- Confirme a exclusão
- ⚠️ **Atenção**: Esta ação remove todo o histórico

### Detalhes da Pessoa
Ao clicar em uma pessoa, você verá:
- **Informações básicas**: Nome, CPF, Matrícula
- **Status atual**: Situação no TCU
- **URL de consulta**: Link direto para o TCU
- **Histórico completo**: Todas as consultas realizadas

## 📊 Histórico de Consultas

### Informações do Histórico
Para cada consulta realizada:
- **Data e Hora**: Quando foi feita a consulta
- **Status**: Situação encontrada no TCU
- **Detalhes**: Informações adicionais do ato
- **URL**: Link para consulta no TCU

### Tipos de Status
- **Status não disponível**: Nenhuma informação encontrada
- **Em análise**: Processo em andamento
- **Aprovado**: Aposentadoria aprovada
- **Deferido**: Processo deferido
- **Indeferido**: Processo indeferido
- **Erro na consulta**: Problema técnico

## 📈 Relatórios

### Tipos de Relatório
- **Relatório Geral**: Todas as pessoas cadastradas
- **Relatório por Período**: Filtrado por data de cadastro
- **Exportação CSV**: Dados em formato de planilha

### Gerar Relatório
1. Acesse a seção "Relatório"
2. Configure filtros (opcional)
3. Clique em "Exportar CSV"
4. Faça o download do arquivo

### Filtros Disponíveis
- **Data de Início**: Data inicial do período
- **Data de Fim**: Data final do período
- **Status**: Filtrar por situação atual

### Conteúdo do Relatório CSV
- **Nome**: Nome completo do servidor
- **CPF**: Número do CPF
- **Matrícula**: Número de matrícula
- **Status**: Situação atual (Ativo/Inativo)
- **Situação**: Status no TCU
- **Última Atualização**: Data da última consulta

## 🔔 Sistema de Notificações

### Notificações por E-mail
O sistema envia automaticamente e-mails quando:
- **Alteração de status** é detectada
- **Nova consulta** é realizada
- **Erro** ocorre durante a consulta

### Conteúdo do E-mail
- **Assunto**: "Alteração no Status do TCU - [Nome]"
- **Detalhes**:
  - Nome do servidor
  - Status anterior
  - Novo status
  - Data da alteração
  - Link para detalhes no sistema

### Configuração de E-mails
- **Remetente**: Sistema de Monitoramento TCU
- **Destinatários**: Administradores configurados
- **Frequência**: Apenas quando há alterações

## ⚙️ Funcionalidades Automáticas

### Verificação Automática
- **Frequência**: Configurável via agendador
- **Escopo**: Apenas pessoas ativas
- **Processo**: Consulta TCU para cada servidor
- **Resultado**: Atualiza status e histórico

### Detecção de Alterações
- **Comparação**: Status anterior vs. atual
- **Notificação**: E-mail automático
- **Registro**: Histórico de alterações
- **Interface**: Alertas visuais no dashboard

### Tratamento de Erros
- **Timeout**: 30 segundos por consulta
- **Retry**: 3 tentativas automáticas
- **Log**: Registro de erros detalhado
- **Fallback**: Status "Erro na consulta"

## 🔍 Consulta ao TCU

### Processo de Consulta
1. **Limpeza do CPF**: Remove pontuação
2. **Consulta à API**: Acesso ao sistema TCU
3. **Análise de Resultados**: Busca por atos de aposentadoria
4. **Atualização**: Salva novo status
5. **Histórico**: Registra consulta

### Dados Consultados
- **Tipo de Ato**: Aposentadoria
- **Situação**: Status do processo
- **Data de Vigência**: Quando entra em vigor
- **Unidade Responsável**: Órgão responsável
- **Data de Encaminhamento**: Quando foi enviado ao TCU

### URL de Consulta
- **Formato**: Link direto para o TCU
- **Acesso**: Consulta manual no site oficial
- **Dados**: Mesma informação da API

## 📱 Responsividade

### Dispositivos Suportados
- **Desktop**: Interface completa
- **Tablet**: Layout adaptado
- **Mobile**: Menu responsivo

### Navegação Mobile
- **Cards responsivos**: Estatísticas adaptadas
- **Tabelas scrolláveis**: Dados em formato mobile
- **Botões touch-friendly**: Interface otimizada

## 🔒 Segurança e Privacidade

### Proteção de Dados
- **CPF**: Armazenado sem pontuação
- **Logs**: Registro de ações dos usuários
- **Sessões**: Expiração automática
- **Validação**: Verificação de dados

### Controle de Acesso
- **Autenticação**: Login obrigatório
- **Permissões**: Controle de acesso
- **Auditoria**: Log de atividades

## 🔍 Solução de Problemas

### Erro: "CPF já cadastrado"
**Causa**: Tentativa de cadastrar CPF duplicado
**Solução**: Use a busca para verificar se já existe

### Erro: "Erro na consulta"
**Causas possíveis**:
- Problema de conectividade
- Servidor TCU indisponível
- Timeout na consulta

**Soluções**:
1. Verifique a conexão com internet
2. Tente novamente em alguns minutos
3. Consulte manualmente no site do TCU

### Erro: "Status não disponível"
**Causa**: Nenhuma informação encontrada no TCU
**Solução**: Verifique se o CPF está correto

### Erro: "E-mail não enviado"
**Causas possíveis**:
- Configuração de e-mail incorreta
- Servidor de e-mail indisponível
- Firewall bloqueando

**Soluções**:
1. Verifique configurações de e-mail
2. Consulte logs do sistema
3. Entre em contato com TI

## 📋 Dicas de Uso

### ✅ Boas Práticas
1. **Cadastre apenas pessoas ativas** que precisam ser monitoradas
2. **Verifique CPFs** antes do cadastro
3. **Monitore alterações** regularmente
4. **Mantenha dados atualizados**
5. **Faça backup** dos relatórios importantes

### ⚡ Otimizações
- **Use verificação manual** para consultas urgentes
- **Monitore o dashboard** regularmente
- **Configure notificações** adequadamente
- **Gere relatórios** periodicamente

### 🔄 Fluxo Recomendado
1. Cadastrar pessoas que precisam ser monitoradas
2. Ativar monitoramento (checkbox "Ativo")
3. Executar verificação inicial
4. Configurar verificação automática
5. Monitorar dashboard diariamente
6. Acompanhar notificações por e-mail
7. Gerar relatórios mensais

## 📞 Suporte Técnico

### Informações para Suporte
Quando precisar de ajuda, tenha em mãos:
- **Versão do navegador**
- **Mensagem de erro** (se houver)
- **CPF da pessoa** (se aplicável)
- **Data e hora** do problema
- **Passos para reproduzir**

### Contatos
- **Equipe de TI**: [email/telefone]
- **Documentação**: Este manual
- **Logs do sistema**: `/var/www/html/sistemas/folhafacil/logs/`

## 📝 Glossário

### Termos Técnicos
- **TCU**: Tribunal de Contas da União
- **API**: Interface de programação para consulta
- **Status**: Situação do processo de aposentadoria
- **Ato**: Documento oficial do TCU
- **Vigência**: Data de início da aposentadoria
- **Dashboard**: Painel de controle com estatísticas

### Status do Sistema
- **Ativo**: Pessoa sendo monitorada
- **Inativo**: Pessoa não monitorada
- **Em análise**: Processo em andamento no TCU
- **Aprovado**: Aposentadoria aprovada
- **Deferido**: Processo deferido
- **Indeferido**: Processo indeferido
- **Erro na consulta**: Problema técnico

### Tipos de Ato
- **Aposentadoria**: Processo de aposentadoria
- **Pensão**: Processo de pensão
- **Revisão**: Revisão de processo anterior

---

**Versão do Manual**: 1.0  
**Data**: Dezembro 2024  
**Sistema**: FolhaFácil - Módulo Monitor TCU  
**Desenvolvido por**: Equipe de TI - TRF
