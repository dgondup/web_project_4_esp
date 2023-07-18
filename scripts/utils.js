const cardsArea = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_content_image');
const buttonOpenFormEditName = document.querySelector('.profile__button-edit');
const buttonOpenFormAddCard = document.querySelector('.profile__button-add');
const buttonsClose = document.querySelectorAll('.popup__close-button');
const buttonsSave = document.querySelectorAll('.popup__button');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#ocupacion-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup');
const formNewCard = document.forms.placeForm;
const titleInput = document.querySelector('#title-input');
const urlInput = document.querySelector('#url-input');

const handleOpenFormPopup = (evt) => {
  const popupSelector = evt.target.getAttribute('data-popup');
  const formSelected = document.querySelector(popupSelector);
  formSelected.querySelector('.popup__container').classList.remove('fadeout');
  formSelected.classList.add('popup__opened');
  document.addEventListener('keydown', handleEsc);
};

buttonOpenFormEditName.addEventListener('click', handleOpenFormPopup);
buttonOpenFormAddCard.addEventListener('click', handleOpenFormPopup);

const closeFormPopup = (evt) => {
  const buttonSelector = evt.target.getAttribute('data-button-close');
  const formClose = document.querySelector(buttonSelector)
  formClose.querySelector('.popup__container').classList.add('fadeout');
  setTimeout(() => {
    formClose.classList.remove('popup__opened');
  }, 500);
};

buttonsClose.forEach(buttonClose => {
  buttonClose.addEventListener('click', closeFormPopup);
});

buttonsSave.forEach(buttonSave => {
  buttonSave.addEventListener('click', closeFormPopup);
});

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  const nameValue = nameInput.value;
  profileName.textContent = nameValue;
  const jobValue = jobInput.value;
  profileJob.textContent = jobValue;
};

formElement.addEventListener('submit', handleProfileFormSubmit);

const handleEsc = (evt) => {
  const popupOpened = document.querySelector('.popup__opened');
  if (evt.key === 'Escape') {
    evt.preventDefault();
    popupOpened.querySelector('.popup-fadeout').classList.add('fadeout');
    document.removeEventListener('keydown', handleEsc);
    setTimeout(() => {
      popupOpened.classList.remove('popup__opened');
      popupOpened.classList.remove('popup_content_image_show');
    }, 500);
  };
};

const handlePopupImageClose = (evt) => {
  evt.target.closest('.popup__content').classList.add('fadeout');
  setTimeout (() => {
    popupImage.classList.remove('popup__opened');
    popupImage.classList.remove('popup_content_image_show')
  }, 500);
};

const handleLikeCardRemove = (e) => {
  const target = e.target;
  if (target.classList.contains('.card__button-like')) {
    target.classList.toggle('.card__button-like_checked');
  } else if (target.classList.contains('card__button-remove')) {
    target.closest('.card').classList.add('fadeout');
    setTimeout(() => {
      target.closest('.card').remove();
    }, 500);
  };
};

const popupOutsideClose = (popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target == popup) {
      popup.querySelector('.popup-fadeout').classList.add('fadeout');
      setTimeout(() => {
        popup.classList.remove('popup__opened');
        popup.classList.remove('popup_content_image_show');
        }, 500);
      }
    });
  };

const popupClickClose = () => {
    const popupOpened = Array.from(document.querySelectorAll('.popup'));
    popupOpened.forEach((popupContainer) => {
      popupOutsideClose(popupContainer);
    });
  };



export { cardsArea, handleEsc, popupImage, handlePopupImageClose, handleLikeCardRemove, popupClickClose, formNewCard, titleInput, urlInput };