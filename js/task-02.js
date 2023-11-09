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
  const valuesArr = [];

  ingredients.forEach(element => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = element;
    valuesArr.push(liEl);
  });

  list.append(...valuesArr);
}
