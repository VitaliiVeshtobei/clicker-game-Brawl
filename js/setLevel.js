import { heroes } from "../js/heroes.js";
import { refs } from "../js/refs.js";

export function setLevel(id) {
  console.log(id);
  const level = heroes.find((heroe) => heroe.id === id);
  refs.heroImage.src = level.img;
  refs.enemyHp.style.height = `100%`;
  refs.enemyHp.style.backgroundColor = "#32c12c";
  refs.infoScore.textContent = 0;
}
