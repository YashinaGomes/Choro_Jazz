document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container4');
  
    let cardsData = [
      {
        imgSrc1: './assets/cards/mestreamelia.png',
        imgSrc2: './assets/cards/release_branco.png',
        link1: '#',
        link2: '/assets/pdf/Amelia.pdf',
      },
      // {
      //   imgSrc1: './assets/cards/mestredamasceno.png',
      //   imgSrc2: './assets/cards/release.png',
      //   imgAlt1: 'Image for Card 2',
      //   imgAlt2: 'Image 2 for Card 2',
      //   link1: '#',
      //   link2: '/assets/pdf/MestreDamasceno.pdf',
      // },
      {
        imgSrc1: './assets/cards/mestrediquinho.png',
        imgSrc2: '',
        link1: '',
        link2: '',
      },
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
      card.style.background = '#000'; // Aplicando fundo preto em todos os cards
  
      const img1 = document.createElement('img');
      img1.src = cardData.imgSrc1;
      img1.alt = cardData.imgAlt1 || 'Image 1';
      card.appendChild(img1);
  
      const imgLink2 = document.createElement('a');
      imgLink2.href = cardData.link2;
      imgLink2.target = '_blank'; // Adiciona target="_blank" aqui
  
      const img2 = document.createElement('img');
      img2.src = cardData.imgSrc2;
      img2.alt = cardData.imgAlt2 || '';
      img2.style.width = '80px';
      img2.style.paddingLeft = '20px';
      imgLink2.appendChild(img2);
      card.appendChild(imgLink2);
  
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
  
      cardChunks.forEach((chunk) => {
        const row = document.createElement('div');
        row.className = 'card-row';
  
        chunk.forEach((cardData) => {
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
  