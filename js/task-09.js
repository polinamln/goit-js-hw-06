const body = document.querySelector('body');
const span = document.querySelector('.color');
const btn = document.querySelector('.change-color')

btn.addEventListener('click', getRandomHexColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', function() {
      const randomColor = getRandomHexColor();
      body.style.backgroundColor = randomColor;
      span.textContent = randomColor;
    });


