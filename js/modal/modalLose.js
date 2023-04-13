import { refs } from "../refs.js";

export function openModalLose() {
  refs.backdrop.style.display = "block";
  refs.modalLose.style.display = "block";
}

export function closeModalLose() {
  refs.backdrop.style.display = "none";
  refs.modalLose.style.display = "none";
}
