function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector("#controls");
console.log(divEl);
const input = divEl.firstElementChild;
console.log(input);

const buttonCreate = divEl.children[1];
console.log(buttonCreate);

const buttonDestroy = divEl.lastElementChild;
console.log(buttonDestroy);

const divBoX = document.querySelector("#boxes");
console.log(divBoX);

function createBoxes(amount) {
  const div = document.createElement("div");
  div.style.divBoX.appendChild(div);
}

console.log(createBoxes(6));
