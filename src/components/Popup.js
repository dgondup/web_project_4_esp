export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    this._popupSelector.classList.add('popup__opened');
  }

  close() {
    this._popupSelector.querySelector('.popup__container').classList.add('fadeout');
    setTimeout (() => {
      this.classList.remove('popup__opened');
      this.classList.remove('popup_content_image_show')
    }, 500);
  }

  _handleEscClose() {
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
      this._popupSelector.addEventListener('click', () => {
            this.close();
            console.log('click');
            });

      this._popupSelector.querySelector('.popup__close-button').addEventListener('click', () => {
        this.close();
        console.log('click');
      });
      document.addEventListener('keydown', () => {
        this._handleEscClose();
      });

    }
  }