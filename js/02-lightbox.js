import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGalleryItems = document.querySelector(".gallery");
const markup = createGalleryMarkup(galleryItems);

listGalleryItems.insertAdjacentHTML("afterbegin", markup);

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li>
            <a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
        }).join("");
}

const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });