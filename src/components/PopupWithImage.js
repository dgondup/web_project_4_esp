import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    this._element = super._getPopupTemplate();
    super.open();
    super._setEventListeners();

    this._element.classList.add('popup_content_image_show');
    this._element.querySelector('.popup__content').classList.remove('fadeout');
    this._element.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    this._element.querySelector('.popup__image').src = this._link;
    this._element.querySelector('.popup__title').textContent = this._name;

    return this._element;
  }
}