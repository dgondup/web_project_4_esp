let formElement = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__close-button');
let buttonSave = formElement.querySelector('.popup__button');
let nameInput = formElement.querySelector('#field1');
let profileName = document.querySelector('.profile__name');

function openPopup() {
  formElement.classList.add('popup__opened');
}

buttonEdit.addEventListener('click', openPopup);

function closePopup() {
  formElement.classList.remove('popup__opened');
}

buttonClose.addEventListener('click', closePopup);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInput.addEventListener(function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
})
}
  //nameInput.getAttribute('value') = value;

  //let jobInput = formElement.querySelector('#field2');

  formElement.addEventListener('submit', handleProfileFormSubmit);