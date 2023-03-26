const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
const listItem = ingredients
  .map((item) => `<li class="item">${item}</li>`)
  .join("");
listEl.insertAdjacentHTML("beforeend", listItem);
