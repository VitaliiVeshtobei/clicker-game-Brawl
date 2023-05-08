import { refs } from "../refs.js";
import { heroes } from "../heroPage/heroes.js";

export function openModalFinish() {
  refs.backdrop.style.display = "block";
  refs.modalLevel.style.display = "none";
  refs.modalFinish.style.display = "block";
  const ul = refs.listHero;
  const fragment = document.createDocumentFragment();
  heroes.forEach((heroe) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.classList = "modal-item-image";
    img.src = heroe.img;
    img.alt = heroe.nameHero;
    img.classList = "modal-image";
    li.appendChild(img);
    fragment.appendChild(li);
  });
  ul.appendChild(fragment);
}

export function closeModalFinish() {
  refs.backdrop.style.display = "none";
  refs.modalFinish.style.display = "none";
  const ul = refs.listHero;
  console.log(ul);
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}
