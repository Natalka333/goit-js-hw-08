// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
galleryEl.classList.add();
function makeGalleryItemsMarkup(items) {
  return items
    .map(({ original, preview, description }) => {
      return `
		<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join('');
}
galleryEl.innerHTML = makeGalleryItemsMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
// console.log(galleryItems);
