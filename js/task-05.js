const input = document.querySelector(`#name-input`);
console.log(input);

const spanName = document.querySelector(`#name-output`);
console.log(spanName);

input.addEventListener(`input`, onInput);

function onInput(event) {
  spanName.textContent = event.currentTarget.value.trim();
  console.log(event.currentTarget.value.trim());
  if (event.currentTarget.value.trim() === ``) {
    spanName.textContent = `Anonymuos`;
  }
}
