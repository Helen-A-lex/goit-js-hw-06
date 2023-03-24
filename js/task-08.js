const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSend);
function onFormSend(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((value, name) => {
    data[name] = value;
  });
  console.log("Form Data:", data);
  const FormElements = event.currentTarget.elements;
  const email = FormElements.email.value;
  const password = FormElements.password.value;
  if (email === "" || password === "") {
    alert(`Всі поля повинні бути заповнені!`);
  } else {
    event.currentTarget.reset();
  }
}
