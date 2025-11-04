# 🎨 Especificação do Banner Hero - Black Friday 2025

## 📐 Dimensões e Formato

### **Desktop (Landscape)**
- **Tamanho:** `1920x1080px` (Full HD 16:9)
- **Formato:** WebP (primeira escolha) ou PNG
- **Peso máximo:** 300KB
- **Nome do arquivo:** `hero-banner-desktop.webp`

### **Mobile (Portrait)**
- **Tamanho:** `1080x1920px` (9:16 - Instagram Stories)
- **Formato:** WebP (primeira escolha) ou PNG
- **Peso máximo:** 250KB
- **Nome do arquivo:** `hero-banner-mobile.webp`

### **Tablet (Optional - se necessário)**
- **Tamanho:** `1536x1024px` (iPad Pro 3:2)
- **Formato:** WebP ou PNG
- **Peso máximo:** 280KB
- **Nome do arquivo:** `hero-banner-tablet.webp`

---

## 🎯 Área de Segurança

### Desktop
```
┌─────────────────────────────┐
│   Margem: 100px todas edges  │
│  ┌─────────────────────┐    │
│  │  Área de Conteúdo   │    │
│  │    1720x880px       │    │
│  └─────────────────────┘    │
└─────────────────────────────┘
```

### Mobile
```
┌──────────────┐
│  Margem: 60px │
│ ┌──────────┐  │
│ │          │  │
│ │ Conteúdo │  │
│ │ 960x1800 │  │
│ │          │  │
│ └──────────┘  │
└──────────────┘
```

---

## 🎨 Especificações de Design

### Cores Permitidas
- **Laranja f5:** `#FE5B04` (cor principal)
- **Laranja Escuro:** `#C93F04`
- **Dourado:** `#D4AF37` (para destaques)
- **Preto:** `#0A0A0A`
- **Branco:** `#FFFFFF`
- **Cinza Claro:** `#EFEFEF`

### Elementos do Banner

#### ✅ Incluir:
1. **Headline curta** (diferente da do site - mais visual)
   - Ex: "Black Friday Odonto 2025"
   - Ex: "3x Mais Faturamento"

2. **Data e horário** (pequeno, mas legível)
   - "17/11 às 19h"

3. **Badge/Selo:**
   - "100% GRATUITO"
   - "LIVE EXCLUSIVA"

4. **Elementos visuais:**
   - Gráficos abstratos
   - Formas geométricas
   - Elementos de movimento

#### ❌ NÃO incluir:
- Muito texto (já tem na página)
- CTAs longos (já tem botão abaixo)
- Informações detalhadas (reservar para o conteúdo)
- Fotos de pessoas (manter abstrato)

---

## 📁 Local de Upload

Salve os arquivos em:
```
src/assets/black-friday/hero-banner-desktop.webp
src/assets/black-friday/hero-banner-mobile.webp
src/assets/black-friday/hero-banner-tablet.webp (opcional)
```

---

## 💡 Sugestões de Layout

### Opção 1: Minimalista
```
┌─────────────────────────────────┐
│                                 │
│    BLACK FRIDAY                 │
│    ODONTO 2025                  │
│                                 │
│    [Badge: GRATUITO]            │
│                                 │
│    17/11 • 19h                  │
│                                 │
└─────────────────────────────────┘
```

### Opção 2: Com Destaque de Métrica
```
┌─────────────────────────────────┐
│                                 │
│         3x MAIS                 │
│      FATURAMENTO                │
│                                 │
│  Black Friday Odonto 2025       │
│  [Badge: LIVE GRATUITA]         │
│                                 │
│  17 NOV • 19H                   │
│                                 │
└─────────────────────────────────┘
```

### Opção 3: Split Design (Desktop)
```
┌────────────────────┬────────────┐
│                    │            │
│  BLACK FRIDAY      │   [Badge]  │
│  ODONTO 2025       │            │
│                    │    17/11   │
│  Fature 3x mais    │    19h     │
│  sem queimar       │            │
│  margem            │  GRATUITO  │
│                    │            │
└────────────────────┴────────────┘
```

---

## ✅ Checklist antes de finalizar

- [ ] Tamanhos corretos (1920x1080 desktop / 1080x1920 mobile)
- [ ] Formato WebP com fallback PNG
- [ ] Peso otimizado (< 300KB desktop, < 250KB mobile)
- [ ] Cores da paleta f5
- [ ] Textos legíveis em ambos tamanhos
- [ ] Margem de segurança respeitada
- [ ] Testado em fundo escuro (background do site)
- [ ] Nome do arquivo correto

---

## 🔧 Ferramentas Recomendadas

### Para criar:
- **Figma** (recomendado - gratuito)
- **Canva Pro** (templates prontos)
- **Adobe Photoshop**
- **Adobe Illustrator**

### Para otimizar:
- **Squoosh** (https://squoosh.app/) - conversão para WebP
- **TinyPNG** (https://tinypng.com/) - compressão PNG

---

## 📌 Implementação no Código

Após criar os banners, eles serão automaticamente integrados no componente Hero com:

```tsx
// Desktop
<img src="hero-banner-desktop.webp" className="hidden md:block" />

// Mobile
<img src="hero-banner-mobile.webp" className="md:hidden" />
```

Posicionamento: Logo após o título "Black Friday Odonto 2025"

---

**Dúvidas?**
Qualquer questão sobre as especificações, me avise!

🎨 **Bom trabalho com o design!**
