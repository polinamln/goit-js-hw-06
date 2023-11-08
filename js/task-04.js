const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

const span = document.querySelector('#value');

let counterValue = 0;

btnDecrement.addEventListener('click', handleClick);
btnIncrement.addEventListener('click', handleClick);

function handleClick(event) {
  const action = event.target.getAttribute('data-action');

  if (action === 'increment') {
    counterValue += 1;
  } else if (action === 'decrement') {
    counterValue -= 1;
  }

  updateCounterValue();
}

function updateCounterValue() {
  span.textContent = counterValue;
}
