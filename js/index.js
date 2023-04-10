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

  // показуємо секцію hero , змінюємо фон

  refs.body.style.backgroundImage = `url("../images/background/iapqmzd3zu721.jpg")`;
  refs.heroSection.style.display = "flex";
  console.log(refs.infoName);
  refs.infoName.textContent = data.name;
}

refs.hero.addEventListener("click", handleClick);

function handleClick() {
  let countScore = +refs.infoScore.textContent;
  refs.infoScore.textContent = countScore + 1;
  let allClicks = +refs.infoAllClick.textContent;
  refs.infoAllClick.textContent = allClicks + 1;
  let hp = refs.enemyHp.offsetHeight;
  const oneHit = 100 / 20;

  refs.enemyHp.style.height = `${hp - oneHit}px`;
}
