import { refs } from "../js/refs.js";
import { setHeroHp } from "./setHeroHp.js";
import { setHeroPage } from "./setHeroPage.js";
import { setLevel } from "./setLevel.js";

refs.form.addEventListener("submit", handleSubmit);
refs.hero.addEventListener("click", handleClick);

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
  setHeroPage(data);
}

let levelId = 1;

function handleClick() {
  let countScore = +refs.infoScore.textContent;
  refs.infoScore.textContent = countScore + 1;
  let allClicks = +refs.infoAllClick.textContent;
  refs.infoAllClick.textContent = allClicks + 1;
  let hp = refs.enemyHp.offsetHeight;
  setHeroHp(hp, levelId);
  if (!hp) {
    setLevel((levelId += 1));
  }
}
