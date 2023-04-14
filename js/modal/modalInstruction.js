import { refs } from "../refs.js";

export function openModalInstruction() {
  refs.backdrop.style.display = "block";
  refs.modalInstruction.style.display = "block";
}
export function closeModalInstruction() {
  refs.backdrop.style.display = "none";
  refs.modalInstruction.style.display = "none";
}
