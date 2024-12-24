import { renderComments, clearComments } from './render-comments.js';
import { isEsc, toggleModalElement } from './utils.js';


const bigPictureModal = document.querySelector('.big-picture');
const closeButtonElement = bigPictureModal.querySelector('.big-picture__cancel');
const bigPictureImageElement = bigPictureModal.querySelector('img');
const likesCountElement = bigPictureModal.querySelector('.likes-count');
const commentsCountElement = bigPictureModal.querySelector('.social__comment-total-count');
const imageDescriptionElement = bigPictureModal.querySelector('.social__caption');


const updateBigPictureDetails = (photo) => {
  likesCountElement.textContent = photo.likes;
  commentsCountElement.textContent = photo.comments.length;
  imageDescriptionElement.textContent = photo.description;
  bigPictureImageElement.src = photo.url;
  bigPictureImageElement.alt = photo.description;
};


const showBigPicture = (photo) => {
  document.addEventListener('keydown', handleKeydownEvent);

  toggleModalElement(bigPictureModal);
  clearComments();
  updateBigPictureDetails(photo);
  renderComments(photo.comments);
};


const hideBigPicture = () => {
  document.removeEventListener('keydown', handleKeydownEvent);

  toggleModalElement(bigPictureModal);
};


function handleKeydownEvent(evt) {
  if (isEsc(evt.keyCode)) {
    evt.preventDefault();

    hideBigPicture();
  }
}


const handleCloseButtonClick = () => {
  hideBigPicture();
};


closeButtonElement.addEventListener('click', handleCloseButtonClick);


export { showBigPicture };
