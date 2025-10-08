# Manual do Usuário - Sistema de Gestão de Estagiários

## 📋 Visão Geral

O **Sistema de Gestão de Estagiários** é uma ferramenta completa para gerenciar todo o ciclo de vida de estagiários, desde o processo seletivo até o encerramento do estágio. O sistema permite importar listas de selecionados, acompanhar a evolução dos estagiários e gerar relatórios detalhados.

### 🎯 Objetivos do Sistema

- **Gerenciar** cadastro completo de estagiários
- **Importar** listas de selecionados de processos seletivos
- **Acompanhar** status e evolução dos estagiários
- **Controlar** dados acadêmicos e administrativos
- **Gerar** relatórios e estatísticas
- **Exportar** dados para Excel
- **Monitorar** indicadores de desempenho

## 🚀 Como Acessar o Sistema

### URL de Acesso
```
http://seu-servidor/folhafacil/estagiarios/
```

### Requisitos do Navegador
- Google Chrome, Firefox, Safari ou Edge (versões recentes)
- JavaScript habilitado
- Conexão com internet

## 📊 Interface Principal

### 1. Menu de Navegação
- **Dashboard**: Visão geral e estatísticas
- **Lista de Estagiários**: Todos os cadastros
- **Importar Seleção**: Importar lista de selecionados
- **Exportar Excel**: Baixar dados em planilha

### 2. Área Principal
- **Cards de estatísticas**: Métricas principais
- **Gráficos**: Visualização de dados
- **Tabelas**: Listagens detalhadas
- **Ações rápidas**: Botões para principais funcionalidades

## 🏠 Dashboard - Visão Geral

### Cards de Estatísticas

#### 1. Total de Estagiários
- **Informação**: Quantidade total de estagiários cadastrados
- **Ícone**: Grupo de pessoas
- **Cor**: Azul

#### 2. Estagiários Ativos
- **Informação**: Estagiários atualmente em estágio
- **Ícone**: Usuário com check
- **Cor**: Verde

#### 3. Estagiários Selecionados
- **Informação**: Aprovados no processo seletivo
- **Ícone**: Estrela
- **Cor**: Amarelo

#### 4. Estagiários Convocados
- **Informação**: Convocados para iniciar estágio
- **Ícone**: Envelope
- **Cor**: Laranja

### Gráficos e Visualizações

#### Gráfico de Status
- **Tipo**: Gráfico de pizza
- **Dados**: Distribuição por status (selecionado, convocado, ativo, etc.)
- **Interativo**: Sim

#### Gráfico por Curso
- **Tipo**: Gráfico de barras
- **Dados**: Top 10 cursos mais comuns
- **Ordenação**: Por quantidade (decrescente)

#### Gráfico por Local de Concorrência
- **Tipo**: Gráfico de barras horizontais
- **Dados**: Distribuição por local de concorrência
- **Filtro**: Apenas locais com registros

### Últimas Importações
Tabela com as 5 importações mais recentes:
- **Data**: Data e hora da importação
- **Arquivo**: Nome do arquivo importado
- **Total**: Registros processados
- **Sucesso**: Registros importados com sucesso
- **Erros**: Registros com problemas
- **Taxa de Sucesso**: Percentual de sucesso

## 👥 Gestão de Estagiários

### Lista de Estagiários

#### Filtros Disponíveis

**Busca Textual:**
- **Campo**: Nome, CPF ou email
- **Tipo**: Busca parcial (case-insensitive)
- **Exemplo**: Digite "João" para encontrar todos os "João"

**Filtro por Status:**
- Todos (padrão)
- Selecionado
- Convocado
- Ativo
- Inativo
- Finalizado
- Desistente

**Filtro por Curso:**
- **Campo**: Nome do curso
- **Tipo**: Busca parcial
- **Exemplo**: "Administração" encontra "Administração de Empresas"

**Filtro por Concorre Para:**
- **Campo**: Local de concorrência
- **Tipo**: Busca parcial
- **Exemplo**: "JF" encontra "Juiz de Fora"

**Filtro por PNE:**
- Todos (padrão)
- Sim (Pessoa com Necessidades Especiais)
- Não

#### Ordenação

**Opções de ordenação:**
- Nome (A-Z)
- Nome (Z-A)
- Data início (mais antiga)
- Data início (mais recente)
- Status
- Status (inverso)
- Curso
- Curso (inverso)

#### Paginação
- **Registros por página**: 25
- **Navegação**: Anterior, Próxima, Ir para página específica

### Visualizar Detalhes do Estagiário

**Como acessar:**
1. Clique no nome do estagiário na lista
2. Ou acesse diretamente via URL com ID

**Informações exibidas:**

#### Dados Pessoais
- Nome completo
- CPF
- RG e emissor
- Data de nascimento e idade
- Sexo
- Endereço completo formatado

#### Dados de Contato
- Telefone: (DDD) Número
- Celular: (DDD) Número
- Email

#### Dados Acadêmicos
- Instituição de ensino (sigla e nome completo)
- Curso
- Período/Semestre atual
- Duração total do curso

#### Informações do Processo Seletivo
- Concorre para (local)
- PNE (Pessoa com Necessidades Especiais)
- NPI (Negro, Pardo ou Indígena)
- SV (Sistema de Vagas)

#### Dados do Estágio
- Status atual
- Data de convocação
- Data de início
- Data de término prevista
- Dias de estágio cumpridos

#### Dados Administrativos
- Supervisor responsável
- Unidade de lotação
- Valor da bolsa

#### Metadados
- Data de cadastro no sistema
- Última atualização
- Data de importação (se aplicável)

### Editar Estagiário

**Como editar:**
1. Acesse os detalhes do estagiário
2. Clique no botão "Editar" (ícone de lápis)
3. Modifique os campos desejados
4. Clique em "Salvar"

**Campos editáveis:**
- Todos os campos exceto CPF (não pode ser alterado)
- Status pode ser alterado manualmente

**Validações:**
- CPF é único e não pode ser modificado
- Datas devem estar em formato válido
- Email deve ser válido
- Campos numéricos têm limites (ex: período de 1 a 20)

## 📥 Importação de Listas de Seleção

### Preparando o Arquivo

#### Formatos Aceitos
- **Excel**: .xlsx, .xls
- **CSV**: .csv
- **Tamanho máximo**: 50 MB

#### Estrutura do Arquivo

**Colunas esperadas (ordem pode variar):**
- ID / ID Seleção
- Nome / Nome Completo
- CPF
- RG
- Emissor RG
- Data de Nascimento
- Sexo
- Endereço
- Número
- Complemento
- Bairro
- Cidade
- Estado
- CEP
- DDD Telefone
- Telefone
- DDD Celular
- Celular
- Email
- Instituição (sigla)
- Instituição (nome completo)
- Curso
- Período
- Duração Curso
- Concorre Para
- PNE (S/N ou Sim/Não)
- NPI (S/N ou Sim/Não)
- SV (S/N ou Sim/Não)

**Observações:**
- Colunas não encontradas serão ignoradas
- CPF é obrigatório e único
- Valores vazios serão tratados como nulos
- Datas devem estar no formato DD/MM/AAAA ou AAAA-MM-DD

### Processo de Importação

#### Passo 1: Acessar a Página de Importação
1. No menu principal, clique em "Importar Seleção"
2. Ou acesse `/estagiarios/importar/`

#### Passo 2: Selecionar Arquivo
1. Clique no botão "Escolher arquivo"
2. Navegue até o arquivo da lista de selecionados
3. Selecione o arquivo
4. O nome do arquivo aparecerá ao lado do botão

#### Passo 3: Configurar Opções

**Atualizar dados de CPFs já cadastrados:**
- ☐ **Desmarcado** (padrão): CPFs duplicados serão ignorados
- ☑ **Marcado**: CPFs existentes terão seus dados atualizados

**Quando usar:**
- **Desmarcado**: Para importar apenas novos estagiários
- **Marcado**: Para atualizar dados de estagiários já cadastrados

#### Passo 4: Processar Importação
1. Clique no botão "Importar"
2. Aguarde o processamento (barra de progresso)
3. Você será redirecionado para o relatório de importação

### Relatório de Importação

#### Resumo da Importação
- **Arquivo**: Nome do arquivo importado
- **Data**: Data e hora da importação
- **Tamanho**: Tamanho do arquivo em KB/MB
- **Total de Registros**: Quantidade de linhas processadas
- **Registros Importados**: Quantidade de sucessos
- **Registros Duplicados**: CPFs que já existiam
- **Registros com Erro**: Quantidade de falhas
- **Taxa de Sucesso**: Percentual de sucesso

#### Detalhes dos Erros
Se houver erros, serão exibidos:
- **Linha**: Número da linha no arquivo
- **CPF**: CPF do registro (se disponível)
- **Erro**: Descrição do problema
- **Solução**: Sugestão para correção

#### Tipos Comuns de Erro

**CPF inválido:**
- **Causa**: CPF com formato incorreto ou inválido
- **Solução**: Corrigir CPF no arquivo

**CPF duplicado:**
- **Causa**: CPF já existe e opção de atualizar está desmarcada
- **Solução**: Marcar opção de atualizar ou remover duplicatas

**Data inválida:**
- **Causa**: Data em formato não reconhecido
- **Solução**: Usar formato DD/MM/AAAA ou AAAA-MM-DD

**Valor numérico inválido:**
- **Causa**: Campo numérico com texto
- **Solução**: Corrigir valor no arquivo

**Email inválido:**
- **Causa**: Email em formato incorreto
- **Solução**: Corrigir formato do email

### Histórico de Importações

**Localização**: Na página de importação, abaixo do formulário

**Informações exibidas:**
- Data da importação
- Nome do arquivo
- Total de registros processados
- Taxa de sucesso
- Link para o relatório detalhado

**Ações disponíveis:**
- Ver relatório detalhado
- Filtrar por data
- Exportar histórico

## 📤 Exportação de Dados

### Exportar para Excel

**Como exportar:**
1. No menu principal, clique em "Exportar Excel"
2. Ou na lista de estagiários, clique em "Exportar"
3. O arquivo será baixado automaticamente

**Conteúdo do arquivo:**
- Todos os estagiários cadastrados
- Todas as informações disponíveis
- Uma aba chamada "Estagiários"
- Colunas com largura ajustada automaticamente

**Colunas incluídas:**
- Nome
- CPF
- Email
- Curso
- Status
- Concorre Para
- PNE, NPI, SV
- Telefone e Celular
- Cidade e Estado
- Instituição
- Período e Duração do Curso
- RG e Data de Nascimento
- Sexo
- Endereço completo
- Data de Convocação
- Data de Início
- Data de Término
- Supervisor
- Unidade
- Valor da Bolsa
- ID Seleção
- Data de Criação
- Data de Importação

**Nome do arquivo:**
- Formato: `estagiarios_AAAAMMDD_HHMMSS.xlsx`
- Exemplo: `estagiarios_20241203_143022.xlsx`

## 📊 Status dos Estagiários

### Ciclo de Vida do Estagiário

#### 1. Selecionado
- **Descrição**: Aprovado no processo seletivo
- **Próximo status**: Convocado
- **Ações**: Aguardando convocação

#### 2. Convocado
- **Descrição**: Convocado para iniciar o estágio
- **Próximo status**: Ativo
- **Ações**: Deve comparecer para início

#### 3. Ativo
- **Descrição**: Estágio em andamento
- **Próximo status**: Finalizado ou Inativo
- **Ações**: Monitoramento contínuo

#### 4. Inativo
- **Descrição**: Estágio temporariamente suspenso
- **Próximo status**: Ativo ou Finalizado
- **Motivos**: Afastamento, licença, etc.

#### 5. Finalizado
- **Descrição**: Estágio concluído com sucesso
- **Status final**: Sim
- **Ações**: Arquivo morto

#### 6. Desistente
- **Descrição**: Desistiu do estágio
- **Status final**: Sim
- **Ações**: Arquivo morto

### Alterar Status

#### Método 1: Via Edição
1. Acesse os detalhes do estagiário
2. Clique em "Editar"
3. Altere o campo "Status"
4. Salve as alterações

#### Método 2: Via AJAX (se habilitado)
1. Na lista de estagiários
2. Clique no badge de status
3. Selecione o novo status
4. Confirmação automática

## 📈 Estatísticas e Indicadores

### Indicadores Disponíveis

#### Por Status
- Quantidade de estagiários em cada status
- Percentual de cada status em relação ao total
- Gráfico de pizza

#### Por Curso
- Top 10 cursos mais comuns
- Quantidade de estagiários por curso
- Gráfico de barras

#### Por Local de Concorrência
- Distribuição geográfica
- Quantidade por local
- Gráfico de barras horizontais

#### Por Características Especiais
- Quantidade de PNE
- Quantidade de NPI
- Quantidade no Sistema de Vagas

### API de Estatísticas

**Endpoint**: `/estagiarios/api/estatisticas/`
**Método**: GET
**Formato**: JSON

**Uso:**
- Integração com outros sistemas
- Dashboards externos
- Relatórios automatizados

## 🔍 Funcionalidades Avançadas

### Busca Inteligente

**Recursos:**
- Busca em múltiplos campos simultaneamente
- Case-insensitive (maiúsculas e minúsculas)
- Busca parcial (encontra parte do texto)
- Resultados em tempo real

**Exemplos:**
- "Silva" encontra "João Silva", "Maria Silvia", etc.
- "123.456" encontra CPFs que contenham essa sequência
- "gmail" encontra todos os emails do Gmail

### Filtros Combinados

**Como usar:**
1. Selecione múltiplos filtros
2. Todos os filtros são aplicados simultaneamente (AND)
3. Resultados são refinados automaticamente

**Exemplo:**
- Status: Ativo
- Curso: Administração
- PNE: Sim
- **Resultado**: Apenas estagiários ativos, do curso de Administração e que sejam PNE

### Ordenação Personalizada

**Recursos:**
- Ordenação crescente ou decrescente
- Múltiplos campos de ordenação
- Persistência entre páginas

### Validações Automáticas

**Ao cadastrar/editar:**
- CPF: Formato e validade
- Email: Formato válido
- Datas: Formato e consistência
- Campos numéricos: Limites e formato
- Campos obrigatórios: Não podem estar vazios

## 📱 Responsividade

### Dispositivos Suportados
- **Desktop**: Interface completa
- **Tablet**: Layout adaptado, tabelas scrolláveis
- **Mobile**: Menu colapsável, cards empilhados

### Navegação Mobile
- **Menu hambúrguer**: Acesso ao menu principal
- **Cards responsivos**: Estatísticas adaptadas
- **Tabelas scrolláveis**: Scroll horizontal em tabelas
- **Botões touch-friendly**: Tamanho adequado para toque

## 🔒 Segurança e Validações

### Validações de Dados

#### CPF
- Formato válido (11 dígitos)
- Único no sistema
- Não pode ser alterado após cadastro

#### Email
- Formato válido (usuario@dominio.com)
- Opcional

#### Datas
- Formato DD/MM/AAAA ou AAAA-MM-DD
- Data de nascimento não pode ser futura
- Data de término deve ser posterior à data de início

#### Campos Numéricos
- Período: 1 a 20
- Duração do curso: 1 a 20 semestres
- Valor da bolsa: Número positivo com 2 casas decimais

### Proteção de Dados
- **CPF**: Armazenado sem pontuação, exibido formatado
- **Logs**: Registro de importações e alterações
- **Validação**: Dados validados antes de salvar
- **Integridade**: Relacionamentos protegidos

## 🔍 Solução de Problemas

### Erro: "CPF já cadastrado"
**Causa**: Tentativa de importar CPF que já existe
**Soluções:**
1. Marque a opção "Atualizar dados de CPFs já cadastrados"
2. Remova o CPF duplicado do arquivo de importação
3. Verifique se o CPF realmente está duplicado na planilha

### Erro: "Arquivo muito grande"
**Causa**: Arquivo excede 50MB
**Soluções:**
1. Divida o arquivo em partes menores
2. Remova colunas desnecessárias
3. Comprima o arquivo (se Excel)

### Erro: "Formato de arquivo inválido"
**Causa**: Arquivo não é .xlsx, .xls ou .csv
**Soluções:**
1. Salve o arquivo no formato correto
2. Verifique a extensão do arquivo
3. Use "Salvar Como" e escolha o formato adequado

### Erro: "Nenhuma coluna reconhecida"
**Causa**: Cabeçalhos das colunas não correspondem ao esperado
**Soluções:**
1. Verifique os nomes das colunas
2. Use os nomes exatos (sensível a maiúsculas/minúsculas)
3. Baixe um template de exemplo

### Problema: "Importação muito lenta"
**Causas possíveis:**
- Arquivo muito grande
- Muitos registros duplicados
- Servidor sobrecarregado

**Soluções:**
1. Importe em lotes menores
2. Faça importações fora do horário de pico
3. Remova duplicatas antes de importar

### Problema: "Dados não aparecem após importação"
**Causas possíveis:**
- Todos os registros tiveram erro
- Filtros aplicados na lista
- Cache do navegador

**Soluções:**
1. Verifique o relatório de importação
2. Limpe os filtros da lista
3. Recarregue a página (F5)

## 📋 Dicas de Uso

### ✅ Boas Práticas

1. **Padronize dados antes de importar**
   - Use formatos consistentes
   - Verifique CPFs
   - Padronize nomes de cursos

2. **Faça backup antes de importações grandes**
   - Exporte os dados atuais
   - Guarde em local seguro

3. **Use filtros para análises específicas**
   - Combine múltiplos filtros
   - Salve resultados em Excel

4. **Mantenha dados atualizados**
   - Atualize status regularmente
   - Corrija informações desatualizadas

5. **Monitore o dashboard**
   - Acompanhe estatísticas
   - Identifique tendências

### ⚡ Otimizações

- **Importe em lotes**: Arquivos menores processam mais rápido
- **Use ordenação**: Encontre registros rapidamente
- **Exporte regularmente**: Tenha backups atualizados
- **Limpe filtros**: Para ver todos os registros

### 🔄 Fluxo Recomendado

#### Para Nova Seleção
1. Receber lista de selecionados
2. Preparar arquivo (padronizar dados)
3. Importar no sistema
4. Verificar relatório de importação
5. Corrigir erros (se houver)
6. Validar dados importados
7. Atualizar status conforme necessário

#### Para Gestão Diária
1. Acessar dashboard
2. Verificar estatísticas
3. Atualizar status de estagiários
4. Responder a convocações
5. Registrar início de estágios
6. Gerar relatórios quando necessário

#### Para Encerramento de Estágio
1. Verificar data de término
2. Atualizar status para "Finalizado"
3. Registrar observações finais
4. Gerar relatório do período
5. Arquivar documentação

## 📞 Suporte Técnico

### Informações para Suporte

Quando precisar de ajuda, tenha em mãos:
- **Versão do navegador**
- **Mensagem de erro completa**
- **Arquivo de importação** (se aplicável)
- **Passos realizados** até o erro
- **Data e hora** do problema

### Contatos
- **Equipe de TI**: [email/telefone]
- **Documentação**: Este manual
- **Logs do sistema**: `/var/www/html/sistemas/folhafacil/logs/`

### Perguntas Frequentes

**P: Posso alterar o CPF de um estagiário?**
R: Não. O CPF é a chave única e não pode ser alterado após o cadastro.

**P: Como desfazer uma importação?**
R: Não há função de desfazer. Exclua manualmente os registros ou restaure um backup.

**P: Qual o limite de estagiários no sistema?**
R: Não há limite técnico. O sistema foi testado com mais de 10.000 registros.

**P: Posso importar o mesmo arquivo duas vezes?**
R: Sim, mas marque a opção "Atualizar dados" para evitar duplicatas.

**P: Como exportar apenas estagiários ativos?**
R: Aplique o filtro de status "Ativo" e depois exporte.

## 📝 Glossário

### Termos do Sistema

- **Estagiário**: Estudante em programa de estágio
- **Selecionado**: Aprovado no processo seletivo
- **Convocado**: Chamado para iniciar o estágio
- **Ativo**: Com estágio em andamento
- **PNE**: Pessoa com Necessidades Especiais
- **NPI**: Negro, Pardo ou Indígena
- **SV**: Sistema de Vagas
- **Concorre Para**: Local de concorrência na seleção
- **ID Seleção**: Identificador no sistema de seleção
- **Taxa de Sucesso**: Percentual de registros importados com sucesso
- **Dashboard**: Painel com visão geral e estatísticas

### Status do Sistema

- **Selecionado**: Aprovado, aguardando convocação
- **Convocado**: Convocado para início
- **Ativo**: Estágio em andamento
- **Inativo**: Temporariamente suspenso
- **Finalizado**: Estágio concluído
- **Desistente**: Desistiu do programa

### Tipos de Registro

- **Importação**: Carga de dados via arquivo
- **Manual**: Cadastro individual
- **Atualização**: Modificação de dados existentes

---

**Versão do Manual**: 1.0  
**Data**: Dezembro 2024  
**Sistema**: FolhaFácil - Módulo de Gestão de Estagiários  
**Desenvolvido por**: Equipe de TI - TRF

