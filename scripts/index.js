const formElement = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAddPlace = document.querySelector('.profile__button-add');
const buttonClose = document.querySelector('.popup__close-button');
const buttonSave = document.querySelector('.popup__button');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#ocupacion-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const cardsArea = document.querySelector('.elements');
const cardTemplate = document.querySelector('.template-card').content.querySelector('.card');
const popupImage = document.querySelector('.popup_content_image');
const titleInput = formElement.querySelector('#title-input');
const urlInput = formElement.querySelector('#url-input');

const handleOpenPopup = (evt) => {
  const popupSelector = evt.target.getAttribute('.popup_place');
  const formSelected = document.querySelector(popupSelector);
  formSelected.querySelector('.popup__container').classList.remove('fadeout');
  formSelected.classList.add('popup__opened');
  document.addEventListener('keydown', handleEsc);
};

function closePopup () {
  formElement.querySelector('.popup__container').classList.add('fadeout');
  setTimeout(() => {
    formElement.classList.remove('popup__opened');
  }, 500);
};

buttonEdit.addEventListener('click', handleOpenPopup);
buttonAddPlace.addEventListener('click', handleOpenPopup);
buttonClose.addEventListener('click', closePopup);
buttonSave.addEventListener('click', closePopup);

function handleProfileFormSubmit(evt) {
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
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/285489287_552216763166219_3225914276126028061_n.jpg?stp=c34.0.206.206a_dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Rotr43GaueMAX-ON0dI&_nc_ht=scontent-sjc3-1.xx&oh=00_AfC3UACVsqWd4kPoP9xa0I9-J0eT4Q5ivhiZ2UOp8We1KQ&oe=644CD83F"
  },
  {
    name: "Chinatown San Francisco, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/263354598_439809934406903_5822273761315807936_n.jpg?stp=c0.17.206.206a_dst-jpg_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=hWs8Al4LOTcAX8alDJQ&_nc_oc=AQlwMT5D-8B7nYpsBJFXcb5cSeanlQW73Sf9tXS3clXlrD9Fx2Jxe4ItBgnRIvoX3AY&_nc_ht=scontent-sjc3-1.xx&oh=00_AfA4W7mLfU4xXSF1zZ7c7ZKgS06AjfL0NZx7Z_8fD-DfYQ&oe=644E4AB6"
  },
  {
    name: "Joshua Tree, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/337883154_234177629010235_9016534397902803845_n.jpg?stp=c0.23.206.206a_cp6_dst-jpg_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_ohc=P467zfE96yoAX89U26w&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCEhgsch3AsXVHtegPM8X8ol8LQRRTiT9iNOQxwHsYriQ&oe=644CD624"
  }
];



function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  const cardTitle = card.querySelector('.card__title');
  cardTitle.textContent = item.name;
  cardImage.addEventListener('click', evt => {
    document.addEventListener('keydown', handleEsc);
    popupImage.classList.add('popup__opened');
    popupImage.classList.add('popup_content_image_show');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    const formPopupCloseButton = popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    formPopupCloseButton.alt = 'Close';
    popupImage.querySelector('.popup__image').src = item.link;
    popupImage.querySelector('.popup__title').textContent = item.name;
    popupImage.querySelector('.popup__close-button').addEventListener('click', evt => {
      evt.target.closest('.popup__content').classList.add('fadeout');
      setTimeout (() => {
        popupImage.classList.remove('popup__opened');
        popupImage.classList.remove('popup_content_image_show')
      }, 500);
    });
  });
  card.querySelector('.card__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('.card__button-like_checked');
  });
  card.querySelector('.card__button-remove').addEventListener('click', evt => {
    evt.target.closest('.card').classList.add('fadeout');
    setTimeout(() => {
      evt.target.closest('.card').remove();
    }, 500);
  });
  return card;
};

initialCards.forEach((item) => {
  const nodeCard = createCard(item);
  cardsArea.append(nodeCard);
});

function createNewCard() {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const newCardTitle = titleInput.value;
  cardTitle.textContent = newCardTitle;
  const newCardUrl = urlInput.value;
  cardImage.src = newCardUrl;
  cardImage.alt = newCardTitle;
  cardImage.addEventListener('click', evt => {
    document.addEventListener('keydown', handleEsc);
    popupImage.classList.add('popup__opened');
    popupImage.classList.add('popup_content_image_show');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    const formPopupCloseButton = popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    formPopupCloseButton.alt = 'Close';
    popupImage.querySelector('.popup__image').src = newCardUrl;
    popupImage.querySelector('.popup__title').textContent = newCardTitle;
    popupImage.querySelector('.popup__close-button').addEventListener('click', evt => {
      evt.target.closest('.popup__content').classList.add('fadeout');
      setTimeout (() => {
        popupImage.classList.remove('popup__opened');
        popupImage.classList.remove('popup_content_image_show');
      }, 500);
    });
  });
  card.querySelector('.card__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('.card__button-like_checked');
  });
  card.querySelector('.card__button-remove').addEventListener('click', evt => {
    evt.target.closest('.card').classList.add('fadeout');
    setTimeout(() => {
      evt.target.closest('.card').remove();
    }, 500);
  });
  return card;
};

const formNewCard = document.forms.placeForm;

formNewCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  newCard.forEach(() => {
    const nodeNewCard = createNewCard();
    cardsArea.prepend(nodeNewCard);
  });
});

const placeButtonSave = formNewCard.querySelector('.popup__button');
placeButtonSave.addEventListener('click', closePopup);

const handleEsc = (evt) => {
  const popup = document.querySelector('.popup__opened');
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

function popupOutsideClose (popup) {
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