# 🚀 Instruções para Eduardo - Continuação do Projeto LP Black Friday F5

Olá Eduardo! 👋

Este documento contém todas as informações necessárias para você continuar o desenvolvimento da Landing Page da Black Friday da F5 Estratégia via VS Code com Claude.

---

## 📦 1. CLONAR O REPOSITÓRIO

**Link do Repositório:** https://github.com/f5estrategia/lp-black-friday-f5.git

**⚠️ IMPORTANTE:** Você precisa ter acesso ao repositório Git. Peça ao Gabriel para te adicionar como colaborador no GitHub.

```bash
# Clone o repositório
git clone https://github.com/f5estrategia/lp-black-friday-f5.git

# Entre na pasta do projeto
cd lp-black-friday-f5

# Instale as dependências
npm install
```

---

## 💻 2. ABRIR NO VS CODE COM CLAUDE

1. **Abra o VS Code**
2. **Abra a pasta do projeto:** `File > Open Folder` → Selecione `lp-black-friday-f5`
3. **Ative a extensão Claude Code** (já deve estar instalada)
4. **Inicie uma conversa com Claude** usando o comando:
   ```
   Olá Claude! Sou o Eduardo, desenvolvedor e gestor de tráfego da F5 Estratégia.
   Estou continuando o projeto da Landing Page da Black Friday que você estava
   desenvolvendo com o Gabriel. Preciso que você me ajude a:

   1. Configurar o domínio customizado da F5 no Cloudflare
   2. Ajustar tracking de pixels e UTMs para campanhas
   3. Implementar melhorias de conversão

   Pode me ajudar?
   ```

---

## 🌐 3. STATUS ATUAL DO PROJETO

### ✅ O que já está pronto:
- ✅ Landing Page completa com design luxuoso
- ✅ 7 CTAs estratégicos direcionando para formulário de inscrição
- ✅ Formulário de captura de leads (nome, email, telefone)
- ✅ Integração com Supabase (banco de dados)
- ✅ Deploy no Firebase Hosting
- ✅ RLS (Row Level Security) configurado no Supabase

### 📊 URLs Importantes:
- **Site Atual:** https://lp-black-friday-2025.web.app
- **Painel Firebase:** https://console.firebase.google.com/project/lp-black-friday-2025
- **Painel Supabase:** https://supabase.com/dashboard/project/imotgvapfkebngteuccf

### 📂 Estrutura de Arquivos Principais:
```
lp-black-friday-f5/
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx       # Formulário principal
│   │   ├── HeroLuxury.tsx        # Seção hero
│   │   ├── ResultsSection.tsx    # Casos de sucesso
│   │   ├── Solution.tsx          # 4 pilares + bônus
│   │   ├── PainPoints.tsx        # Dores do cliente
│   │   ├── Methodology.tsx       # Sistema CHAVI
│   │   └── DifferentialsSection.tsx # CEO + ecossistema
│   ├── lib/
│   │   └── supabase.ts          # Config Supabase
│   └── index.css                # Estilos Tailwind
├── .env                         # Variáveis de ambiente
└── firebase.json                # Config Firebase
```

---

## 🎯 4. TAREFAS PRIORITÁRIAS PARA VOCÊ (GESTOR DE TRÁFEGO)

### A) Configurar Domínio no Cloudflare

**Objetivo:** Apontar um domínio da F5 (ex: `blackfriday.f5estrategia.com.br`) para o site.

**Passos:**

1. **No Firebase Console:**
   - Acesse: https://console.firebase.google.com/project/lp-black-friday-2025/hosting/sites
   - Clique em "Add custom domain"
   - Digite o domínio desejado (ex: `blackfriday.f5estrategia.com.br`)
   - Firebase vai gerar registros DNS

2. **No Cloudflare:**
   - Acesse o painel do domínio `f5estrategia.com.br`
   - Vá em DNS → Add Record
   - Adicione os registros fornecidos pelo Firebase (geralmente `A` ou `TXT`)
   - **IMPORTANTE:** Proxy Status = `DNS Only` (ícone cinza)

3. **Aguarde Propagação:** 5-30 minutos

4. **Teste:** Acesse o domínio customizado

---

### B) Implementar Pixels de Rastreamento

**Objetivo:** Configurar Facebook Pixel, Google Analytics e Google Ads.

**Onde adicionar:**

Edite o arquivo: `index.html` (na raiz do projeto)

**Facebook Pixel:**
```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID_AQUI');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
```

**Google Analytics 4:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Google Ads (Conversão):**
```html
<!-- Google Ads Conversion -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXXX');
</script>
```

**Evento de Conversão no Formulário:**

O formulário já dispara evento para dataLayer (linha 142-148 do `FinalCTA.tsx`):
```javascript
if ((window as any).dataLayer) {
  (window as any).dataLayer.push({
    event: 'form_submission',
    formId: 'form-f5-principal',
    email: validatedData.email
  });
}
```

Você só precisa configurar **triggers** no Google Tag Manager para capturar esse evento.

---

### C) Otimizar UTMs

**Onde adicionar:** Nas campanhas do Google Ads e Meta Ads.

**Formato Padrão:**
```
https://blackfriday.f5estrategia.com.br/?utm_source=facebook&utm_medium=cpc&utm_campaign=blackfriday2025&utm_content=video1&utm_term=odonto
```

**Os dados de UTM já são capturados automaticamente** no formulário `FinalCTA.tsx` (linhas 76-105) e salvos no Supabase.

---

### D) Testes de Conversão

**1. Teste A/B de Headlines (Opcional):**
- Teste variações de título no Hero
- Use Google Optimize ou VWO

**2. Teste de Velocidade:**
```bash
# No terminal do projeto
npm run build
```

**3. Teste de Formulário:**
- Acesse: https://lp-black-friday-2025.web.app/#contato
- Preencha e envie
- Verifique se o lead aparece no Supabase: https://supabase.com/dashboard/project/imotgvapfkebngteuccf/editor

---

## 🛠️ 5. COMANDOS ÚTEIS

```bash
# Rodar localmente (ambiente de desenvolvimento)
npm run dev

# Build para produção
npm run build

# Deploy no Firebase
firebase deploy --only hosting

# Ver logs do Firebase
firebase hosting:channel:list
```

---

## 🔐 6. CREDENCIAIS E ACESSOS

**Supabase:**
- URL: https://imotgvapfkebngteuccf.supabase.co
- Tabela: `leads_topo`
- Campos: `id`, `nome`, `email`, `telefone`, `created_at`

**Firebase:**
- Projeto: lp-black-friday-2025
- Email: f5estrategia@gmail.com

**Variáveis de Ambiente (`.env`):**
```
VITE_SUPABASE_URL=https://imotgvapfkebngteuccf.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **Não compartilhe essas credenciais publicamente!**

---

## 📊 7. MÉTRICAS PARA ACOMPANHAR

### KPIs de Campanha:
- **CTR (Click-Through Rate):** Anúncio → Landing Page
- **Taxa de Conversão:** Visitantes → Leads
- **CPL (Custo por Lead):** Investimento / Leads
- **CPA (Custo por Aquisição):** Se tiver venda direta

### Onde Acompanhar:
- **Google Analytics:** Tráfego, bounce rate, páginas/sessão
- **Facebook Ads Manager:** CTR, CPM, frequência
- **Google Ads:** Quality Score, CTR, CPC
- **Supabase:** Total de leads capturados

---

## 🎨 8. PERSONALIZAÇÕES RECOMENDADAS

### Para Claude no VS Code:

**Peça ao Claude para:**
1. Adicionar **Google Tag Manager** (mais fácil de gerenciar pixels)
2. Criar **variações de copy** para testes A/B
3. Implementar **chat ao vivo** (Tawk.to ou Jivochat)
4. Adicionar **popup de saída** (exit-intent)
5. Criar **landing page de agradecimento** pós-inscrição
6. Implementar **retargeting pixel** específico

---

## 📞 9. SUPORTE

**Dúvidas Técnicas:** Pergunte ao Claude Code diretamente no VS Code

**Dúvidas de Negócio:** Fale com Gabriel

**Problemas com Supabase:**
- Verifique o arquivo `CORRIGIR_RLS_LEADS_TOPO.sql` na raiz do projeto
- Se o formulário não funcionar, execute esse SQL no Supabase

---

## ✅ 10. CHECKLIST ANTES DE RODAR CAMPANHAS

- [ ] Domínio customizado apontado e funcionando
- [ ] Facebook Pixel instalado e testado
- [ ] Google Analytics instalado e testado
- [ ] Google Ads Conversion Tracking instalado
- [ ] Formulário testado e salvando no Supabase
- [ ] UTMs configuradas nas campanhas
- [ ] Página mobile 100% responsiva (testar no celular)
- [ ] Velocidade de carregamento < 3s
- [ ] Todos os CTAs funcionando
- [ ] Email de agradecimento configurado (se aplicável)

---

## 🎯 PRÓXIMOS PASSOS SUGERIDOS

1. ✅ Configure o domínio customizado
2. ✅ Instale os pixels de rastreamento
3. ✅ Teste o formulário end-to-end
4. ✅ Rode campanhas de teste com R$50
5. ✅ Analise métricas e otimize
6. ✅ Escale gradualmente

---

## 💡 DICAS DO CLAUDE

- **Use o Claude Code para tudo:** Ele conhece 100% do projeto
- **Não edite manualmente arquivos complexos:** Peça ao Claude
- **Sempre teste localmente antes de fazer deploy:** `npm run dev`
- **Faça commits frequentes:** `git add . && git commit -m "sua mensagem"`

---

**Boa sorte, Eduardo! 🚀**

Se precisar de qualquer coisa, eu (Claude) estou aqui para ajudar via VS Code.

---

*Documento criado em: 31/10/2025*
*Última atualização do deploy: https://lp-black-friday-2025.web.app*
