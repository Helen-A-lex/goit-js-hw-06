const decrementBtn = document.querySelector(
  `button[data-action = "decrement"]`
);
const valueEl = document.querySelector(`#value`);

const incrementBtn = document.querySelector(
  `button[data-action = "increment"]`
);

let counterValue = 0;

decrementBtn.addEventListener(`click`, onDecrementBtnClick);
function onDecrementBtnClick() {
  valueEl.textContent = counterValue;
  counterValue -= 1;
  console.log(counterValue);
}
incrementBtn.addEventListener(`click`, onIncrementBtnClick);
function onIncrementBtnClick() {
  valueEl.textContent = counterValue;
  counterValue += 1;
  console.log(counterValue);
}
