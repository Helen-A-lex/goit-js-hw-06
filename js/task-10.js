function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const divEl = document.querySelector("#controls");

// const input = divEl.firstElementChild;
// input.addEventListener("click", onInput);
// function onInput(evt) {
//   console.log(evt.currentTarget.value);
// }
// const buttonCreate = divEl.children[1];
// console.log(buttonCreate);
// buttonCreate.addEventListener("click", createBoxes);
// const buttonDestroy = divEl.lastElementChild;
// console.log(buttonDestroy);
// buttonDestroy.addEventListener("click");
// const divBoX = document.querySelector("#boxes", destroyBoxes);
// console.log(divBoX);

// function createBoxes(amount) {
//   const randomColor = getRandomHexColor();
//   const div = document.createElement("div");
//   div.style.backgroundColor = randomColor;
//   div.style.width = "30 px";
//   div.style.height = "30px";

//   console.log(div);
// }
// divBoX.appendChild(div);
// function destroyBoxes() {}

const divEl = document.querySelector("#controls");
const input = divEl.querySelector("input");
const buttonCreate = divEl.querySelector("[data-create]");
const buttonDestroy = divEl.querySelector("[data-destroy]");
// Можна звернутись і так
// const input = document.querySelector("#controls input");
// const buttonCreate = document.querySelector("#controls [data-create]");
// const buttonDestroy = document.querySelector("#controls [data-destroy]");

const divBox = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;

  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const randomColor = getRandomHexColor();
    const div = document.createElement("div");
    div.style.backgroundColor = randomColor;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    divBox.appendChild(div);
    size += 10;
  }
}

function destroyBoxes() {
  // divBox.innerHTML = "";
  while (divBox.firstChild) {
    divBox.removeChild(divBox.firstChild);
  }
}
