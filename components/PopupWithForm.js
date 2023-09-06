import Popup from "./Popup.js";
import { nameInput, profileName, jobInput, profileJob, formElement } from "../utils/utils.js";
export default class PopupWithForm extends Popup {
  constructor( submitForm, popupSelector ) {
    super(popupSelector);
    this._submitForm = submitForm;
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
    this.clear();
  }

  _setEventListeners() {
    super._setEventListeners();
    formElement.addEventListener('submit', () => {
      this._getInputValues();
    });
  }

}