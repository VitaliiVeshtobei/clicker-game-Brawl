import { refs } from "../refs.js";

export function closeForm() {
  refs.formSection.style.display = "none";
}
export function openForm() {
  refs.formSection.style.display = "block";
  refs.body.style.backgroundImage = `url("../images/background/home.jpeg")`;
}
