const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listFirstEl = document.createElement(`li`);
listFirstEl.classList.add(`item`);
listFirstEl.textContent = "Potatoes";
console.log(listFirstEl);

const listSecondEl = document.createElement(`li`);
listSecondEl.classList.add(`item`);
listSecondEl.textContent = "Mushrooms";
console.log(listSecondEl);

const listThirdEl = document.createElement(`li`);
listThirdEl.classList.add(`item`);
listThirdEl.textContent = "Garlic";
console.log(listThirdEl);

const listFourthEl = document.createElement(`li`);
listFourthEl.classList.add(`item`);
listFourthEl.textContent = "Tomatos";
console.log(listFourthEl);

const listFifthEl = document.createElement(`li`);
listFifthEl.classList.add(`item`);
listFifthEl.textContent = "Herbs";
console.log(listFifthEl);

const listSixthEl = document.createElement(`li`);
listSixthEl.classList.add(`item`);
listSixthEl.textContent = "Condiments";
console.log(listSixthEl);

const listIngredients = document.querySelector(`#ingredients`);
listIngredients.append(
  listFirstEl,
  listSecondEl,
  listThirdEl,
  listFourthEl,
  listFifthEl,
  listSixthEl
);
