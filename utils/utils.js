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

const initialCards = [
  {
    name: "Van Duzen County Park, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204900368_338449741209590_80989138182320846_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CRKeJ2Jf9HkAX_6Tr-e&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAgpZ7t1feDs6Ri3VkX7ixItGw3ZVdPja2njeHhwWtCSg&oe=6515C0E0"
  },
  {
    name: "Patricks Point, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/199756227_332197951834769_7505939558248638511_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=rjU8gstFGIwAX9aD-YM&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDQEK21GFb-bTjmdIJH3YSuUoxXzQVkq3cV9rplCu0HHg&oe=6515EA2A"
  },
  {
    name: "Puente de Brooklyn, NY",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/120843978_172123527842213_160369575782773858_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XqtL79fBKa4AX_ryGLN&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCyovbvsXyD15UQ3IZuaEfZwz4YpnXAvJ9nI-W2TXwCMw&oe=6515E72A"
  },
  {
    name: "Monte Shasta, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/285489287_552216763166219_3225914276126028061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=htuAbG7wEEYAX8mJGtD&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAVY3WyY5inYDTbTZhs6dzQ-Tc8LBB8m0gcbQbLxn0cxw&oe=64F2F53F"
  },
  {
    name: "Chinatown San Francisco, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/263354598_439809934406903_5822273761315807936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=nOKdKj_asSQAX-M3_2e&_nc_oc=AQn7tBdTNxTO51aVxUgHRExUnMNxZgMmFDDmLKP-9WNctzWwBK-ucGtD-PcIS1Nqke4&_nc_ht=scontent-sjc3-1.xx&oh=00_AfB9zzWwxqDZQQWPYx5-ynsvTgr516gP5TdR2qHNhDnOrA&oe=64F26D76"
  },
  {
    name: "Joshua Tree, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/337883154_234177629010235_9016534397902803845_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=D1ciYgh27jkAX_FJ0nx&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBI0W8JVle-4M8euddAFc3CEHsTMMyXkGyLR1jhGs3fJw&oe=64F2F324"
  }
];

const validationElements = {
  formSelector: ".popup",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active"
};

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



export { cardsArea, handleEsc, popupImage, handlePopupImageClose, handleLikeCardRemove, popupClickClose, formNewCard, titleInput, urlInput, initialCards, validationElements };