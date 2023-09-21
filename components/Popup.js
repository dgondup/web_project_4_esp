import buttonsClose from "./utils.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add('popup__opened');
  }

  close() {
    this._popupSelector.querySelector('.popup__container').classList.add('fadeout');
    setTimeout (() => {
      this._popupSelector.classList.remove('popup__opened');
      this._popupSelector.classList.remove('popup_content_image_show')
    }, 500);
  }

  _handleEscClose(evt) {
    const popupOpened = document.querySelector('.popup__opened');
    if (evt.key === 'Escape') {
      evt.preventDefault();
      popupOpened.querySelector('.popup-fadeout').classList.add('fadeout');
      document.removeEventListener('keydown', _handleEscClose());
      setTimeout(() => {
        popupOpened.classList.remove('popup__opened');
          popupOpened.classList.remove('popup_content_image_show');
        }, 500);
      };

    }

    setEventListeners() {
      buttonsClose.addEventListener('click', () => {
        this.close();
      });
      document.addEventListener('keydown', () => {
        this._handleEscClose();
      });

    }
  }