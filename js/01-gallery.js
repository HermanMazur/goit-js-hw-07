import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryItems = document.querySelector(".gallery");
const markup = createGalleryMarkup(galleryItems);

listGalleryItems.insertAdjacentHTML("afterbegin", markup);
listGalleryItems.addEventListener('click', onGalleryItemsClick);

function createGalleryMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
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

let instance;

function onGalleryItemsClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return;
    } 
    instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="600">`,
        {
        onShow,
        }
    );
    
    instance.show();

}

function onShow() {
    window.addEventListener("keydown", onEscPress);
}

function onClose() {
    window.removeEventListener("keydown", onEscPress);
}

function onEscPress(evt) {
    if (evt.code === "Escape") {
        instance.close();
        onClose();
    }
}
