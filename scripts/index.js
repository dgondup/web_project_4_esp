const formElement = document.querySelector('.popup');
const buttonOpenFormEditName = document.querySelector('.profile__button-edit');
const buttonOpenFormAddCard = document.querySelector('.profile__button-add');
const buttonsClose = document.querySelectorAll('.popup__close-button');
const buttonsSave = document.querySelectorAll('.popup__button');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#ocupacion-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const cardsArea = document.querySelector('.elements');
const cardTemplate = document.querySelector('.template-card').content.querySelector('.card');
const popupImage = document.querySelector('.popup_content_image');
const titleInput = document.querySelector('#title-input');
const urlInput = document.querySelector('#url-input');

const handleOpenPopup = (evt) => {
  const popupSelector = evt.target.getAttribute('data-popup');
  const formSelected = document.querySelector(popupSelector);
  formSelected.querySelector('.popup__container').classList.remove('fadeout');
  formSelected.classList.add('popup__opened');
  document.addEventListener('keydown', handleEsc);
};

const closePopup = (evt) => {
  const buttonSelector = evt.target.getAttribute('data-button-close');
  const formClose = document.querySelector(buttonSelector)
  formClose.querySelector('.popup__container').classList.add('fadeout');
  setTimeout(() => {
    formClose.classList.remove('popup__opened');
  }, 500);
};

buttonOpenFormEditName.addEventListener('click', handleOpenPopup);
buttonOpenFormAddCard.addEventListener('click', handleOpenPopup);

buttonsClose.forEach(buttonClose => {
  buttonClose.addEventListener('click', closePopup);
});

buttonsSave.forEach(buttonSave => {
  buttonSave.addEventListener('click', closePopup);
});

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  const nameValue = nameInput.value;
  profileName.textContent = nameValue;
  const jobValue = jobInput.value;
  profileJob.textContent = jobValue;
};

formElement.addEventListener('submit', handleProfileFormSubmit);

const initialCards = [
  {
    name: "Van Duzen County Park, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204900368_338449741209590_80989138182320846_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=z1qjHaXYPWgAX-MDZDn&_nc_ht=scontent-sjc3-1.xx&oh=00_AfApbpNX7sVX94pvcXftMC_hnGZ78SqxlFICgETJjTUv6Q&oe=64658860"
  },
  {
    name: "Patricks Point, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/199756227_332197951834769_7505939558248638511_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=nOyCowdpfVMAX8-PxcY&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDMbo5d1YByjTNHojvf9IEpB9pH4m079lrgJk19dYO8dw&oe=6465796A"
  },
  {
    name: "Puente de Brooklyn, NY",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/120843978_172123527842213_160369575782773858_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=X-TGRXkWYlkAX9i9wkx&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAVCFdVrstz8Aq0uct3u5EwzZ3txk2WNWypi6pxDUi_gw&oe=6465766A"
  },
  {
    name: "Monte Shasta, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/285489287_552216763166219_3225914276126028061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=wNGg00dadc8AX88hZPN&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCTzRlmj0QReqT5_RKoIS_F8xEuo51hJ_h2Zx4-mptzEA&oe=6456BB7F"
  },
  {
    name: "Chinatown San Francisco, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/263354598_439809934406903_5822273761315807936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=U4DxH5VRJogAX9uAcpr&_nc_oc=AQnOMRv_hFXx4b_gT8pCF-mxwlFwlnuBzgJgrDWKXhQ2l0dOBT9SmjCJBxOWshZ-74I&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCT29raLgJC1w1hyFqM0bU_C9KRk_8lApO2pwqnOTFL-Q&oe=645633B6"
  },
  {
    name: "Joshua Tree, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/337883154_234177629010235_9016534397902803845_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=dNbCYbPUBjoAX8nL-Yn&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDs7CAyb9h4cawa5P-WYXl59Agxny_lrbKX9wZChVwf7g&oe=6456B964"
  }
];


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

const handlePopupImageClose = (evt) => {
  evt.target.closest('.popup__content').classList.add('fadeout');
  setTimeout (() => {
    popupImage.classList.remove('popup__opened');
    popupImage.classList.remove('popup_content_image_show')
  }, 500);
};

const createCard = (item) => {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  const cardTitle = card.querySelector('.card__title');
  cardTitle.textContent = item.name;
  cardImage.addEventListener('click', () => {
    document.addEventListener('keydown', handleEsc);
    popupImage.classList.add('popup__opened');
    popupImage.classList.add('popup_content_image_show');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    const formPopupCloseButton = popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    formPopupCloseButton.alt = 'Close';
    popupImage.querySelector('.popup__image').src = item.link;
    popupImage.querySelector('.popup__title').textContent = item.name;
    popupImage.querySelector('.popup__close-button').addEventListener('click', handlePopupImageClose);
  });
  cardsArea.addEventListener('click', handleLikeCardRemove);
  return card;
};

initialCards.forEach((item) => {
  const nodeCard = createCard(item);
  cardsArea.append(nodeCard);
});

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = [{name: `${titleInput.value}`, link: `${urlInput.value}`}];
  newCard.forEach((item) => {
    const nodeNewCard = createCard(item);
    cardsArea.prepend(nodeNewCard);
  });
};

const formNewCard = document.forms.placeForm;
formNewCard.addEventListener('submit', handleCardFormSubmit);

const handleEsc = (evt) => {
  const popup = document.querySelector('.popup__opened');

  //se que no tengo que dejar comentarios, pero el error de popup is null que me dice por apretar esc
  //cuando no hay popups abiertos donde lo veo? probé ya abriendo el sitio en firefox, chrome y safari, y en ningun momento
  //se me muestra dicho error.

  if (evt.key === 'Escape') {
    evt.preventDefault();
    popup.querySelector('.popup-fadeout').classList.add('fadeout');
    document.removeEventListener('keydown', handleEsc);
    setTimeout(() => {
      popup.classList.remove('popup__opened');
      popup.classList.remove('popup_content_image_show');
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

popupClickClose();