# 🚀 LP Black Friday Odonto 2025 - f5 Estratégia

Landing Page para captura de leads para a live gratuita sobre Black Friday Odontológica 2025.

## 📋 Sobre o Projeto

Live exclusiva que revelará estratégias validadas em +3.000 clínicas para criar ofertas irresistíveis que lotam agenda mantendo lucratividade.

**Data do Evento:** 17 de Novembro de 2025, 19h
**Plataforma:** YouTube (Ao Vivo)
**Investimento:** 100% Gratuito

## 🎯 Funcionalidades Implementadas

### ✅ Seções da Landing Page

- [x] **Hero Section** - Headline impactante + informações do evento + CTAs
- [x] **Pain Points** - 4 dores específicas do público-alvo
- [x] **Solution** - Os 4 Pilares da Black Friday Odontológica Lucrativa
- [x] **Cases de Sucesso** - 3 cases reais com resultados validados
- [x] **FAQ** - 12 perguntas frequentes com accordion
- [x] **Formulário de Captura** - Integrado com Supabase

### ✅ Formulário de Captura de Leads

- [x] Validação com Zod (nome, email, WhatsApp obrigatórios)
- [x] Captura automática de UTM params
- [x] Captura de IP address do usuário
- [x] Captura de informações de device (tipo, user agent, resolução)
- [x] Integração com Supabase
- [x] Toast de feedback (sucesso/erro)
- [x] Loading states e validações

## 🛠️ Stack Técnica

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS + Shadcn/UI
- **Backend:** Supabase (Database + Auth)
- **Forms:** React Hook Form + Zod
- **Routing:** React Router DOM
- **Notificações:** Sonner (Toast)

## 📦 Instalação e Setup

### 1. Clone o repositório

```bash
git clone https://github.com/f5estrategia/lp-black-friday-f5.git
cd lp-black-friday-f5
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione suas credenciais do Supabase:

```env
VITE_SUPABASE_URL=https://imotgvapfkebngteuccf.supabase.co
VITE_SUPABASE_ANON_KEY=sua_chave_aqui
```

### 4. Configure a tabela no Supabase

Execute o seguinte SQL no Supabase SQL Editor:

```sql
CREATE TABLE leads_blackfriday_2025 (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,

  -- Dados do formulário
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  clinica TEXT,
  mensagem TEXT,

  -- Dados de rastreamento
  ip_address TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,

  -- Dados de device
  device_type TEXT,
  user_agent TEXT,
  screen_resolution TEXT,
  language TEXT,

  -- Dados de navegação
  page_url TEXT,
  referrer TEXT
);

-- Criar índices para performance
CREATE INDEX idx_leads_email ON leads_blackfriday_2025(email);
CREATE INDEX idx_leads_created_at ON leads_blackfriday_2025(created_at);
CREATE INDEX idx_leads_utm_source ON leads_blackfriday_2025(utm_source);
```

### 5. Execute o projeto localmente

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos de produção estarão na pasta `dist/`

## 📁 Estrutura do Projeto

```
lp-black-friday-f5/
├── src/
│   ├── components/
│   │   ├── HeroBlackFriday.tsx         # Hero da LP Black Friday
│   │   ├── PainPointsBlackFriday.tsx   # Seção de dores
│   │   ├── Solution.tsx                # 4 Pilares + Bônus
│   │   ├── CasesSection.tsx            # Cases de sucesso
│   │   ├── FAQSection.tsx              # Perguntas frequentes
│   │   ├── ContactForm.tsx             # Formulário de captura ⭐
│   │   ├── Footer.tsx                  # Rodapé
│   │   └── ui/                         # Componentes Shadcn/UI
│   ├── lib/
│   │   └── supabase.ts                 # Cliente Supabase
│   ├── pages/
│   │   └── IndexBlackFriday.tsx        # Página principal
│   └── App.tsx
├── .env.example                         # Exemplo de variáveis
└── README_SETUP.md                      # Este arquivo
```

## 🎨 Customizações

### Cores do Tema

As cores da f5 Estratégia estão definidas em `src/index.css`:

```css
--f5-orange: 14 100% 60%;
--f5-orange-light: 14 100% 68%;
--f5-orange-dark: 14 87% 54%;
```

### Conteúdo

Todos os textos e conteúdos seguem as especificações do arquivo:
- `landing_page_blackfriday_odonto_2025.json`
- `plano de implementacao de lp black friday.txt`

## 🔧 Comandos Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build de produção
npm run lint         # Executa linter
```

## 📊 Dados Capturados pelo Formulário

O formulário captura automaticamente:

1. **Dados do usuário:**
   - Nome completo
   - Email
   - WhatsApp
   - Nome da clínica (opcional)
   - Mensagem (opcional)

2. **UTM Parameters:**
   - utm_source
   - utm_medium
   - utm_campaign
   - utm_term
   - utm_content

3. **Informações de Device:**
   - Tipo de device (mobile/tablet/desktop)
   - User agent
   - Resolução da tela
   - Idioma do navegador

4. **Dados de Navegação:**
   - IP address
   - URL da página
   - Referrer

## 🚨 Importante

- ⚠️ **Não comite o arquivo `.env`** - Ele está no `.gitignore`
- ⚠️ **Configure RLS (Row Level Security)** no Supabase em produção
- ⚠️ **Teste o formulário** antes de entrar no ar

## 📞 Suporte

Para dúvidas ou problemas:
- Email: contato@f5estrategia.com
- Local: Florianópolis - SC

---

**Desenvolvido por:** f5 Estratégia - Aceleradora de Vendas
**Especialistas em:** Marketing Digital para Clínicas de Saúde

🤖 Generated with Claude Code
