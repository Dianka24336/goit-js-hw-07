import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const createGalleryCards = addGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend',createGalleryCards);

// **Map**
// function addGalleryCards(cards) {
//     return cards.map(({preview, original, description}) => 
//         `
//         <li class="gallery__item">
//             <a class="gallery__link" href="${original}">
//                 <img class="gallery__image" src="${preview}" alt="${description}" />
//             </a>
//         </li>
//         `
//         ).join('');   
// }

// **Reduce**
 function addGalleryCards(cards) {
    return cards.reduce((acc, {preview, original, description}) => 
      acc +
        `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `,
         ''
    )
 };


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250',
 });


