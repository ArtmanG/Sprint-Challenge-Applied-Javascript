/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

const carouselImg = [
  '../assets/carousel/computer.jpeg',
  '../assets/carousel/mountains.jpeg',
  '../assets/carousel/trees.jpeg',
  '../assets/carousel/turntable.jpeg'
];

function createCarousel(array) {
  let carousel = document.createElement('div'),
      leftButton = document.createElement('div'),
      rightButton = document.createElement('div'),
      imgShown = document.createElement('img');

      carousel.classList.add('carousel');
      leftButton.classList.add('left-button');
      rightButton.classList.add('right-button');

      leftButton.textContent = '<';
      rightButton.textContent = '>';
      imgShown.src = array[0];

      carousel.append(leftButton);
      carousel.append(rightButton);
      carousel.append(imgShown);

      leftButton.addEventListener('click', () => {
        
      })

      rightButton.addEventListener('click', () => {
      
      })


  return carousel;
};

carouselContainer.append(createCarousel(carouselImg));