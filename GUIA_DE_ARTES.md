# 🎨 Guia de Artes - LP Black Friday Odonto 2025

## 📁 Estrutura de Pastas

```
src/assets/black-friday/
├── logos/              # Logos da f5 e variações
├── parceiros/          # Logos dos parceiros oficiais
├── homologados/        # Logos das franquias homologadas
└── cases/              # Fotos dos cases de sucesso
```

---

## 📸 Especificações de Imagens

### 1. LOGOS PARCEIROS OFICIAIS

**Pasta:** `src/assets/black-friday/parceiros/`

| Arquivo | Tamanho | Formato | Peso Máx | Descrição |
|---------|---------|---------|----------|-----------|
| `google-partner.png` | 200x80px | PNG | 20KB | Logo Google Partner (fundo transparente) |
| `meta-partner.png` | 200x80px | PNG | 20KB | Logo Meta Partner (fundo transparente) |
| `rd-station-partner.png` | 200x80px | PNG | 20KB | Logo RD Station Partner (fundo transparente) |

**Notas:**
- Fundo transparente obrigatório
- Cores: branco ou cinza claro (para contraste com fundo escuro)
- Formato: PNG com transparência

---

### 2. LOGOS FRANQUIAS HOMOLOGADAS

**Pasta:** `src/assets/black-friday/homologados/`

| Arquivo | Tamanho | Formato | Peso Máx | Descrição |
|---------|---------|---------|----------|-----------|
| `oral-unic-logo.png` | 150x60px | PNG | 15KB | Logo Oral Unic |
| `odonto-excellence-logo.png` | 150x60px | PNG | 15KB | Logo Odonto Excellence |
| `sorrifacil-logo.png` | 150x60px | PNG | 15KB | Logo SorriFacil |
| `oral-brasil-logo.png` | 150x60px | PNG | 15KB | Logo Oral Brasil |
| `odontotop-logo.png` | 150x60px | PNG | 15KB | Logo Odontotop |

**Notas:**
- Fundo transparente
- Cores: branco/cinza claro (40-60% de opacidade)
- Todas as logos devem ter altura similar para alinhamento

---

### 3. FOTOS DOS CASES

**Pasta:** `src/assets/black-friday/cases/`

#### Case 1: Oral Unic Ibirama
| Arquivo | Tamanho | Formato | Peso Máx | Descrição |
|---------|---------|---------|----------|-----------|
| `oral-unic-ibirama.jpg` | 1200x800px | JPG/WebP | 150KB | Foto da clínica ou equipe |

#### Case 2: Oral Unic Vila Mariana
| Arquivo | Tamanho | Formato | Peso Máx | Descrição |
|---------|---------|---------|----------|-----------|
| `oral-unic-vila-mariana.jpg` | 1200x800px | JPG/WebP | 150KB | Foto da clínica ou equipe |

#### Case 3: Centro do Sorriso Arapongas
| Arquivo | Tamanho | Formato | Peso Máx | Descrição |
|---------|---------|---------|----------|-----------|
| `centro-sorriso-arapongas.jpg` | 1200x800px | JPG/WebP | 150KB | Foto da clínica ou equipe |

**Notas:**
- Proporção 3:2 (paisagem)
- Fotos de alta qualidade mas otimizadas
- Preferência por WebP (melhor compressão)
- Fotos com boa iluminação e profissionais

---

### 4. FOTO DO CEO (Fernando Machado)

**Pasta:** `src/assets/black-friday/`

| Arquivo | Tamanho | Formato | Peso Máx | Descrição |
|---------|---------|---------|----------|-----------|
| `fernando-machado-ceo.jpg` | 400x400px | JPG/WebP | 80KB | Foto profissional circular |

**Notas:**
- Formato quadrado (será exibido em círculo)
- Fundo neutro ou com blur
- Foto profissional com boa iluminação
- Expressão confiante e acessível

---

### 5. LOGO f5 ESTRATÉGIA

**Pasta:** `src/assets/black-friday/logos/`

| Arquivo | Tamanho | Formato | Peso Máx | Descrição |
|---------|---------|---------|----------|-----------|
| `f5-logo-white.png` | 300x120px | PNG | 30KB | Logo f5 branco (header/footer) |
| `f5-logo-orange.png` | 300x120px | PNG | 30KB | Logo f5 laranja (variações) |

**Notas:**
- Fundo transparente
- Versões em branco e laranja da marca

---

## 🎯 Guidelines Gerais

### Otimização de Imagens

1. **Compressão:**
   - Use TinyPNG ou Squoosh para comprimir
   - WebP sempre que possível (melhor compressão)
   - Qualidade: 85-90% para JPG

2. **Nomes de Arquivo:**
   - Sempre em minúsculas
   - Use hífen (-) ao invés de espaço
   - Seja descritivo: `oral-unic-ibirama.jpg` ✅ / `foto1.jpg` ❌

3. **Formatos:**
   - **PNG:** Logos e elementos com transparência
   - **JPG:** Fotos de pessoas/locais
   - **WebP:** Preferencial para fotos (suporte moderno)

### Responsividade Mobile

Todas as imagens serão exibidas responsivamente:
- **Desktop:** Tamanho original
- **Tablet:** 80% do tamanho
- **Mobile:** 60% do tamanho ou full-width

---

## 📋 Checklist de Upload

Antes de adicionar as imagens, verifique:

- [ ] Tamanho correto (conforme tabela)
- [ ] Formato correto (PNG/JPG/WebP)
- [ ] Peso otimizado (< limite especificado)
- [ ] Nome do arquivo correto (minúsculas, com hífen)
- [ ] Fundo transparente (quando aplicável)
- [ ] Qualidade visual adequada

---

## 🔧 Como Adicionar as Imagens

### 1. Adicione os arquivos nas pastas corretas:

```
src/assets/black-friday/
├── parceiros/
│   ├── google-partner.png
│   ├── meta-partner.png
│   └── rd-station-partner.png
├── homologados/
│   ├── oral-unic-logo.png
│   ├── odonto-excellence-logo.png
│   ├── sorrifacil-logo.png
│   ├── oral-brasil-logo.png
│   └── odontotop-logo.png
├── cases/
│   ├── oral-unic-ibirama.jpg
│   ├── oral-unic-vila-mariana.jpg
│   └── centro-sorriso-arapongas.jpg
└── fernando-machado-ceo.jpg
```

### 2. Os componentes já estão preparados para importar as imagens

Os componentes serão atualizados para usar essas imagens assim que você adicioná-las.

---

## 🎨 Paleta de Cores (Referência)

Para criar artes consistentes com a identidade:

- **Laranja Principal:** `#FE5B04`
- **Laranja Escuro:** `#C93F04`
- **Dourado (Bônus):** `#D4AF37`
- **Preto:** `#0A0A0A`
- **Branco:** `#FFFFFF`
- **Cinza Claro:** `#EFEFEF`

---

## 📞 Dúvidas?

Se precisar de ajuda para otimizar ou criar as artes:
- **TinyPNG:** https://tinypng.com/ (compressão PNG/JPG)
- **Squoosh:** https://squoosh.app/ (conversão para WebP)
- **Canva:** https://canva.com/ (criação de artes)

---

**Última atualização:** 30/10/2024
