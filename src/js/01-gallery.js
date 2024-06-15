import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRootEl = document.querySelector('.gallery');
const galleryHtmlMarkup = galleryItems.map(createImageCardMarkup).join('');

galleryRootEl.insertAdjacentHTML('afterbegin',
    galleryHtmlMarkup);
// galleryRootEl.addEventListener('click', onGalleryClick);

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

// function onGalleryClick(e) {
//   e.preventDefault();
//   console.log(e.target.dataset.source);
//   gallery.open(e.target.dataset.source);
// }

// function openModalImage(src) {
//   //   if (gallery.visible()) {
//   // gallery.close();
//   //   }

//   gallery = basicLightbox.create(
//     `<img src="${src}" width="1280" alt="original">`,
//     {
//       onClose: () => {
//         window.removeEventListener('keydown', onKeyboardClick);
//       },
//     }
//   );
//   //   gallery.show();
//   window.addEventListener('keydown', onKeyboardClick);
// }

// function closeModal() {
//   //   gallery.close();
// }

// function onKeyboardClick(e) {
//   const oldSrcIndex = findCurrentSrcIndex();
//   // gallery.element().querySelector('img').src

//   switch (e?.code) {
//     case 'Escape':
//       closeModal();
//       return;

//     case 'ArrowLeft':
//     case 'ArrowDown':
//       openModalImage(
//         galleryItems[
//           oldSrcIndex === 0 ? galleryItems.length - 1 : oldSrcIndex - 1
//         ].original
//       );
//       break;

//     case 'ArrowRight':
//     case 'ArrowUp':
//     case 'Space':
//       openModalImage(
//         galleryItems[
//           oldSrcIndex === galleryItems.length - 1 ? 0 : oldSrcIndex + 1
//         ].original
//       );
//       break;
//   }
// }

// function findCurrentSrcIndex(src) {
//   for (let i = 0; i < galleryItems.length; i += 1) {
//     if (galleryItems[i].original === src) return i;
//   }
//   return;
// }

(function () {
    let $gallery = new SimpleLightBox(
        '.gallery a',
        {
            captionDelay: 1250,
            captionType: 'attr',
            captionsData: 'alt',
            captionPosition: 'bottom',
            overlayOpacity: 0.8,
        });
})();