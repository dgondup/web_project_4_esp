const formElementName = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonCloseName = document.querySelector('.popup__close-button');
const buttonSave = formElementName.querySelector('.popup__button');
const nameInput = formElementName.querySelector('#field1');
const jobInput = formElementName.querySelector('#field2');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

function openPopupName () {
  formElementName.querySelector('.popup__container').classList.remove('fadeout');
  formElementName.classList.add('popup__opened');
};

function closePopupName () {
  formElementName.querySelector('.popup__container').classList.add('fadeout');
  setTimeout(() => {
    formElementName.classList.remove('popup__opened');
  }, 500);
};

buttonEdit.addEventListener('click', openPopupName);
buttonCloseName.addEventListener('click', closePopupName);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  profileName.textContent = nameValue;
  const jobValue = jobInput.value;
  profileJob.textContent = jobValue;
};

formElementName.addEventListener('submit', handleProfileFormSubmit);
buttonSave.addEventListener('click', closePopupName);

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const formElementPlace = document.querySelector('.popup_place');
const buttonAddPlace = document.querySelector('.profile__button-add');
const buttonClosePlace = formElementPlace.querySelector('.popup__close-button');

function openPopupPlace () {
  formElementPlace.querySelector('.popup__container').classList.remove('fadeout');
  formElementPlace.classList.add('popup__opened');
};

function closePopupPlace () {
  formElementPlace.querySelector('.popup__container').classList.add('fadeout');
  setTimeout(() => {
    formElementPlace.classList.remove('popup__opened');
  }, 500);
};

buttonAddPlace.addEventListener('click', openPopupPlace);
buttonClosePlace.addEventListener('click', closePopupPlace);

const cardsArea = document.querySelector('.elements');
const cardTemplate = document.querySelector('.template-card').content.querySelector('.card');
const popupImage = document.querySelector('.popup_content_image');

function createCard(item) {
  const node = cardTemplate.cloneNode(true);
  const cardImage = node.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  const cardTitle = node.querySelector('.card__title');
  cardTitle.textContent = item.name;
    cardImage.addEventListener('click', evt => {
    popupImage.classList.add('popup__opened');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    const formPopupCloseButton = popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    formPopupCloseButton.alt = 'Close';
    popupImage.querySelector('.popup__image').src = item.link;
    popupImage.querySelector('.popup__title').textContent = item.name;
    popupImage.querySelector('.popup__close-button').addEventListener('click', evt => {
      evt.target.closest('.popup__content').classList.add('fadeout');
      setTimeout (() => {
        popupImage.classList.remove('popup__opened');
      }, 500);
    });
  });
  node.querySelector('.card__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('.card__button-like_checked');
  });
  node.querySelector('.card__button-remove').addEventListener('click', evt => {
    evt.target.closest('.card').classList.add('fadeout');
    setTimeout(() => {
      evt.target.closest('.card').remove();
    }, 500);
  });

  return node;
};

initialCards.forEach(item => {
  const nodeCard = createCard(item);
  cardsArea.append(nodeCard);
});

const titleInput = formElementPlace.querySelector('#field-title');
const urlInput = formElementPlace.querySelector('#field-url');

const newCard = [
  {
    name: "",
    link: ""
  }
];

function createNewCard() {
  const node = cardTemplate.cloneNode(true);
  const cardImage = node.querySelector('.card__image');
  const cardTitle = node.querySelector('.card__title');
  const newCardTitle = titleInput.value;
  cardTitle.textContent = newCardTitle;
  const newCardUrl = urlInput.value;
  cardImage.src = newCardUrl;
  cardImage.alt = newCardTitle;
    cardImage.addEventListener('click', evt => {
    popupImage.classList.add('popup__opened');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    const formPopupCloseButton = popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    formPopupCloseButton.alt = 'Close';
    popupImage.querySelector('.popup__image').src = newCardUrl;
    popupImage.querySelector('.popup__title').textContent = newCardTitle;
    popupImage.querySelector('.popup__close-button').addEventListener('click', evt => {
      evt.target.closest('.popup__content').classList.add('fadeout');
      setTimeout (() => {
        popupImage.classList.remove('popup__opened');
      }, 500);
    });
  });
  node.querySelector('.card__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('.card__button-like_checked');
  });
  node.querySelector('.card__button-remove').addEventListener('click', evt => {
    evt.target.closest('.card').classList.add('fadeout');
    setTimeout(() => {
      evt.target.closest('.card').remove();
    }, 500);
  });

  return node;
};

formElementPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();
  newCard.forEach(() => {
    const nodeNewCard = createNewCard();
    cardsArea.prepend(nodeNewCard);
  });
});

const placeButtonSave = formElementPlace.querySelector('.popup__button');
placeButtonSave.addEventListener('click', closePopupPlace);
