import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRootEl = document.querySelector('.gallery');
const galleryHtmlMarkup = galleryItems.map(createImageCardMarkup).join('');

galleryRootEl.insertAdjacentHTML('afterbegin', galleryHtmlMarkup);

function createImageCardMarkup({ preview, original, description } = {}) {
  return `
			<li class="gallery__item">
				<a class="gallery__link" href="${original}">
					<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
					/>
				</a>
			</li>`;
}

(function () {
  let $gallery = new SimpleLightBox('.gallery a', {
    captionDelay: 1250,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    overlayOpacity: 0.8,
  });
})();
