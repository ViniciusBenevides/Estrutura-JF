# Manual de Instalação - Sistema FolhaFácil

Este manual descreve como instalar e configurar o sistema FolhaFácil em um servidor Ubuntu Server.

## 📋 Pré-requisitos

- Ubuntu Server 20.04 LTS ou superior
- Acesso root ou usuário com privilégios sudo
- Mínimo 2GB RAM
- 10GB de espaço em disco
- Conexão com internet

## 🚀 Instalação

### 1. Atualizar o Sistema

```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Instalar Dependências do Sistema

```bash
# Instalar Python 3.8+ e ferramentas de desenvolvimento
sudo apt install -y python3 python3-pip python3-venv python3-dev

# Instalar Apache e mod_wsgi
sudo apt install -y apache2 libapache2-mod-wsgi-py3

# Instalar dependências para processamento de PDF e OCR
sudo apt install -y tesseract-ocr tesseract-ocr-por tesseract-ocr-eng
sudo apt install -y poppler-utils
sudo apt install -y libpq-dev

# Instalar ferramentas de desenvolvimento
sudo apt install -y build-essential libssl-dev libffi-dev

# Instalar Git (para clonar o repositório)
sudo apt install -y git
```

### 3. Configurar Apache

```bash
# Habilitar mod_wsgi
sudo a2enmod wsgi

# Reiniciar Apache
sudo systemctl restart apache2
```

### 4. Criar Estrutura de Diretórios

```bash
# Criar diretório para aplicações
sudo mkdir -p /var/www/html/sistemas
sudo mkdir -p /var/www/html/sistemas/static
sudo mkdir -p /var/www/html/sistemas/folhafacil/logs

# Definir permissões
sudo chown -R www-data:www-data /var/www/html/sistemas
sudo chmod -R 755 /var/www/html/sistemas
```

### 5. Clonar/Transferir o Projeto

```bash
# Opção 1: Se o código estiver em um repositório Git
cd /var/www/html/sistemas
sudo git clone <URL_DO_REPOSITORIO> folhafacil

# Opção 2: Se você tem o código localmente, copie para o servidor
# (Execute no seu computador local)
scp -r /caminho/para/trf_folha_3/* usuario@servidor:/var/www/html/sistemas/folhafacil/
```

### 6. Configurar Ambiente Virtual Python

```bash
cd /var/www/html/sistemas
sudo python3 -m venv folhafacil-env

# Ativar ambiente virtual
source folhafacil-env/bin/activate

# Instalar dependências Python
cd folhafacil
pip install --upgrade pip
pip install -r requirements.txt
```

### 7. Configurar Variáveis de Ambiente

```bash
# Criar arquivo .env
sudo nano /var/www/html/sistemas/folhafacil/.env
```

Adicione o seguinte conteúdo ao arquivo `.env`:

```env
# Configurações Django
DJANGO_SECRET_KEY=sua_chave_secreta_aqui
DJANGO_SETTINGS_MODULE=folhafacil.settings_production

# Configurações de E-mail (opcional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=seu_email@gmail.com
EMAIL_HOST_PASSWORD=sua_senha_de_app

# Configurações de Banco de Dados (se usar PostgreSQL)
# DATABASE_URL=postgresql://usuario:senha@localhost:5432/folhafacil
```

### 8. Configurar Banco de Dados

```bash
# Ativar ambiente virtual
source /var/www/html/sistemas/folhafacil-env/bin/activate

# Navegar para o diretório do projeto
cd /var/www/html/sistemas/folhafacil

# Executar migrações
python manage.py migrate

# Criar superusuário
python manage.py createsuperuser

# Coletar arquivos estáticos
python manage.py collectstatic --noinput
```

### 9. Configurar Apache

```bash
# Copiar arquivo de configuração do Apache
sudo cp /var/www/html/sistemas/folhafacil/folhafacil_apache.conf /etc/apache2/sites-available/folhafacil.conf

# Habilitar o site
sudo a2ensite folhafacil.conf

# Desabilitar site padrão (opcional)
sudo a2dissite 000-default.conf

# Testar configuração
sudo apache2ctl configtest

# Reiniciar Apache
sudo systemctl restart apache2
```

### 10. Configurar Permissões

```bash
# Definir proprietário correto
sudo chown -R www-data:www-data /var/www/html/sistemas/folhafacil
sudo chown -R www-data:www-data /var/www/html/sistemas/folhafacil-env

# Definir permissões
sudo chmod -R 755 /var/www/html/sistemas/folhafacil
sudo chmod -R 755 /var/www/html/sistemas/folhafacil-env

# Dar permissão de escrita para logs e media
sudo chmod -R 775 /var/www/html/sistemas/folhafacil/logs
sudo chmod -R 775 /var/www/html/sistemas/folhafacil/Horas/media
```

### 11. Configurar Firewall (Opcional)

```bash
# Permitir tráfego HTTP e HTTPS
sudo ufw allow 80
sudo ufw allow 443

# Habilitar firewall
sudo ufw enable
```

## 🔧 Configurações Adicionais

### Configurar SSL/HTTPS (Recomendado)

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-apache

# Obter certificado SSL
sudo certbot --apache -d seu-dominio.com

# Configurar renovação automática
sudo crontab -e
# Adicionar linha: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Configurar Backup Automático

```bash
# Criar script de backup
sudo nano /usr/local/bin/backup_folhafacil.sh
```

Conteúdo do script:

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/folhafacil"
mkdir -p $BACKUP_DIR

# Backup do banco de dados
cp /var/www/html/sistemas/folhafacil/Monitor/db.sqlite3 $BACKUP_DIR/db_$DATE.sqlite3

# Backup dos arquivos de mídia
tar -czf $BACKUP_DIR/media_$DATE.tar.gz -C /var/www/html/sistemas/folhafacil/Horas media/

# Manter apenas os últimos 7 backups
find $BACKUP_DIR -name "*.sqlite3" -mtime +7 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
```

```bash
# Tornar executável
sudo chmod +x /usr/local/bin/backup_folhafacil.sh

# Adicionar ao crontab para executar diariamente às 2h
sudo crontab -e
# Adicionar linha: 0 2 * * * /usr/local/bin/backup_folhafacil.sh
```

## 🧪 Testando a Instalação

### 1. Verificar Status dos Serviços

```bash
# Verificar status do Apache
sudo systemctl status apache2

# Verificar logs do Apache
sudo tail -f /var/log/apache2/error.log
```

### 2. Testar Acesso Web

Acesse no navegador:
- `http://seu-servidor/folhafacil/` (HTTP)
- `https://seu-servidor/folhafacil/` (HTTPS)

### 3. Verificar Logs da Aplicação

```bash
# Verificar logs do Django
sudo tail -f /var/www/html/sistemas/folhafacil/logs/django.log
```

## 🔍 Solução de Problemas

### Problema: Erro 500 Internal Server Error

```bash
# Verificar logs do Apache
sudo tail -f /var/log/apache2/error.log

# Verificar logs do Django
sudo tail -f /var/www/html/sistemas/folhafacil/logs/django.log

# Verificar permissões
sudo chown -R www-data:www-data /var/www/html/sistemas/folhafacil
```

### Problema: Erro de Módulo não Encontrado

```bash
# Verificar se o ambiente virtual está ativo
source /var/www/html/sistemas/folhafacil-env/bin/activate

# Reinstalar dependências
pip install -r requirements.txt
```

### Problema: Tesseract não Encontrado

```bash
# Verificar instalação do Tesseract
tesseract --version

# Reinstalar se necessário
sudo apt install --reinstall tesseract-ocr tesseract-ocr-por
```

## 📝 Comandos Úteis

### Gerenciamento da Aplicação

```bash
# Ativar ambiente virtual
source /var/www/html/sistemas/folhafacil-env/bin/activate

# Executar migrações
python manage.py migrate

# Criar superusuário
python manage.py createsuperuser

# Coletar arquivos estáticos
python manage.py collectstatic --noinput

# Verificar status do sistema
python manage.py check --deploy
```

### Gerenciamento do Servidor

```bash
# Reiniciar Apache
sudo systemctl restart apache2

# Verificar status do Apache
sudo systemctl status apache2

# Ver logs em tempo real
sudo tail -f /var/log/apache2/access.log
sudo tail -f /var/log/apache2/error.log
```

## 🔒 Segurança

### Recomendações de Segurança

1. **Alterar SECRET_KEY**: Sempre use uma chave secreta única em produção
2. **Configurar HTTPS**: Use SSL/TLS para todas as comunicações
3. **Firewall**: Configure regras de firewall adequadas
4. **Backup**: Mantenha backups regulares
5. **Atualizações**: Mantenha o sistema atualizado
6. **Logs**: Monitore logs regularmente

### Configurações de Segurança Adicionais

```bash
# Instalar fail2ban para proteção contra ataques
sudo apt install -y fail2ban

# Configurar fail2ban para Apache
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

## 📞 Suporte

Para suporte técnico ou dúvidas sobre a instalação:

1. Verifique os logs em `/var/www/html/sistemas/folhafacil/logs/`
2. Consulte a documentação do Django
3. Entre em contato com a equipe de desenvolvimento

---

**Versão do Manual**: 1.0  
**Data**: $(date)  
**Sistema**: FolhaFácil - Sistema de Processamento de Folha de Pagamento
