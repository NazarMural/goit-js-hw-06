const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");
const createElementIngredients = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});
ingredientsRef.append(...createElementIngredients);