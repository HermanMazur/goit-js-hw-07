import { galleryItems } from "./gallery-items.js";
// Change code below this line


const listGalleryItems = document.querySelector('.gallery');

const markup = createGalleyItems(galleryItems);

listGalleryItems.insertAdjacentHTML('afterbegin', markup);


function createGalleyItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        `
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
</div>
    `;
    })
        .join("");

}

