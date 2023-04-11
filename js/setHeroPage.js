import { heroes } from "../js/heroes.js";
import { refs } from "../js/refs.js";

export function setHeroPage(data) {
  refs.body.style.backgroundImage = `url("../images/background/iapqmzd3zu721.jpg")`;
  refs.heroSection.style.display = "flex";
  refs.infoName.textContent = data.name;
  refs.heroImage.src = heroes[0].img;
}
