-- ============================================
-- CRIAR/CORRIGIR TABELA leads_topo
-- ============================================
-- Execute este SQL no Supabase SQL Editor
-- ============================================

-- Primeiro, verificar se a tabela existe
DO $$ 
BEGIN
  -- Se a tabela não existir, criar ela
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'leads_topo') THEN
    CREATE TABLE public.leads_topo (
      id BIGSERIAL PRIMARY KEY,
      nome TEXT NOT NULL,
      email TEXT NOT NULL,
      telefone TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
    );
    RAISE NOTICE 'Tabela leads_topo criada com sucesso!';
  ELSE
    RAISE NOTICE 'Tabela leads_topo já existe. Verificando estrutura...';
  END IF;
END $$;

-- Adicionar coluna telefone se não existir
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'leads_topo' 
    AND column_name = 'telefone'
  ) THEN
    ALTER TABLE public.leads_topo 
    ADD COLUMN telefone TEXT;
    RAISE NOTICE 'Coluna telefone adicionada!';
  ELSE
    RAISE NOTICE 'Coluna telefone já existe!';
  END IF;
END $$;

-- Remover coluna whatsapp se existir (era o nome errado)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'leads_topo' 
    AND column_name = 'whatsapp'
  ) THEN
    -- Primeiro, copiar dados de whatsapp para telefone se necessário
    UPDATE public.leads_topo 
    SET telefone = whatsapp 
    WHERE telefone IS NULL AND whatsapp IS NOT NULL;
    
    -- Depois remover a coluna whatsapp
    ALTER TABLE public.leads_topo 
    DROP COLUMN whatsapp;
    
    RAISE NOTICE 'Coluna whatsapp migrada para telefone e removida!';
  END IF;
END $$;

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

-- Remover políticas antigas se existirem
DROP POLICY IF EXISTS "Permitir insert público" ON public.leads_topo;
DROP POLICY IF EXISTS "Permitir select authenticated" ON public.leads_topo;

-- Política: Permitir INSERT público (formulário)
CREATE POLICY "Permitir insert público"
ON public.leads_topo
FOR INSERT
TO anon
WITH CHECK (true);

-- Política: Permitir SELECT apenas para autenticados
CREATE POLICY "Permitir select authenticated"
ON public.leads_topo
FOR SELECT
TO authenticated
USING (true);

-- ============================================
-- VERIFICAÇÃO FINAL
-- ============================================

-- Mostrar estrutura final da tabela
SELECT 
  column_name AS "Coluna",
  data_type AS "Tipo",
  is_nullable AS "Pode ser NULL",
  column_default AS "Valor Padrão"
FROM information_schema.columns
WHERE table_name = 'leads_topo'
ORDER BY ordinal_position;

-- ============================================
-- TESTE
-- ============================================

-- Teste de inserção (descomente para testar)
-- INSERT INTO public.leads_topo (nome, email, telefone)
-- VALUES ('Teste Final', 'teste@final.com', '11999999999')
-- RETURNING *;
