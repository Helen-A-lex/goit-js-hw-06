const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSend);
function onFormSend(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((value, name) => {
    data[name] = value;
  });

  const FormElements = event.currentTarget.elements;
  const email = FormElements.email.value.trim();
  const password = FormElements.password.value.trim();
  if (email === "" || password === "") {
    alert(`Всі поля повинні бути заповнені!`);
  } else {
    console.log(data);
    event.currentTarget.reset();
  }
}
