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
    this._popupSelector.querySelector('.popup__container').classList.remove('fadeout');
  }

  close() {
    super.close();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._submitForm.addEventListeners("submit", () => {
      evt.preventDefault();
      this._formCallback(this._getInputValues());
      this.close();
    });

    // this._submitForm.querySelector('.popup__close-button').addEventListeners("click", () => {
    //   evt.preventDefault();
    //   this.close();
    //   console.log(click);
    // })
  }
}