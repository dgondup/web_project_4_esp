import { buttonsClose } from '../utils/utils.js';

export default class Popup {
  constructor( popupSelector ){
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add('popup__opened');
    document.addEventListener('keydown', this._handleEscClose());
  }

  close() {
      const buttonSelector = evt.target.getAttribute('data-button-close');
      const popupClose = document.querySelector(buttonSelector)
      popupClose.querySelector('.popup_content_selector').classList.add('fadeout');
      setTimeout(() => {
        popupClose.classList.remove('popup__opened');
        popupClose.classList.remove('popup_content_image_show');
      }, 500);

    const popupOutsideClose = (evt) => {
      if (evt.target == this._element) {
        this._element.querySelector('.popup-fadeout').classList.add('fadeout');
        setTimeout(() => {
          this._element.classList.remove('popup__opened');
          this._element.classList.remove('popup_content_image_show');
        }, 500);
      }
    };

    const popupClickClose = () => {
      const popupOpened = Array.from(document.querySelectorAll('.popup'));
      popupOpened.forEach((popupContainer) => {
        popupOutsideClose(popupContainer);
      });
    };

    popupClickClose();
  }

  _handleEscClose(evt) {
    const popupOpened = document.querySelector('.popup__opened');
    if (evt.key === 'Escape') {
      evt.preventDefault();
      popupOpened.querySelector('.popup-fadeout').classList.add('fadeout');
      document.removeEventListener('keydown', this._handleEscClose());
      setTimeout(() => {
        popupOpened.classList.remove('popup__opened');
        popupOpened.classList.remove('popup_content_image_show');
      }, 500);
    };
  }


  setEventListeners() {
    this._element.addEventListener('click', () => {
      this.close();
    });

    buttonsClose.addEventListener('click', () => {
      this.close();
    });
  }
}