# Manual do Usuário - Sistema MetaCRH

## 📋 Visão Geral

O **Sistema MetaCRH** é uma ferramenta de gestão completa para controle de cursos e capacitação de servidores, desenvolvida para gerenciar metas anuais de capacitação e acompanhar a participação dos funcionários em atividades de desenvolvimento profissional.

### 🎯 Objetivos do Sistema

- **Gerenciar** cadastro de servidores e suas lotações
- **Controlar** cursos internos e externos
- **Registrar** participações em atividades de capacitação
- **Acompanhar** metas anuais de capacitação
- **Gerar** relatórios detalhados de desempenho
- **Monitorar** indicadores de desenvolvimento profissional

## 🚀 Como Acessar o Sistema

### URL de Acesso
```
http://seu-servidor/folhafacil/metacrh/
```

### Requisitos do Navegador
- Google Chrome, Firefox, Safari ou Edge (versões recentes)
- JavaScript habilitado
- Conexão com internet

## 📊 Interface Principal

### 1. Menu Lateral (Sidebar)
- **Dashboard**: Visão geral e estatísticas
- **Servidores**: Gestão de funcionários
- **Cursos**: Cadastro de atividades de capacitação
- **Participações**: Registro de presença em cursos
- **Metas Anuais**: Controle de objetivos
- **Relatórios**: Geração de relatórios

### 2. Área Principal
- **Cabeçalho**: Título da página e ações
- **Mensagens**: Alertas e notificações
- **Conteúdo**: Dados e formulários específicos

## 🏠 Dashboard - Visão Geral

### Cards de Estatísticas
- **Total Servidores**: Quantidade de funcionários cadastrados
- **Total Cursos**: Número de atividades de capacitação
- **Total Participações**: Registros de presença em cursos
- **Cursos do Mês**: Atividades do mês atual

### Estatísticas do Mês Atual
- **Custo Sim**: Participações com recursos do CRH
- **Custo Não**: Participações sem custo
- **Complementar**: Participações de outras subseções

### Participações Recentes
Tabela com as últimas 10 participações registradas:
- **Servidor**: Nome do funcionário
- **Curso**: Nome da atividade
- **Data**: Data de participação
- **Fonte Recurso**: Tipo de financiamento
- **Status Meta**: Se conta para a meta anual

### Ações Rápidas
Botões para acesso direto às principais funcionalidades:
- **Novo Servidor**: Cadastrar funcionário
- **Novo Curso**: Criar atividade de capacitação
- **Nova Participação**: Registrar presença
- **Gerar Relatório**: Criar relatórios

## 👥 Gestão de Servidores

### Lista de Servidores
- **Busca**: Por nome, matrícula ou lotação
- **Filtros**: Por situação (ativo/inativo) e lotação
- **Paginação**: 20 registros por página
- **Ações**: Editar, excluir e visualizar detalhes

### Cadastrar Novo Servidor
**Campos obrigatórios:**
- **Nome Completo**: Nome completo do funcionário
- **Matrícula**: Número de matrícula (único)
- **Lotação**: Seção/Subseção de lotação
- **Situação**: Ativo ou Inativo

### Importar Servidores
**Formato aceito**: Planilha Excel (.xlsx)
**Colunas esperadas:**
- Nome Completo
- Matrícula
- Lotação
- Situação

### Editar Servidor
- Acesse a lista de servidores
- Clique em "Editar" ao lado do registro
- Modifique os campos necessários
- Salve as alterações

### Excluir Servidor
- Acesse a lista de servidores
- Clique em "Excluir" ao lado do registro
- Confirme a exclusão
- ⚠️ **Atenção**: Esta ação remove todas as participações associadas

## 🎓 Gestão de Cursos

### Lista de Cursos
- **Busca**: Por nome do curso ou instituição
- **Filtros**: Por tipo (interno/externo) e período
- **Ordenação**: Por data de início (mais recentes primeiro)

### Cadastrar Novo Curso
**Campos obrigatórios:**
- **Nome do Curso**: Título da atividade
- **Instituição Promotora**: Organização responsável
- **Data de Início**: Data de início do curso
- **Data de Fim**: Data de término do curso
- **Carga Horária**: Total de horas (mínimo 1)
- **Tipo de Curso**: Interno ou Externo

### Tipos de Curso
- **Interno**: Realizado pela própria instituição
- **Externo**: Realizado por instituição externa

### Editar Curso
- Acesse a lista de cursos
- Clique em "Editar" ao lado do registro
- Modifique os campos necessários
- Salve as alterações

### Excluir Curso
- Acesse a lista de cursos
- Clique em "Excluir" ao lado do registro
- Confirme a exclusão
- ⚠️ **Atenção**: Esta ação remove todas as participações associadas

## 📅 Gestão de Participações

### Lista de Participações
- **Busca**: Por servidor ou curso
- **Filtros**: Por fonte de recurso, período e status
- **Ordenação**: Por data de participação (mais recentes primeiro)

### Registrar Nova Participação
**Campos obrigatórios:**
- **Servidor**: Funcionário participante
- **Curso**: Atividade de capacitação
- **Data de Participação**: Data da presença
- **Fonte de Recurso**: Tipo de financiamento

### Fontes de Recurso
- **CRH (Custo Sim)**: Recursos do Centro de Recursos Humanos
- **Sem Custo (Custo Não)**: Atividades gratuitas
- **Complementar (outra subseção)**: Recursos de outras áreas

### Status da Meta
- **Conta para Meta**: Participação considerada no cálculo da meta anual
- **Não conta**: Participação não considerada na meta

### Regras de Negócio
- **Custo Sim**: Apenas a primeira participação com "Custo Sim" por ano conta para a meta
- **Participações duplicadas**: Mesmo servidor no mesmo curso na mesma data não é permitido

### Editar Participação
- Acesse a lista de participações
- Clique em "Editar" ao lado do registro
- Modifique os campos necessários
- Salve as alterações

### Excluir Participação
- Acesse a lista de participações
- Clique em "Excluir" ao lado do registro
- Confirme a exclusão

## 📊 Metas Anuais

### Lista de Metas
- **Ano**: Ano de referência
- **Metas por tipo**: Custo Sim, Custo Não, Complementar
- **Meta Total**: Soma de todas as metas
- **Percentual de Atingimento**: Progresso em relação à meta

### Criar Nova Meta Anual
**Campos obrigatórios:**
- **Ano**: Ano de referência (único)
- **Meta Custo Sim**: Objetivo para participações com recursos CRH
- **Meta Custo Não**: Objetivo para participações sem custo
- **Meta Complementar**: Objetivo para participações complementares
- **Meta Total**: Soma automática das metas
- **Observações**: Notas adicionais

### Cálculo de Atingimento
O sistema calcula automaticamente:
- **Realizado**: Número de participações registradas
- **Percentual**: (Realizado / Meta) × 100
- **Status**: Verde (atingido), Amarelo (em andamento), Vermelho (atrasado)

### Editar Meta
- Acesse a lista de metas anuais
- Clique em "Editar" ao lado do registro
- Modifique os valores das metas
- Salve as alterações

### Excluir Meta
- Acesse a lista de metas anuais
- Clique em "Excluir" ao lado do registro
- Confirme a exclusão

## 📈 Relatórios

### Tipos de Relatório
- **Relatório Geral**: Visão consolidada de todas as informações
- **Relatório por Período**: Dados filtrados por período específico
- **Relatório por Servidor**: Participações de funcionário específico
- **Relatório por Curso**: Participantes de curso específico
- **Relatório de Metas**: Atingimento das metas anuais

### Gerar Relatório
1. Acesse a seção "Relatórios"
2. Selecione o tipo de relatório
3. Configure os filtros desejados
4. Clique em "Gerar Relatório"
5. Escolha o formato (PDF ou Excel)
6. Faça o download do arquivo

### Filtros Disponíveis
- **Período**: Data inicial e final
- **Servidor**: Funcionário específico
- **Curso**: Atividade específica
- **Fonte de Recurso**: Tipo de financiamento
- **Lotação**: Seção/Subseção específica
- **Status Meta**: Se conta ou não para meta

### Formatos de Saída
- **PDF**: Relatório formatado para impressão
- **Excel**: Planilha com dados para análise

## 🔍 Funcionalidades Avançadas

### Busca e Filtros
- **Busca por texto**: Encontre registros por palavras-chave
- **Filtros múltiplos**: Combine diferentes critérios
- **Ordenação**: Organize dados por diferentes campos
- **Paginação**: Navegue por grandes volumes de dados

### Importação em Lote
- **Servidores**: Importe lista de funcionários via planilha
- **Formato**: Excel (.xlsx) com colunas específicas
- **Validação**: Sistema verifica dados antes da importação
- **Resultado**: Relatório de sucessos e erros

### APIs
- **API Servidores**: Acesso programático aos dados de servidores
- **API Cursos**: Acesso programático aos dados de cursos
- **Formato**: JSON para integração com outros sistemas

## 📱 Responsividade

### Dispositivos Suportados
- **Desktop**: Interface completa com sidebar
- **Tablet**: Layout adaptado para telas médias
- **Mobile**: Menu colapsável para telas pequenas

### Navegação Mobile
- **Menu hambúrguer**: Acesse o menu lateral
- **Cards responsivos**: Estatísticas adaptadas
- **Tabelas scrolláveis**: Dados em formato mobile-friendly

## 🔒 Segurança e Permissões

### Controle de Acesso
- **Autenticação**: Login obrigatório
- **Sessões**: Expiração automática por inatividade
- **Logs**: Registro de ações dos usuários

### Proteção de Dados
- **Validação**: Verificação de dados antes do salvamento
- **Integridade**: Relacionamentos protegidos
- **Backup**: Dados salvos automaticamente

## 🔍 Solução de Problemas

### Erro: "Matrícula já existe"
**Causa**: Tentativa de cadastrar matrícula duplicada
**Solução**: Use a função de busca para verificar se o servidor já existe

### Erro: "Data de fim anterior à data de início"
**Causa**: Data de término do curso anterior ao início
**Solução**: Verifique e corrija as datas do curso

### Erro: "Participação duplicada"
**Causa**: Mesmo servidor no mesmo curso na mesma data
**Solução**: Verifique se a participação já foi registrada

### Erro: "Meta anual já existe para este ano"
**Causa**: Tentativa de criar meta duplicada
**Solução**: Edite a meta existente ou exclua antes de criar nova

### Erro: "Arquivo de importação inválido"
**Causas possíveis**:
- Formato de arquivo incorreto
- Colunas ausentes ou com nomes diferentes
- Dados malformados

**Soluções**:
1. Use o template de importação fornecido
2. Verifique se todas as colunas estão presentes
3. Confirme se os dados estão no formato correto

## 📋 Dicas de Uso

### ✅ Boas Práticas
1. **Cadastre servidores primeiro** antes de registrar participações
2. **Use nomes padronizados** para cursos similares
3. **Verifique datas** antes de registrar participações
4. **Monitore metas** regularmente
5. **Faça backup** dos relatórios importantes

### ⚡ Otimizações
- **Importe servidores** em lote para economizar tempo
- **Use filtros** para encontrar dados rapidamente
- **Gere relatórios** periodicamente para acompanhamento
- **Configure metas** no início do ano

### 🔄 Fluxo Recomendado
1. Cadastrar servidores (individual ou importação)
2. Cadastrar cursos do ano
3. Registrar participações conforme ocorrem
4. Configurar metas anuais
5. Acompanhar dashboard regularmente
6. Gerar relatórios mensais/trimestrais

## 📞 Suporte Técnico

### Informações para Suporte
Quando precisar de ajuda, tenha em mãos:
- **Versão do navegador**
- **Mensagem de erro** (se houver)
- **Passos para reproduzir** o problema
- **Data e hora** do problema

### Contatos
- **Equipe de TI**: [email/telefone]
- **Documentação**: Este manual
- **Logs do sistema**: `/var/www/html/sistemas/folhafacil/logs/`

## 📝 Glossário

### Termos Técnicos
- **CRH**: Centro de Recursos Humanos
- **Custo Sim**: Recursos financeiros do CRH
- **Custo Não**: Atividades sem custo financeiro
- **Complementar**: Recursos de outras subseções
- **Meta Anual**: Objetivo de participações por ano
- **Dashboard**: Painel de controle com estatísticas

### Status do Sistema
- **Ativo**: Servidor em exercício
- **Inativo**: Servidor afastado ou aposentado
- **Conta para Meta**: Participação considerada no cálculo
- **Não conta**: Participação não considerada na meta
- **Atingido**: Meta cumprida (100% ou mais)
- **Em andamento**: Meta parcialmente cumprida
- **Atrasado**: Meta abaixo do esperado

---

**Versão do Manual**: 1.0  
**Data**: Dezembro 2024  
**Sistema**: FolhaFácil - Módulo MetaCRH  
**Desenvolvido por**: Equipe de TI - TRF
