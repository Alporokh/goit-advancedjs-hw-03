import SimpleLightboxLib from 'simplelightbox';
const SimpleLightbox = SimpleLightboxLib.default || SimpleLightboxLib;
import 'simplelightbox/dist/simple-lightbox.min.css';
import { ring } from 'ldrs';
ring.register();

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader-wrapper');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
        </a>
        <ul class="info">
          <li class="info-item">
            <b>Likes</b>
            ${likes}
          </li>
          <li class="info-item">
            <b>Views</b>
            ${views}
          </li>
          <li class="info-item">
            <b>Comments</b>
            ${comments}
          </li>
          <li class="info-item">
            <b>Downloads</b>
            ${downloads}
          </li>
        </ul>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
