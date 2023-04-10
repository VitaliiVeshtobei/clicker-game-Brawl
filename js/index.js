import { refs } from "../js/refs.js";

refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  // при успішній заповненій формі скриваємо секцію з формою та записуємо дані в localstorage

  refs.formSection.style.display = "none";
  const data = {
    name: e.target[0].value,
    email: e.target[1].value,
  };
  localStorage.setItem("form", JSON.stringify(data));
  console.log(refs.body);
  refs.body.style.backgroundImage = `url("../images/iapqmzd3zu721.jpg")`;
  refs.heroSection.style.display = "flex";
}
