import { heroes } from "./heroes.js";
import { refs } from "../refs.js";

// Функія шукає героя в залежності від рівня та встановлює стартові значення полів які треба

export function setLevel(id) {
  const level = heroes.find((heroe) => heroe.id === id);
  refs.heroImage.src = level.img;
  refs.body.style.backgroundImage = `url(${level.bgc})`;
  refs.heroName.textContent = level.nameHero;
  refs.heroName.style.color = level.level.color;
  refs.enemyHp.style.height = `100%`;
  refs.enemyHp.style.backgroundColor = "#32c12c";
  refs.yourHp.style.height = "100%";
  refs.yourHp.style.backgroundColor = "#32c12c";
  refs.infoScore.textContent = 0;
  refs.infoLevel.textContent = `${level.level.name}`;
  refs.infoLevel.style.color = `${level.level.color}`;
}
