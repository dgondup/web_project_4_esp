import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(submitForm, formCallBack, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formCallback = formCallBack;
  }

  _getInputValues() {
    const values = {};
    Array.from(this._submitForm.querySelector('.popup__input')).forEach((item) => {
      values[item.name] = item.value;
    });
    return values;
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
      this._formCallback(this._getInputValues());
      this.close();
    });
  }
}