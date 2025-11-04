-- ============================================
-- CORRIGIR RLS PARA leads_topo
-- ============================================
-- Execute este SQL no Supabase SQL Editor
-- ============================================

-- 1. Remover TODAS as políticas existentes
DROP POLICY IF EXISTS "Permitir insert público" ON public.leads_topo;
DROP POLICY IF EXISTS "Permitir select authenticated" ON public.leads_topo;
DROP POLICY IF EXISTS "Enable insert for anon users" ON public.leads_topo;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON public.leads_topo;

-- 2. Garantir que RLS está ativado
ALTER TABLE public.leads_topo ENABLE ROW LEVEL SECURITY;

-- 3. Criar política PERMISSIVA para INSERT anônimo (formulário público)
CREATE POLICY "allow_anon_insert"
ON public.leads_topo
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 4. Criar política para SELECT apenas autenticados (segurança)
CREATE POLICY "allow_authenticated_select"
ON public.leads_topo
FOR SELECT
TO authenticated
USING (true);

-- 5. VERIFICAÇÃO: Listar todas as políticas da tabela
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
-- TESTE MANUAL (descomente para testar)
-- ============================================
-- Este INSERT simula o que o formulário faz
-- INSERT INTO public.leads_topo (nome, email, telefone)
-- VALUES ('Teste RLS', 'teste@rls.com', '11999999999')
-- RETURNING *;
