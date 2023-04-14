import { refs } from "../refs.js";
import { heroes } from "./heroes.js";

// Функція встановлює силу удару за один клік в залежності від рівня героя та змінює колір HP в залежності від height

export function setHeroHp(hp, levelId) {
  const oneHit = 200 / heroes[levelId - 1].hp;

  if (hp < 140) refs.enemyHp.style.backgroundColor = "#ff5500";
  if (hp < 80) refs.enemyHp.style.backgroundColor = "#d40c00";
  refs.enemyHp.style.height = `${hp - oneHit}px`;
  if (hp < oneHit || hp <= oneHit) refs.enemyHp.style.height = `0px`;
  return oneHit;
}
