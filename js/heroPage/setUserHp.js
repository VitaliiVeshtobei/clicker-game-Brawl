import { heroes } from "./heroes.js";
import { refs } from "../refs.js";
import { openModalLose } from "../modal/modalLose.js";
let id;
let userHp;
let count = 0;
let enemyHp;

export function generateRandomNumber(levelId, hp) {
  refs.modalBtnLevel.style.display = "none";

  if (levelId) id = levelId;
  if (hp) userHp = hp;

  enemyHp = refs.enemyHp.offsetHeight;

  const hero = heroes.find((hero) => id === hero.id);
  const minDamage = hero.damage.min;
  const maxDemage = hero.damage.max;
  let randomNumber = Math.floor(Math.random() * minDamage) + maxDemage;

  let delay = Math.floor(Math.random() * 4000) + 1000;

  if (count && enemyHp > 0) {
    refs.body.classList.add("damage");
    const damage = setTimeout(() => {
      console.log("damage");
      refs.body.classList.remove("damage");
    }, 1000);

    userHp -= randomNumber;
    refs.yourHp.style.height = `${userHp - randomNumber}px`;
  }
  if (userHp < 140) refs.yourHp.style.backgroundColor = "#ff5500";
  if (userHp < 80) refs.yourHp.style.backgroundColor = "#d40c00";
  count += 1;

  const timerId = setTimeout(generateRandomNumber, delay);

  if (enemyHp <= 0) {
    refs.modalBtnLevel.style.display = "inline";
    count = 0;
    clearTimeout(timerId);
    return;
  }
  if (userHp <= 0) {
    count = 0;
    refs.yourHp.style.height = "0px";

    clearTimeout(timerId);
    openModalLose();
  }
}
