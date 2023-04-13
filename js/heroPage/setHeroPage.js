import { heroes } from "./heroes.js";
import { refs } from "../refs.js";

export function setHeroPage(user) {
  refs.body.style.backgroundImage = `url(${heroes[0].bgc})`;
  refs.heroSection.style.display = "flex";
  refs.infoName.textContent = user.name;
  refs.heroImage.src = heroes[0].img;
  refs.heroName.textContent = heroes[0].nameHero;
  refs.heroName.style.color = heroes[0].level.color;
  refs.infoScore.textContent = "0";
  refs.infoAllClick.textContent = "0";
  refs.enemyHp.style.height = "100%";
  refs.enemyHp.style.backgroundColor = "#32c12c";
  refs.yourHp.style.height = "100%";
  refs.yourHp.style.backgroundColor = "#32c12c";
}

export function closeHeroPage() {
  refs.heroSection.style.display = "none";
}
