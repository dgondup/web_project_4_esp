import Popup from "./Popup.js";
import { nameInput, jobInput, profileName, profileJob } from "./utils.js";

export default class PopupWithForm extends Popup {
  constructor(submitForm, popupSelector) {
    this._submitForm = submitForm;
    this._popupSelector = popupSelector;
  }

  _getInputValues() {
    const nameValue = nameInput.value;
    profileName.textContent = nameValue;
    const jobValue = jobInput.value;
    profileJob.textContent = jobValue;
  }

  open() {
    super.open();
    const popupSelector = evt.target.getAttribute('data-popup');
    const formSelected = document.querySelector(popupSelector);
    formSelected.querySelector('.popup__container').classList.remove('fadeout');
  }

  close() {
    super.close();
    const buttonSelector = evt.target.getAttribute('data-button-close');
    const formClose = document.querySelector(buttonSelector)
    setTimeout(() => {
      formClose.classList.remove('popup__opened');
    }, 500);
  }

  _setEventListeners() {
    super._setEventListeners();
    this._submitForm.addEventListeners("submit", () => {
      evt.preventDefault();
      this._getInputValues();
      this.close();
    });
  }
}