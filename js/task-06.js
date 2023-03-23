const input = document.querySelector("#validation-input");
const dataLength = Number(input.dataset.length);
input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  const inputValue = event.currentTarget.value.trim();
  console.log(inputValue);
  if (inputValue.length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
