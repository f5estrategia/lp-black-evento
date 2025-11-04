# Configuração do Supabase para LP Black Friday

## 📋 Visão Geral

A landing page está configurada para enviar os dados do formulário para uma tabela `leads_topo` no Supabase. Este documento detalha toda a configuração necessária.

---

## 🗄️ Estrutura da Tabela `leads_topo`

A tabela deve ser criada no Supabase com a seguinte estrutura:

```sql
CREATE TABLE leads_topo (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  ip_address TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  device_type TEXT,
  user_agent TEXT,
  screen_resolution TEXT,
  language TEXT,
  page_url TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para melhor performance
CREATE INDEX idx_leads_topo_email ON leads_topo(email);
CREATE INDEX idx_leads_topo_created_at ON leads_topo(created_at DESC);
CREATE INDEX idx_leads_topo_utm_campaign ON leads_topo(utm_campaign);
```

---

## 🔑 Configuração das Variáveis de Ambiente

### 1. Obter as Credenciais do Supabase

1. Acesse seu projeto no [Supabase Dashboard](https://app.supabase.com)
2. Vá em **Settings** → **API**
3. Copie os seguintes valores:
   - **Project URL** (`VITE_SUPABASE_URL`)
   - **anon public** key (`VITE_SUPABASE_ANON_KEY`)

### 2. Criar o arquivo `.env`

Na raiz do projeto, crie um arquivo `.env` (sem usar o `.example`):

```bash
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica-aqui
```

> ⚠️ **IMPORTANTE**: O arquivo `.env` já está no `.gitignore` e não será commitado ao Git.

---

## 🔐 Configuração de Permissões (RLS)

Para permitir que o formulário insira dados na tabela, configure as políticas de segurança:

### Opção 1: Desabilitar RLS (Desenvolvimento/Teste)

```sql
ALTER TABLE leads_topo DISABLE ROW LEVEL SECURITY;
```

### Opção 2: Habilitar RLS com Política de INSERT (Produção Recomendada)

```sql
-- Habilitar RLS
ALTER TABLE leads_topo ENABLE ROW LEVEL SECURITY;

-- Permitir INSERT público (apenas inserção)
CREATE POLICY "Permitir INSERT público"
ON leads_topo
FOR INSERT
TO public
WITH CHECK (true);

-- Bloquear SELECT, UPDATE e DELETE públicos
CREATE POLICY "Bloquear SELECT público"
ON leads_topo
FOR SELECT
TO public
USING (false);

CREATE POLICY "Bloquear UPDATE público"
ON leads_topo
FOR UPDATE
TO public
USING (false);

CREATE POLICY "Bloquear DELETE público"
ON leads_topo
FOR DELETE
TO public
USING (false);
```

---

## 📊 Dados Capturados pelo Formulário

### Dados Obrigatórios (fornecidos pelo usuário)
- **nome**: Nome completo
- **email**: Email válido
- **whatsapp**: Número de WhatsApp (apenas números)

### Dados Automáticos (capturados pelo sistema)
- **ip_address**: Endereço IP do visitante
- **utm_source**: Origem da campanha
- **utm_medium**: Meio da campanha
- **utm_campaign**: Nome da campanha
- **utm_term**: Termo da campanha
- **utm_content**: Conteúdo da campanha
- **device_type**: Tipo de dispositivo (mobile/tablet/desktop)
- **user_agent**: Informações do navegador
- **screen_resolution**: Resolução da tela
- **language**: Idioma do navegador
- **page_url**: URL completa da página
- **referrer**: Origem do tráfego
- **created_at**: Data/hora do cadastro

---

## 🧪 Como Testar a Integração

### 1. Verificar Configuração

```bash
# Certifique-se de que o arquivo .env existe e está preenchido
cat .env
```

### 2. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

### 3. Testar o Formulário

1. Acesse a página no navegador
2. Role até a seção "Garanta Sua Vaga Gratuita"
3. Preencha o formulário com dados de teste:
   - Nome: Teste da Silva
   - Email: teste@exemplo.com
   - WhatsApp: (11) 99999-9999
4. Clique em "Garantir Minha Vaga Gratuita"
5. Aguarde a mensagem de sucesso

### 4. Verificar no Supabase

1. Acesse o Supabase Dashboard
2. Vá em **Table Editor** → `leads_topo`
3. Verifique se o registro foi inserido com sucesso
4. Confirme que todos os campos foram preenchidos corretamente

---

## 🐛 Troubleshooting

### Erro: "Missing Supabase environment variables"

**Causa**: Arquivo `.env` não existe ou variáveis não estão definidas

**Solução**:
1. Crie o arquivo `.env` na raiz do projeto
2. Adicione as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`
3. Reinicie o servidor de desenvolvimento

### Erro: "Failed to insert"

**Causa**: Problema com permissões RLS ou estrutura da tabela

**Solução**:
1. Verifique se a tabela `leads_topo` existe
2. Verifique as políticas RLS
3. Certifique-se de que todos os campos obrigatórios estão na tabela

### Erro: "Network error" ou "CORS"

**Causa**: URL do Supabase incorreta ou configuração CORS

**Solução**:
1. Verifique se o `VITE_SUPABASE_URL` está correto
2. Confirme que não há espaços extras nas variáveis
3. Verifique o console do navegador para mais detalhes

---

## 📝 Notas Importantes

1. **Validação de Dados**: O formulário usa Zod para validação antes do envio
2. **Feedback Visual**: Toast notifications informam o status do envio
3. **Proteção Anti-Spam**: Considere adicionar reCAPTCHA se necessário
4. **Monitoramento**: Configure alertas no Supabase para novos leads
5. **Backup**: Configure backups automáticos da tabela no Supabase

---

## 🔄 Próximos Passos Recomendados

1. ✅ Criar a tabela `leads_topo` no Supabase
2. ✅ Configurar as variáveis de ambiente
3. ✅ Testar o formulário localmente
4. ✅ Configurar RLS para produção
5. ✅ Configurar webhooks para notificações (opcional)
6. ✅ Integrar com CRM ou automação de email (opcional)

---

## 📧 Integrações Futuras (Opcional)

- **Email Marketing**: Enviar email de boas-vindas automaticamente
- **CRM**: Sincronizar leads com RD Station, HubSpot, etc.
- **Webhook**: Notificar equipe quando novo lead chegar
- **Analytics**: Rastrear conversões no Google Analytics

---

## 🚀 Deploy

Após configurar tudo localmente:

1. Adicione as variáveis de ambiente no seu serviço de hospedagem (Vercel, Netlify, etc.)
2. Configure as mesmas variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`
3. Faça o deploy da aplicação

**Exemplo Vercel/Netlify:**
```bash
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

---

✅ **Implementação Concluída!** O formulário está pronto para capturar leads.
