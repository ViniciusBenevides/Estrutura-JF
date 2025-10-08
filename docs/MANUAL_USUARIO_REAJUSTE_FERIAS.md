# Manual do Usuário - Sistema Reajuste de Férias

## 📋 Visão Geral

O **Sistema Reajuste de Férias** é uma ferramenta especializada para consulta e análise de dados relacionados ao reajuste salarial aplicado às férias dos servidores. O sistema permite filtrar e visualizar informações sobre férias que se enquadram nos períodos de reajuste salarial, calculando automaticamente os valores de diferença de reajuste aplicáveis.

### 🎯 Objetivos do Sistema

- **Consultar** dados de férias com reajuste salarial aplicável
- **Filtrar** informações por servidor, período e exercício
- **Calcular** automaticamente valores de reajuste
- **Visualizar** relatórios detalhados de férias
- **Identificar** servidores com direito a reajuste
- **Facilitar** análise de dados de férias

## 🚀 Como Acessar o Sistema

### URL de Acesso
```
http://seu-servidor/folhafacil/reajusteferias/
```

### Requisitos do Navegador
- Google Chrome, Firefox, Safari ou Edge (versões recentes)
- JavaScript habilitado
- Conexão com internet

## 📊 Interface Principal

### 1. Cabeçalho
- **Título**: Reajuste de Férias
- **Navegação**: Portal de Sistemas
- **Cor**: Azul institucional (#005b8f)

### 2. Barra Lateral de Filtros
- **Filtros disponíveis**: Código do Servidor, Nome, Exercício, Data
- **Controles**: Switches para ativar/desativar filtros
- **Validação**: Campos com validação automática

### 3. Área Principal
- **Tabela de resultados**: Dados filtrados
- **Paginação**: Navegação entre páginas
- **Informações**: Contadores e estatísticas

## 🔍 Sistema de Filtros

### Filtro por Código do Servidor

**Como usar:**
1. Ative o switch "Código do Servidor"
2. Digite o código no campo (ex: GO11503)
3. Clique em "Aplicar Filtros"

**Características:**
- **Busca parcial**: Encontra códigos que contenham o texto digitado
- **Case-insensitive**: Não diferencia maiúsculas e minúsculas
- **Exemplo**: "GO115" encontra "GO11503", "GO11504", etc.

### Filtro por Nome do Servidor

**Como usar:**
1. Ative o switch "Nome do Servidor"
2. Digite parte do nome (ex: WALTER)
3. Clique em "Aplicar Filtros"

**Características:**
- **Busca parcial**: Encontra nomes que contenham o texto
- **Case-insensitive**: Não diferencia maiúsculas e minúsculas
- **Exemplo**: "WALTER" encontra "WALTER SILVA", "WALTER SANTOS", etc.

### Filtro por Ano de Exercício

**Como usar:**
1. Ative o switch "Ano de Exercício"
2. Digite o ano (ex: 2023)
3. Clique em "Aplicar Filtros"

**Características:**
- **Busca exata**: Encontra apenas o ano especificado
- **Formato**: Apenas números (ex: 2023, 2024)
- **Limite**: A partir de 2021

### Filtro por Data de Férias

**Como usar:**
1. Ative o switch "Data de Férias"
2. Preencha os campos "De" e "Até"
3. Use o formato DD/MM/AAAA
4. Clique em "Aplicar Filtros"

**Características:**
- **Formato obrigatório**: DD/MM/AAAA
- **Validação automática**: Sistema verifica se a data é válida
- **Máscara automática**: Campo aplica formatação automaticamente
- **Exemplo**: 01/01/2023, 31/12/2023

## 📋 Validação de Datas

### Regras de Validação

**Formato obrigatório:**
- DD/MM/AAAA (ex: 01/01/2023)
- Apenas números e barras
- Máscara aplicada automaticamente

**Validações automáticas:**
- **Dia**: 01 a 31 (conforme o mês)
- **Mês**: 01 a 12
- **Ano**: 1900 a 2100
- **Fevereiro**: Considera anos bissextos
- **Meses com 30 dias**: Abril, junho, setembro, novembro

### Indicadores Visuais

**Campo válido:**
- Borda azul normal
- Sem mensagem de erro

**Campo inválido:**
- Borda vermelha
- Mensagem "Data inválida. Use DD/MM/AAAA"
- Foco automático no campo

## 📊 Tabela de Resultados

### Colunas Disponíveis

#### 1. Código
- **Conteúdo**: Código do servidor
- **Formato**: Alfanumérico (ex: GO11503)
- **Ordenação**: Alfabética

#### 2. Nome do Servidor
- **Conteúdo**: Nome completo do servidor
- **Formato**: Texto
- **Ordenação**: Alfabética

#### 3. Exercício
- **Conteúdo**: Ano de exercício das férias
- **Formato**: Numérico (ex: 2023)
- **Ordenação**: Numérica

#### 4. Data Início
- **Conteúdo**: Data de início das férias
- **Formato**: DD/MM/AAAA
- **Ordenação**: Cronológica

#### 5. Data Fim
- **Conteúdo**: Data de fim das férias
- **Formato**: DD/MM/AAAA
- **Ordenação**: Cronológica

#### 6. Reajuste
- **Conteúdo**: Valor do reajuste aplicável
- **Formato**: Monetário (R$ X,XX)
- **Status**:
  - 🟢 **Valor positivo**: Reajuste aplicável
  - 🔴 **"não há reajuste"**: Sem direito a reajuste
  - ⚪ **"-"**: Sem informação

### Interpretação dos Valores

**Valor monetário (ex: R$ 150,00):**
- Servidor tem direito a reajuste
- Valor calculado automaticamente
- Baseado nos períodos de reajuste salarial

**"não há reajuste":**
- Servidor não tem direito a reajuste
- Férias fora dos períodos de reajuste
- Valor zero aplicável

**"-" (traço):**
- Informação não disponível
- Dados em processamento
- Registro sem cálculo

## 📄 Paginação

### Controles de Navegação

**Botões disponíveis:**
- **‹ Anterior**: Página anterior (se disponível)
- **Próximo ›**: Próxima página (se disponível)
- **Pág. X de Y**: Indicador de posição

### Informações de Paginação

**Registros por página**: 20
**Navegação**: Mantém filtros aplicados
**Contador**: "Total de registros: X"

### Como Navegar

1. **Primeira página**: Clique em "‹ Anterior" (se disponível)
2. **Próxima página**: Clique em "Próximo ›" (se disponível)
3. **Manter filtros**: Filtros são preservados na navegação

## 🔧 Funcionalidades Avançadas

### Switches de Filtros

**Como funcionam:**
- **Desligado** (padrão): Filtro não aplicado
- **Ligado**: Filtro ativo e aplicado
- **Campos desabilitados**: Quando switch desligado

**Vantagens:**
- **Flexibilidade**: Use apenas os filtros necessários
- **Performance**: Consultas mais rápidas
- **Clareza**: Interface mais limpa

### Validação em Tempo Real

**Recursos:**
- **Máscara automática**: Formatação de data enquanto digita
- **Validação instantânea**: Verifica formato em tempo real
- **Feedback visual**: Indica erros imediatamente
- **Foco automático**: Vai para o primeiro erro

### Limpeza de Filtros

**Botão "Limpar Tudo":**
- Remove todos os filtros aplicados
- Volta à visualização completa
- Reseta todos os campos
- Atualiza a tabela

## 📈 Períodos de Reajuste

### Reajuste de 2023
- **Período**: 01/02/2023 a 31/12/2023
- **Percentual**: 6%
- **Aplicação**: Férias que se sobrepõem ao período

### Reajuste de 2024
- **Período**: 01/02/2024 a 31/12/2024
- **Percentual**: 6%
- **Aplicação**: Férias que se sobrepõem ao período

### Reajuste de 2025
- **Período**: 01/02/2025 a 31/12/2025
- **Percentual**: 6,13%
- **Aplicação**: Férias que se sobrepõem ao período

### Cálculo Automático

**Fórmula aplicada:**
```
Reajuste = (Dias sobrepostos × Valor da rubrica ÷ 30) × Percentual
```

**Onde:**
- **Dias sobrepostos**: Dias de férias dentro do período de reajuste
- **Valor da rubrica**: Valor da rubrica 114005
- **Percentual**: 6% ou 6,13% conforme o ano

## 🔍 Solução de Problemas

### Erro: "Data inicial inválida"
**Causa**: Formato de data incorreto
**Soluções:**
1. Use o formato DD/MM/AAAA
2. Verifique se o dia existe no mês
3. Confirme se o ano está correto

### Erro: "Data final inválida"
**Causa**: Formato de data incorreto
**Soluções:**
1. Use o formato DD/MM/AAAA
2. Verifique se a data é posterior à inicial
3. Confirme se o ano está correto

### Problema: "Nenhum registro encontrado"
**Causas possíveis:**
- Filtros muito restritivos
- Dados não existem no período
- Filtros incorretos

**Soluções:**
1. Verifique os filtros aplicados
2. Amplie o período de busca
3. Remova filtros desnecessários
4. Use "Limpar Tudo" para resetar

### Problema: "Campos desabilitados"
**Causa**: Switches de filtros desligados
**Solução**: Ative os switches dos filtros desejados

### Problema: "Validação de data falhando"
**Causas possíveis:**
- Formato incorreto
- Data inexistente
- Ano inválido

**Soluções:**
1. Use apenas números e barras
2. Verifique se o dia existe no mês
3. Use anos entre 1900 e 2100
4. Confirme se fevereiro tem 28/29 dias

## 📋 Dicas de Uso

### ✅ Boas Práticas

1. **Use filtros específicos** para encontrar dados rapidamente
2. **Verifique datas** antes de aplicar filtros
3. **Combine filtros** para resultados mais precisos
4. **Use "Limpar Tudo"** para começar nova busca
5. **Navegue pelas páginas** para ver todos os resultados

### ⚡ Otimizações

- **Filtros específicos**: Use códigos ou nomes exatos
- **Períodos menores**: Filtre por datas para resultados mais rápidos
- **Exercício único**: Filtre por ano específico
- **Navegação eficiente**: Use paginação para grandes volumes

### 🔄 Fluxo Recomendado

#### Para Consulta Geral
1. Acesse o sistema
2. Verifique todos os registros (sem filtros)
3. Use paginação para navegar
4. Identifique padrões nos dados

#### Para Consulta Específica
1. Ative filtros necessários
2. Preencha campos de busca
3. Aplique filtros
4. Analise resultados
5. Navegue pelas páginas se necessário

#### Para Análise por Período
1. Ative filtro de data
2. Defina período desejado
3. Aplique filtros
4. Analise valores de reajuste
5. Exporte dados se necessário

## 📞 Suporte Técnico

### Informações para Suporte

Quando precisar de ajuda, tenha em mãos:
- **Versão do navegador**
- **Mensagem de erro** (se houver)
- **Filtros aplicados** no momento do problema
- **Data e hora** do problema
- **Passos para reproduzir** o erro

### Contatos
- **Equipe de TI**: [email/telefone]
- **Documentação**: Este manual
- **Logs do sistema**: `/var/www/html/sistemas/folhafacil/logs/`

## 🔒 Segurança e Privacidade

### Proteção de Dados
- **Códigos de servidor**: Mascarados conforme necessário
- **Logs**: Registro de consultas realizadas
- **Sessões**: Expiração automática por inatividade
- **Validação**: Dados validados antes do processamento

### Recomendações
- **Use conexão segura** (HTTPS) quando disponível
- **Faça logout** ao terminar de usar o sistema
- **Não compartilhe** dados sensíveis
- **Mantenha** dados atualizados

## 📝 Glossário

### Termos Técnicos
- **Reajuste Salarial**: Aumento percentual aplicado aos salários
- **Férias**: Período de descanso remunerado do servidor
- **Exercício**: Ano de referência das férias
- **Rubrica**: Código de identificação de valores salariais
- **Sobreposição**: Período em que férias coincidem com reajuste

### Status do Sistema
- **Reajuste aplicável**: Férias com direito a reajuste
- **Sem reajuste**: Férias fora dos períodos de reajuste
- **Valor calculado**: Reajuste calculado automaticamente
- **Sem informação**: Dados não disponíveis

### Tipos de Filtros
- **Código do Servidor**: Identificação única do servidor
- **Nome do Servidor**: Nome completo do funcionário
- **Exercício**: Ano de referência das férias
- **Data de Férias**: Período de início e fim das férias

### Períodos de Reajuste
- **2023**: 6% de reajuste
- **2024**: 6% de reajuste
- **2025**: 6,13% de reajuste
- **Sobreposição**: Dias de férias dentro do período de reajuste

---

**Versão do Manual**: 1.0  
**Data**: Dezembro 2024  
**Sistema**: FolhaFácil - Módulo Reajuste de Férias  
**Desenvolvido por**: Equipe de TI - TRF
