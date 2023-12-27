(function () {
  const imagesList = [
    {
      id: '1',
      title: 'The Hunters in the Snow',
      width: '1280',
      height: '918',
    },
    {
      id: '2',
      title: 'The Peasant Wedding',
      width: '1280',
      height: '885',
    },
    {
      id: '3',
      title: 'Peasant Dance',
      width: '1280',
      height: '891',
    },
    {
      id: '4',
      title: 'Winter Landscape with Skaters and a Bird Trap',
      width: '1280',
      height: '849',
    },
    {
      id: '5',
      title: 'Dulle Griet (Mad Meg)',
      width: '1280',
      height: '925',
    },
    {
      id: '6',
      title: 'The Fight between Carnival and Lent',
      width: '1280',
      height: '924',
    },
    {
      id: '7',
      title: 'Landscape with the Fall of Icarus',
      width: '1280',
      height: '818',
    },
    {
      id: '8',
      title: 'The Tower of Babel',
      width: '1280',
      height: '937',
    },
    {
      id: '9',
      title: 'Netherlandish Proverbs',
      width: '1280',
      height: '906',
    },
    {
      id: '10',
      title: 'The Triumph of Death',
      width: '1280',
      height: '913',
    },
  ];

  function setRandomImage() {
    const imageContainer = document.querySelector('.main__image-box');

    const randomIndex = Math.floor(Math.random() * imagesList.length);
    const randomImage = imagesList[randomIndex];
    const imageLink = `images/Pieter_Bruegel/${randomImage.id}.jpg`;
    const html = `<img src="${imageLink}" alt="${randomImage.title}" width="${randomImage.width}" height="${randomImage.height}">`;

    imageContainer.innerHTML = html;
  }
  setRandomImage();

  setInterval(setRandomImage, 3000);
})();
