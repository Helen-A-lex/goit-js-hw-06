const inputFontSize = document.querySelector("#font-size-control");
console.dir(inputFontSize);
const span = document.querySelector("#text");
console.dir(span);

inputFontSize.addEventListener("input", onInput);
function onInput(event) {
  console.log(typeof Number(event.currentTarget.value));
  span.style.fontSize = Number(event.currentTarget.value) + "px";
}
