import { refs } from "../js/refs.js";
import { heroes } from "./heroes.js";

export function setHeroHp(hp, levelId) {
  const oneHit = 200 / heroes[levelId - 1].hp;
  if (hp < 140) refs.enemyHp.style.backgroundColor = "#ff5500";
  if (hp < 80) refs.enemyHp.style.backgroundColor = "#d40c00";
  refs.enemyHp.style.height = `${hp - oneHit}px`;
  if (hp) if (hp < 5) refs.enemyHp.style.height = `0px`;
}
