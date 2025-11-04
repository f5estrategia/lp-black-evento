# Instruções para Adicionar Imagem do Banner

Para finalizar a configuração da Landing Page, você precisa adicionar as imagens do banner do evento.

## Imagens Necessárias

1. **Banner Desktop**: `src/assets/banner-black-friday-evento-web.jpg`
   - Dimensões sugeridas: 1920x1080px ou similar
   - Formato: JPG ou PNG

2. **Banner Mobile**: `src/assets/banner-black-friday-evento-mobile.jpg`
   - Dimensões sugeridas: 1080x1920px ou similar (vertical)
   - Formato: JPG ou PNG

## Conteúdo da Imagem

Baseado na imagem fornecida, o banner deve conter:

- Texto "BLACK FRIDAY" com efeito neon laranja
- Foto do Fernando Machado
- Texto: "O EVENTO QUE VAI MUDAR O SEU FATURAMENTO AINDA EM 2025"
- Data: "13/11 | 19h"
- "Talk com Fernando Machado, CEO f5 estratégia"
- Localização: "Rua Manoel Loureiro, 1938. 11º andar - São José | SC"
- Call-to-action: "GARANTA SUA VAGA!"

## Como Adicionar

1. Salve a imagem do evento (fornecida anteriormente) como:
   - `src/assets/banner-black-friday-evento-web.jpg` (versão horizontal/quadrada para desktop)
   - `src/assets/banner-black-friday-evento-mobile.jpg` (versão vertical para mobile)

2. Se você só tem uma imagem, pode usar a mesma para ambos os casos, apenas renomeie-a duas vezes.

## Observação

Atualmente o código está configurado para buscar estas imagens. Caso as imagens não existam, você verá um erro de compilação.

Para uma solução temporária, você pode usar a mesma imagem para ambas as versões ou criar versões otimizadas para cada dispositivo.
