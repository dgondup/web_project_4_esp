import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(submitForm, {formCallBack}, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formCallback = formCallBack;
    this._setEventListeners();
  }

  _getInputValues() {
    const values = {};
    Array.from(this._submitForm.querySelectorAll('.popup__input')).forEach((item) => {
      values[item.name] = item.value;
    });
    return values;
  }

  open() {
    super.open();
    this._popupSelector.querySelector('.popup__container').classList.remove('fadeout');
  }

  close() {
    super.close();
  }

  _setEventListeners() {
    super.setEventListeners();
    if (this._popupSelector === document.querySelector(".popup-name")) {
      this._submitForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const formData = this._getInputValues();
        this._formCallback(formData);
        this.close();
      });
    } else {
      this._submitForm.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._formCallback();
        this.close();
      });
    }
  }
}