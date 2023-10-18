import Popup from "./Popup.js";
import imageButtonClose from "../images/vectores/Close-Icon.svg";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    super.setEventListeners();
  }

  open(item) {
    super.open(item);
    this._popupSelector.classList.add('popup_content_image_show');
    this._popupSelector.querySelector('.popup__content').classList.remove('fadeout');
    document.getElementById("popup-image-close").src = imageButtonClose
    this._popupSelector.querySelector('.popup__image').src = item.link;
    this._popupSelector.querySelector('.popup__title').textContent = item.name;
  }
}