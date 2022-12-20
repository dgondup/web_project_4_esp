let formElement = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClose = document.querySelector('.popup__close-button');
let buttonSave = formElement.querySelector('popup__button');

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
  let nameInput = formElement.querySelector('#field1');
  nameInput.getAttribute('value') = value;

  //let jobInput = formElement.querySelector('#field2');
}