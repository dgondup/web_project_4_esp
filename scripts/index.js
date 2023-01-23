const formElementName = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonCloseName = document.querySelector('.popup__close-button');
const buttonSave = formElementName.querySelector('.popup__button');
const nameInput = formElementName.querySelector('#field1');
const jobInput = formElementName.querySelector('#field2');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

const buttonLike = document.querySelector('.card__button');

const formElementPlace = document.querySelector('.popup_place');
const buttonAddPlace = document.querySelector('.profile__button-add');
const buttonClosePlace = formElementPlace.querySelector('.popup__close-button');
const titleInput = formElementPlace.querySelector('#field-title');
const urlInput = formElementPlace.querySelector('#field-url');
const placeTitle = document.querySelector('.card__title');
//const placeUrl = ;

function openPopupName() {
  formElementName.classList.add('popup__opened');
};

buttonEdit.addEventListener('click', openPopupName);

function closePopupName() {
  formElementName.classList.remove('popup__opened');
};

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

buttonAddPlace.addEventListener('click', () => {
  formElementPlace.classList.add('popup__opened');
});

buttonClosePlace.addEventListener('click', () => {
  formElementPlace.classList.remove('popup__opened');
});

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