import { refs } from "../js/refs.js";
import { closeForm, openForm } from "./homePage/form.js";
import { setLocal } from "./localstorage.js";
import { closeModalLevel, openModalLevel } from "./modal/modalLevel.js";
import { setHeroHp } from "./heroPage/setHeroHp.js";
import { closeHeroPage, setHeroPage } from "./heroPage/setHeroPage.js";
import { setLevel } from "./heroPage/setHeroLevel.js";
import { closeModalFinish, openModalFinish } from "./modal/modalFinish.js";
import { closeModalLose } from "./modal/modalLose.js";
import { heroes } from "./heroPage/heroes.js";
import { generateRandomDamage } from "./heroPage/enemyDamage.js";
import { setScore } from "./heroPage/score.js";
import {
  closeModalInstruction,
  openModalInstruction,
} from "./modal/modalInstruction.js";

refs.form.addEventListener("submit", handleSubmit);
refs.hero.addEventListener("click", handleClickHero);
refs.modalBtnLevel.addEventListener("click", handleClickModalBtn);
refs.modalBtnRestart.addEventListener("click", handleClickModalBtnRestart);
refs.modalBtnRestartLose.addEventListener(
  "click",
  handleClickModalBtnRestartLose
);
refs.modalBtnChange.addEventListener("click", handleClickModalBtnChange);
refs.modalBtnInstruction.addEventListener(
  "click",
  handleClickModalBtnInstruction
);

let levelId = 1;
const user = {};

function handleSubmit(e) {
  e.preventDefault();
  user.name = e.target[0].value;
  user.email = e.target[1].value;
  closeForm();
  setLocal(user);
  openModalInstruction();
}

function handleClickModalBtnInstruction() {
  closeModalInstruction();
  setHeroPage(user);
  refs.form.reset();
  const hp = refs.yourHp.offsetHeight;
  const enemyHp = refs.enemyHp.offsetHeight;
  generateRandomDamage(levelId, hp, enemyHp);
}

function handleClickHero() {
  setScore();
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
  const hp = refs.yourHp.offsetHeight;
  generateRandomDamage(levelId, hp);
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
  const hp = refs.yourHp.offsetHeight;
  generateRandomDamage(levelId, hp);
}
function handleClickModalBtnRestartLose() {
  levelId = 1;
  const data = JSON.parse(localStorage.getItem("form"));
  const user = {
    name: data.name,
    email: data.email,
  };
  setHeroPage(user);
  closeModalLose();
  const hp = refs.yourHp.offsetHeight;
  generateRandomDamage(levelId, hp);
}
function handleClickModalBtnChange() {
  levelId = 1;

  closeHeroPage();
  openForm();
  closeModalFinish();
}
