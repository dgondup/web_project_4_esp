let formElement = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__close-button');
let buttonSave = formElement.querySelector('.popup__button');
let nameInput = formElement.querySelector('#field1');
let jobInput = formElement.querySelector('#field2');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');
const buttonLike = document.querySelector('.card__button');

function openPopup() {
  formElement.classList.add('popup__opened');
};

buttonEdit.addEventListener('click', openPopup);

function closePopup() {
  formElement.classList.remove('popup__opened');
};

buttonClose.addEventListener('click', closePopup);

// function buttonLikeClick() {
//   buttonLike.classList.toggle('card__button_active');
// };

// buttonLike.addEventListener('click', buttonLikeClick);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  profileName.textContent = nameValue;
  const jobValue = jobInput.value;
  profileJob.textContent = jobValue;
};

  formElement.addEventListener('submit', handleProfileFormSubmit);

buttonSave.addEventListener('click', closePopup);
