const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients'); 

createList(ingredients); 

function createList(ingredients) {
  
  ingredients.forEach(element => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = element;
    list.appendChild(liEl)
  });
}

