import { refs } from "../refs.js";

export function setScore() {
  let countScore = +refs.infoScore.textContent;
  refs.infoScore.textContent = countScore + 1;
  let allClicks = +refs.infoAllClick.textContent;
  refs.infoAllClick.textContent = allClicks + 1;
}
