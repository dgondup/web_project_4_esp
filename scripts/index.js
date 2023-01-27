const formElementName = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonCloseName = document.querySelector('.popup__close-button');
const buttonSave = formElementName.querySelector('.popup__button');
const nameInput = formElementName.querySelector('#field1');
const jobInput = formElementName.querySelector('#field2');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

function togglePopupName() {
  formElementName.classList.toggle('popup__opened');
};

buttonEdit.addEventListener('click', togglePopupName);
buttonCloseName.addEventListener('click', togglePopupName);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  profileName.textContent = nameValue;
  const jobValue = jobInput.value;
  profileJob.textContent = jobValue;
};

formElementName.addEventListener('submit', handleProfileFormSubmit);

buttonSave.addEventListener('click', togglePopupName);

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

const buttonLike = document.querySelector('.card__button-like');

const formElementPlace = document.querySelector('.popup_place');
const buttonAddPlace = document.querySelector('.profile__button-add');
const buttonClosePlace = formElementPlace.querySelector('.popup__close-button');
const titleInput = formElementPlace.querySelector('#field-title');
const urlInput = formElementPlace.querySelector('#field-url');

function togglePopupPlace () {
  formElementPlace.classList.toggle('popup__opened');
};

buttonAddPlace.addEventListener('click', togglePopupPlace);
buttonClosePlace.addEventListener('click', togglePopupPlace);

const cardsArea = document.querySelector('.elements');
const cardTemplate = document.querySelector('.template-card').content.querySelector('.card');
const popupImage = document.querySelector('.popup_content_image');

function createCard(item) {
  const node = cardTemplate.cloneNode(true);
  let cardImage = node.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  node.querySelector('.card__title').textContent = item.name;
  cardImage.addEventListener('click', evt => {
    popupImage.classList.add('popup__opened');
    const formPopupCloseButton = popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    formPopupCloseButton.alt = 'Close';
    popupImage.querySelector('.popup__image').src = item.link;
    popupImage.querySelector('.popup__title').textContent = item.name;
    popupImage.querySelector('.popup__close-button').addEventListener('click', () => {
    popupImage.classList.remove('popup__opened');
    });
  });
node.querySelector('.card__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('.card__button-like_checked');
});
node.querySelector('.card__button-remove').addEventListener('click', evt => {
  evt.target.closest('.card').remove();
});

  return node;
}

initialCards.forEach(item => {
  const nodeCard = createCard(item);
  cardsArea.append(nodeCard);
});

const newCardName = document.querySelector('#field-title');
const newCardLink = document.querySelector('#field-url');

const newCard = [
  {
    name: "",
    link: ""
  }
]

function handleNewCardFormSubmit (evt) {
  evt.preventDefault();
  const createNewCard = createCard(item);

  const newCardTitle = newCardName.value;
  cardTemplate.querySelector('.card__title').textContent = newCardTitle;
  const newCardUrl = newCardLink.value;
  cardTemplate.querySelector('.card__image').src = newCardUrl;
  formElementPlace.addEventListener('submit', () => {
  cardsArea.prepend(createNewCard);
});
}

