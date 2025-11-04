-- ============================================
-- CONFIGURAÇÃO DE RLS (Row Level Security)
-- Para permitir INSERT público na tabela leads_topo
-- ============================================

-- PASSO 1: Ativar RLS na tabela
ALTER TABLE public.leads_topo ENABLE ROW LEVEL SECURITY;

-- PASSO 2: Criar política para permitir INSERT público (anon)
-- Esta política permite que qualquer pessoa insira dados (formulário público)
CREATE POLICY "Permitir insert público na tabela leads_topo"
ON public.leads_topo
FOR INSERT
TO anon
WITH CHECK (true);

-- PASSO 3: Criar política para permitir SELECT apenas para usuários autenticados
-- Isso protege os dados para que apenas admins possam ver
CREATE POLICY "Permitir select apenas para authenticated"
ON public.leads_topo
FOR SELECT
TO authenticated
USING (true);

-- ============================================
-- VERIFICAR SE AS POLÍTICAS FORAM CRIADAS
-- ============================================

-- Execute este SQL para ver as políticas ativas
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE tablename = 'leads_topo';

-- ============================================
-- RESULTADO ESPERADO
-- ============================================
-- Você deve ver 2 políticas:
-- 1. "Permitir insert público na tabela leads_topo" - FOR INSERT - TO anon
-- 2. "Permitir select apenas para authenticated" - FOR SELECT - TO authenticated

-- ============================================
-- REMOVER POLÍTICAS (caso precise recriar)
-- ============================================

-- Se precisar deletar as políticas e recriá-las, use:
-- DROP POLICY IF EXISTS "Permitir insert público na tabela leads_topo" ON public.leads_topo;
-- DROP POLICY IF EXISTS "Permitir select apenas para authenticated" ON public.leads_topo;
