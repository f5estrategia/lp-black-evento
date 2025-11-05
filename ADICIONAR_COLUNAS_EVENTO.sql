-- ============================================
-- ADICIONAR COLUNAS PARA EVENTO BLACK FRIDAY
-- ============================================
-- Execute este SQL no Supabase SQL Editor
-- Dashboard -> SQL Editor -> New Query
-- ============================================

-- Adicionar coluna 'clinica' (vai armazenar nome da empresa)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_name = 'leads_topo'
    AND column_name = 'clinica'
  ) THEN
    ALTER TABLE public.leads_topo
    ADD COLUMN clinica TEXT;
    RAISE NOTICE 'Coluna clinica adicionada com sucesso!';
  ELSE
    RAISE NOTICE 'Coluna clinica já existe!';
  END IF;
END $$;

-- Adicionar coluna 'source' (identificar origem do lead)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_name = 'leads_topo'
    AND column_name = 'source'
  ) THEN
    ALTER TABLE public.leads_topo
    ADD COLUMN source TEXT;
    RAISE NOTICE 'Coluna source adicionada com sucesso!';
  ELSE
    RAISE NOTICE 'Coluna source já existe!';
  END IF;
END $$;

-- ============================================
-- VERIFICAÇÃO
-- ============================================

-- Mostrar estrutura atualizada da tabela
SELECT
  column_name AS "Coluna",
  data_type AS "Tipo",
  is_nullable AS "Pode ser NULL",
  column_default AS "Valor Padrão"
FROM information_schema.columns
WHERE table_name = 'leads_topo'
ORDER BY ordinal_position;

-- ============================================
-- Pronto! Agora a tabela tem as colunas:
-- - id
-- - nome
-- - email
-- - telefone
-- - created_at
-- - clinica (NOVO)
-- - source (NOVO)
-- ============================================
