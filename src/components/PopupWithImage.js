import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    super.setEventListeners();
  }

  open() {
    super.open();
    this._popupSelector.classList.add('popup_content_image_show');
    this._popupSelector.querySelector('.popup__content').classList.remove('fadeout');
    this._popupSelector.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    this._popupSelector.querySelector('.popup__image').src = this._link;
    this._popupSelector.querySelector('.popup__title').textContent = this._name;
  }
}