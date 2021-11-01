import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryBox = document.querySelector(".gallery");
galleryBox.addEventListener("click", onImageOpen);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

galleryBox.innerHTML = markup;

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: () => {
    window.addEventListener("keydown", onImageClose);
  },
  onClose: () => {
    window.removeEventListener("keydown", onImageClose);
  },
});

function onImageOpen(event) {
  event.preventDefault();
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

function onImageClose({ key }) {
  if (key === "Escape") {
    instance.close();
    return;
  }
}
