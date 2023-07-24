import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const createGalleryCards = addGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend',createGalleryCards);


galleryContainer.addEventListener('click', onGalleryContainerClick);

function addGalleryCards(cards) {
    return cards.map(({preview, original, description}) => 
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>`
        ).join('');   
}

function onGalleryContainerClick(event) {
event.preventDefault()
if(event.target.nodeName !== 'IMG'){
    return;
}

const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="1280" height="auto">`,
    {
        onShow: (instance) => {
            document.addEventListener('keydown', onEscapeCloseClick)
        },
        onClose: (instance) => {
            document.removeEventListener('keydown', onEscapeCloseClick)
        },
        
    }
);
instance.show();

function onEscapeCloseClick(event){
    if (event.code === "Escape") {
        instance.close()
          }
}
}


