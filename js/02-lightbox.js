import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBox = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
`
  )
  .join("");
galleryBox.innerHTML = markup;

const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
