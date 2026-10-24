# Mapas da Lei 14.711/2023

Página estática responsiva que substitui a antiga página Meu Pet. Estrutura adaptada de https://liareino.com/tributario/: abertura, amostras, depoimentos, dificuldade de estudo/comparação, público, autora, oferta e contato. Mantém fundos preto/cinza, destaques dourados e botões verdes. Textos adaptados ao produto; não utiliza a marca, depoimentos, vídeos ou credenciais da referência.

## Arquivos
- `index.html`: conteúdo e espaços numerados para completar.
- `css/style.css`: visual responsivo e molduras dos celulares em CSS.
- `js/config.js`: links de pagamento/WhatsApp e URLs dos dois vídeos.
- `js/script.js`: carrossel acessível e inserção dos vídeos nos celulares.

## Pendências numeradas na página
01 logo; 02–07 seis amostras de mapas; 08 depoimentos reais autorizados; 09 vídeo da lei seca; 10 vídeo dos mapas; 11 foto da autora; 12 apresentação; 13 mockup/capa; 14 formato e entrega; 15 checkout; 16 WhatsApp; 17 política de privacidade; 18 termos.

Os espaços devem ser preenchidos antes de usar a página em campanhas. Checkout e WhatsApp sem configuração levam à sinalização de pendência, sem destinos fictícios. Não há rastreadores nem formulários de coleta.

## Vídeos
Salvar os vídeos em `assets/videos/` e configurar seus caminhos em `js/config.js`. Preferir MP4 vertical 9:16. As telas preservam o enquadramento usando `object-fit: contain`, sem recortar o conteúdo. Reprodução manual, controles nativos, sem autoplay. A moldura do celular já está pronta e independe do vídeo.

## Visualização
Servir a raiz como site estático. Não exige build nem dependências. O repositório não configura automaticamente uma hospedagem.
