import { refs } from "../refs.js";
import { heroes } from "../heroPage/heroes.js";

export function openModalLevel(levelId) {
  refs.backdrop.style.display = "block";
  refs.modalLevel.style.display = "block";
  refs.levelModalText.textContent = heroes[levelId - 1].level.name;
  refs.levelModalText.style.color = heroes[levelId - 1].level.color;
}

export function closeModalLevel() {
  refs.backdrop.style.display = "none";
  refs.modalLevel.style.display = "none";
}
