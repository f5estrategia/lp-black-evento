# Configuração de Webhook - Supabase Database
## Tabela: leads_topo

Este guia mostra como configurar um webhook para ser disparado quando um novo lead for inserido na tabela `leads_topo`.

---

## 🎯 O que você vai conseguir

Quando alguém preencher o formulário da landing page, o Supabase vai automaticamente:
1. Salvar os dados na tabela `leads_topo`
2. Disparar um webhook para sua URL
3. Você pode integrar com Make.com, Zapier, n8n, ou qualquer sistema que receba webhooks

---

## 📋 Passo 1: Criar a Function no Supabase

Acesse o **Supabase Dashboard** → **Database** → **Functions** → **Create a new function**

Cole este SQL:

```sql
-- ============================================
-- FUNÇÃO PARA DISPARAR WEBHOOK
-- ============================================

CREATE OR REPLACE FUNCTION notify_new_lead()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'https://SEU-WEBHOOK-URL-AQUI.com/endpoint';
  payload JSON;
BEGIN
  -- Monta o payload com os dados do lead
  payload := json_build_object(
    'event', 'new_lead',
    'table', 'leads_topo',
    'timestamp', NOW(),
    'data', json_build_object(
      'id', NEW.id,
      'nome', NEW.nome,
      'email', NEW.email,
      'whatsapp', NEW.whatsapp,
      'created_at', NEW.created_at
    )
  );

  -- Dispara o webhook usando pg_net extension
  PERFORM net.http_post(
    url := webhook_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json'
    ),
    body := payload::jsonb
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- COMENTÁRIO
-- ============================================

COMMENT ON FUNCTION notify_new_lead() IS
'Dispara webhook quando novo lead é inserido na tabela leads_topo';
```

---

## 📋 Passo 2: Ativar a extensão pg_net (se ainda não estiver ativa)

No **SQL Editor**, execute:

```sql
-- Ativar extensão para fazer HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net SCHEMA extensions;
```

---

## 📋 Passo 3: Criar o Trigger

No **SQL Editor**, execute:

```sql
-- ============================================
-- TRIGGER PARA NOVOS LEADS
-- ============================================

CREATE TRIGGER trigger_new_lead_webhook
AFTER INSERT ON public.leads_topo
FOR EACH ROW
EXECUTE FUNCTION notify_new_lead();

-- ============================================
-- COMENTÁRIO
-- ============================================

COMMENT ON TRIGGER trigger_new_lead_webhook ON public.leads_topo IS
'Dispara webhook quando novo lead é inserido';
```

---

## 🔧 Passo 4: Configurar sua URL de Webhook

### Opção 1: Make.com (Integromat)
1. Acesse https://www.make.com/
2. Crie um novo Scenario
3. Adicione um módulo **Webhooks** → **Custom Webhook**
4. Copie a URL gerada
5. Substitua `https://SEU-WEBHOOK-URL-AQUI.com/endpoint` na função acima

### Opção 2: Zapier
1. Acesse https://zapier.com/
2. Crie um novo Zap
3. Trigger: **Webhooks by Zapier** → **Catch Hook**
4. Copie a URL gerada
5. Substitua na função acima

### Opção 3: n8n (Self-hosted)
1. Crie um novo Workflow
2. Adicione o node **Webhook**
3. Copie a URL gerada
4. Substitua na função acima

### Opção 4: Webhook.site (Para testes)
1. Acesse https://webhook.site
2. Copie a URL única gerada
3. Use para testar se o webhook está funcionando
4. Você verá as requisições chegando em tempo real

---

## 📋 Passo 5: Atualizar a URL do Webhook

Depois de ter sua URL de webhook, execute este SQL para atualizar:

```sql
-- Atualizar a função com sua URL real
CREATE OR REPLACE FUNCTION notify_new_lead()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'SUA_URL_AQUI';  -- <<<< COLOQUE SUA URL AQUI
  payload JSON;
BEGIN
  payload := json_build_object(
    'event', 'new_lead',
    'table', 'leads_topo',
    'timestamp', NOW(),
    'data', json_build_object(
      'id', NEW.id,
      'nome', NEW.nome,
      'email', NEW.email,
      'whatsapp', NEW.whatsapp,
      'created_at', NEW.created_at
    )
  );

  PERFORM net.http_post(
    url := webhook_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json'
    ),
    body := payload::jsonb
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## 🧪 Passo 6: Testar o Webhook

1. Vá para https://lp-black-friday-2025.web.app
2. Preencha o formulário com dados de teste
3. Envie o formulário
4. Verifique se o webhook foi disparado (Webhook.site, Make.com, etc)

---

## 📊 Formato do Payload

O webhook vai enviar este JSON:

```json
{
  "event": "new_lead",
  "table": "leads_topo",
  "timestamp": "2025-01-30T12:34:56.789Z",
  "data": {
    "id": "uuid-aqui",
    "nome": "João Silva",
    "email": "joao@exemplo.com",
    "whatsapp": "11987654321",
    "created_at": "2025-01-30T12:34:56.789Z"
  }
}
```

---

## 🔍 Verificar se está funcionando

Execute este SQL para ver os triggers ativos:

```sql
-- Ver todos os triggers da tabela leads_topo
SELECT
  trigger_name,
  event_manipulation,
  event_object_table,
  action_statement
FROM information_schema.triggers
WHERE event_object_table = 'leads_topo';
```

---

## 🛠️ Troubleshooting

### Webhook não está disparando?

1. **Verifique se a extensão pg_net está ativa:**
```sql
SELECT * FROM pg_extension WHERE extname = 'pg_net';
```

2. **Verifique se o trigger está ativo:**
```sql
SELECT * FROM information_schema.triggers
WHERE event_object_table = 'leads_topo';
```

3. **Teste manualmente inserindo um lead:**
```sql
INSERT INTO leads_topo (nome, email, whatsapp)
VALUES ('Teste Webhook', 'teste@exemplo.com', '11999999999');
```

4. **Veja os logs de erro (se houver):**
```sql
SELECT * FROM net._http_response
ORDER BY created_at DESC
LIMIT 10;
```

---

## 🎯 Integrações Populares

### Enviar email via Make.com
1. Webhook recebe os dados
2. Módulo Gmail/SendGrid envia email de boas-vindas
3. Módulo Google Sheets salva em planilha

### Notificação no Slack/Discord
1. Webhook recebe os dados
2. Módulo Slack/Discord envia mensagem
3. Time é notificado em tempo real

### CRM/Marketing Automation
1. Webhook recebe os dados
2. Cria/atualiza contato no CRM
3. Adiciona em sequência de emails

---

## 🔐 Segurança

**IMPORTANTE:** Nunca exponha credenciais sensíveis no código da função!

Para adicionar autenticação ao webhook, você pode:

```sql
-- Adicionar header de autenticação
PERFORM net.http_post(
  url := webhook_url,
  headers := jsonb_build_object(
    'Content-Type', 'application/json',
    'Authorization', 'Bearer SEU_TOKEN_AQUI',
    'X-Custom-Secret', 'sua-senha-secreta'
  ),
  body := payload::jsonb
);
```

---

## 📞 Precisa de Ajuda?

- [Documentação Supabase Database Functions](https://supabase.com/docs/guides/database/functions)
- [Documentação pg_net](https://supabase.com/docs/guides/database/extensions/pg_net)
- [Supabase Discord](https://discord.supabase.com)

---

**✅ Pronto! Seu webhook está configurado e funcionando.**

Cada vez que um novo lead preencher o formulário, você receberá uma notificação instantânea via webhook! 🚀
