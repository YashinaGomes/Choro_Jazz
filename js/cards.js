document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('card-container');

  let cardsData = [{
      imgSrc1: './assets/cards/baile_do_ney.png',
      imgSrc2: './assets/cards/release.png',
      link1: '#',
      link2: './assets/pdf/baile_do_ney.jpeg',
      title: 'Baile do Ney',
      text: 'Ney Conceição começou sua carreira musical tocando em banda baile e desde muito jovem teve que aprender a fazer o seu baixo pulsar a banda. Com vasta experiência...'
    },
    {
      imgSrc1: './assets/cards/Patriolino.png',
      imgSrc2: './assets/cards/release.png',
      link1: '#',
      link2: './assets/pdf/Patriolino.pdf',
      title: 'Carlinhos Patriolino e Choro Cabuloso',
      text: 'Carlinhos Patriolino é um multiinstrumentista autodidata, compositor e arranjador com uma arreira de repercussão nacional e...'
    },
    {
      imgSrc1: './assets/cards/Quartcheto.png',
      imgSrc2: './assets/cards/release.png',
      link1: '#',
      link2: './assets/pdf/Quartcheto.pdf',
      title: 'Quartchêto',
      text: 'O Quartchêto é um grupo instrumental formado por artistas dedicados ao fomento da música brasileira feita no Sul do Brasil. Nossa missão é compartilhar... '
    },
    {
      imgSrc1: './assets/cards/Duo_Celestial.png',
      imgSrc2: './assets/cards/release.png',
      link1: '#',
      link2: './assets/pdf/Duo_Selestrial.pdf',
      title: 'Duo Selestrial',
      text: 'Junior Crato e Fabricio da Rocha se encontraram no Crato no começo de 2013. Desse encontro inusitado surgiu a ideia de montar um espetáculo instrumental...'
    },
    {
      imgSrc1: './assets/cards/Egberto_Gismont.png',
      imgSrc2: './assets/cards/release.png',
      link1: '#',
      link2: './assets/pdf/Egberto_Gismont.pdf',
      title: 'Egberto Gismont e Orquestra a Base de Sopros de Curitiba',
      text: 'Egberto Gismonti nasceu em Carmo, município do Rio de Janeiro...'
    },
    {
      imgSrc1: './assets/cards/Gilberto_Monteiro.png',
      imgSrc2: './assets/cards/release.png',
      link1: '#',
      link2: './assets/pdf/Gilberto_Monteiro.pdf',
      title: 'Gilberto Monteiro e Sucinta Orquestra',
      text: 'Nascido na cidade de Santiago do Boqueirão, no Rio Grande do Sul, Gilberto Monteiro é considerado um dos maiores gaiteiros...'
    },
    {
      imgSrc1: './assets/cards/Moarcir_Luz.png',
      imgSrc2: './assets/cards/release.png',
      link1: '#',
      link2: './assets/pdf/Moarcir_Luz.pdf',
      title: 'Moacyr Luz e Samba do Trabalhador',
      text: 'Sentindo falta de estar com os amigos para fazer uma batucada daquelas, Moacyr Luz só conseguiu encontrar um único dia livre...'
    },
    {
      imgSrc1: './assets/cards/O_Trio.png',
      imgSrc2: './assets/cards/release.png',
      link1: '#',
      link2: './assets/pdf/O_Trio.pdf',
      title: 'O Trio',
      text: 'Foi criado em 1987, para homenagear Radamés Gnattali no seu aniversário de 80 anos. A partir desta primeira apresentação, quando interpretou obras de...'
    }
  ];

  // Ordena as imagens em ordem alfabética com base no imgSrc1
  cardsData.sort((a, b) => {
    const imgSrcA = a.imgSrc1.toLowerCase();
    const imgSrcB = b.imgSrc1.toLowerCase();
    if (imgSrcA < imgSrcB) return -1;
    if (imgSrcA > imgSrcB) return 1;
    return 0;
  });

  function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.background = '#F7941D'; // Cor de fundo para todos os cards

    const img1 = document.createElement('img');
    img1.src = cardData.imgSrc1;
    img1.alt = cardData.imgAlt1 || 'Image 1';
    img1.style.width = '100%'; // Ajusta a largura da imagem para preencher o card
    card.appendChild(img1);

    // Adiciona o título abaixo da primeira imagem
    const title = document.createElement('h3');
    title.innerText = cardData.title || 'Título do Evento';
    title.style.color = '#000';
    title.style.marginTop = '20px';
    title.style.textAlign = 'center'; // Centraliza o título
    title.style.fontSize = '21px'; // Aumenta o tamanho do título
    card.appendChild(title);

    // Adiciona um contêiner flexível para o texto e a imagem do release
    const textAndImageContainer = document.createElement('div');
    textAndImageContainer.style.display = 'flex';
    textAndImageContainer.style.flexDirection = 'column';
    textAndImageContainer.style.alignItems = 'center'; // Centraliza horizontalmente
    textAndImageContainer.style.justifyContent = 'center'; // Centraliza verticalmente
    textAndImageContainer.style.marginTop = '10px'; // Espaço entre o título e o texto
    textAndImageContainer.style.textAlign = 'center'; // Centraliza o texto

    // Adiciona o texto
    const text = document.createElement('p');
    text.innerText = cardData.text || 'Descrição do evento';
    text.style.color = '#000';
    text.style.marginTop = '4px';
    text.style.fontSize = '14px'; // Ajusta o tamanho do texto
    textAndImageContainer.appendChild(text);

    // Adiciona a imagem do release
    const imgLink2 = document.createElement('a');
    imgLink2.href = cardData.link2;
    imgLink2.target = '_blank';

    const img2 = document.createElement('img');
    img2.src = cardData.imgSrc2;
    img2.alt = cardData.imgAlt2 || 'Image 2';
    img2.style.width = '120px'; // Ajusta o tamanho da segunda imagem
    img2.style.height = 'auto'; // Mantém a proporção da imagem
    img2.style.marginTop = '1px'; // Espaço entre o texto e a imagem do release
    imgLink2.appendChild(img2);
    textAndImageContainer.appendChild(imgLink2);

    card.appendChild(textAndImageContainer);

    return card;
  }

  function renderCards() {
    cardContainer.innerHTML = '';

    const windowWidth = window.innerWidth;
    let cardsPerRow = 3;

    if (windowWidth <= 768) {
      cardsPerRow = 1;
    } else if (windowWidth <= 1200) {
      cardsPerRow = 2;
    }

    const cardChunks = chunkArray(cardsData, cardsPerRow);

    cardChunks.forEach(chunk => {
      const row = document.createElement('div');
      row.className = 'card-row';

      chunk.forEach(cardData => {
        const card = createCard(cardData);
        row.appendChild(card);
      });

      cardContainer.appendChild(row);
    });
  }

  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  renderCards();

  window.addEventListener('resize', renderCards);
});