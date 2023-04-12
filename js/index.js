import { refs } from "../js/refs.js";
import { closeForm, openForm } from "./homePage/form.js";
import { setLocal } from "./localstorage.js";
import { closeModalLevel, openModalLevel } from "./modal/modalLevel.js";
import { setHeroHp } from "./heroPage/setHeroHp.js";
import { closeHeroPage, setHeroPage } from "./heroPage/setHeroPage.js";
import { setLevel } from "./heroPage/setHeroLevel.js";
import { closeModalFinish, openModalFinish } from "./modal/modalFinish.js";
import { heroes } from "./heroPage/heroes.js";

refs.form.addEventListener("submit", handleSubmit);
refs.hero.addEventListener("click", handleClickHero);
refs.modalBtnLevel.addEventListener("click", handleClickModalBtn);
refs.modalBtnRestart.addEventListener("click", handleClickModalBtnRestart);
refs.modalBtnChange.addEventListener("click", handleClickModalBtnChange);

function handleSubmit(e) {
  e.preventDefault();
  const user = {
    name: e.target[0].value,
    email: e.target[1].value,
  };

  // при успішній заповненій формі скриваємо секцію з формою та записуємо дані в localstorage
  closeForm();
  setLocal(user);
  // показуємо секцію hero , змінюємо фон
  setHeroPage(user);
}

let levelId = 1;

function handleClickHero() {
  let countScore = +refs.infoScore.textContent;
  refs.infoScore.textContent = countScore + 1;
  let allClicks = +refs.infoAllClick.textContent;
  refs.infoAllClick.textContent = allClicks + 1;
  let hp = refs.enemyHp.offsetHeight;
  const oneHit = setHeroHp(hp, levelId);
  if (hp <= oneHit && levelId !== heroes.length) {
    openModalLevel(levelId);
  }
  if (hp <= oneHit && levelId === heroes.length) {
    openModalFinish();
  }
}

function handleClickModalBtn() {
  closeModalLevel();
  setLevel((levelId += 1));
}

function handleClickModalBtnRestart() {
  levelId = 1;
  const data = JSON.parse(localStorage.getItem("form"));
  const user = {
    name: data.name,
    email: data.email,
  };
  setHeroPage(user);
  closeModalFinish();
}
function handleClickModalBtnChange() {
  levelId = 1;

  closeHeroPage();
  openForm();
  closeModalFinish();
}
