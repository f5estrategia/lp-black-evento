-- ============================================
-- CRIAR TABELA leads_topo DO ZERO
-- ============================================
-- Execute este SQL no Supabase SQL Editor
-- ============================================

-- Deletar tabela antiga se existir (CUIDADO: apaga os dados!)
-- DROP TABLE IF EXISTS public.leads_topo;

-- Criar tabela leads_topo
CREATE TABLE IF NOT EXISTS public.leads_topo (
  -- ID gerado automaticamente
  id BIGSERIAL PRIMARY KEY,

  -- Dados do lead
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,

  -- Timestamp
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================
-- ÍNDICES
-- ============================================

-- Índice para busca por email
CREATE INDEX IF NOT EXISTS idx_leads_topo_email
ON public.leads_topo(email);

-- Índice para ordenação por data
CREATE INDEX IF NOT EXISTS idx_leads_topo_created_at
ON public.leads_topo(created_at DESC);

-- ============================================
-- RLS (Row Level Security)
-- ============================================

-- Ativar RLS
ALTER TABLE public.leads_topo ENABLE ROW LEVEL SECURITY;

-- Política: Permitir INSERT público (formulário)
DROP POLICY IF EXISTS "Permitir insert público" ON public.leads_topo;
CREATE POLICY "Permitir insert público"
ON public.leads_topo
FOR INSERT
TO anon
WITH CHECK (true);

-- Política: Permitir SELECT apenas para autenticados
DROP POLICY IF EXISTS "Permitir select authenticated" ON public.leads_topo;
CREATE POLICY "Permitir select authenticated"
ON public.leads_topo
FOR SELECT
TO authenticated
USING (true);

-- ============================================
-- COMENTÁRIOS
-- ============================================

COMMENT ON TABLE public.leads_topo IS
'Leads capturados do formulário da LP Black Friday 2025';

COMMENT ON COLUMN public.leads_topo.id IS
'ID único gerado automaticamente (BIGSERIAL)';

COMMENT ON COLUMN public.leads_topo.nome IS
'Nome completo do lead';

COMMENT ON COLUMN public.leads_topo.email IS
'Email do lead';

COMMENT ON COLUMN public.leads_topo.whatsapp IS
'WhatsApp do lead (apenas números)';

COMMENT ON COLUMN public.leads_topo.created_at IS
'Data e hora de criação do registro';

-- ============================================
-- VERIFICAÇÃO
-- ============================================

-- Ver estrutura da tabela
SELECT
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_name = 'leads_topo'
ORDER BY ordinal_position;

-- ============================================
-- TESTE (opcional)
-- ============================================

-- Inserir um lead de teste
-- INSERT INTO public.leads_topo (nome, email, whatsapp)
-- VALUES ('Teste SQL', 'teste@sql.com', '11999999999');

-- Ver todos os leads
-- SELECT * FROM public.leads_topo ORDER BY created_at DESC;
