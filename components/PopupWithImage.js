import Popup from "./Popup.js";
import { popupImage } from "../utils/utils.js";

export default class PopupWithImage extends Popup {
  constructor( popupSelector) {
    super(popupSelector);
  }

  open() {
    super.open();
    popupImage.classList.add('popup_content_image_show');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    popupImage.querySelector('.popup__image').src = this._link;
    popupImage.querySelector('.popup__title').textContent = this._name;
  }
}