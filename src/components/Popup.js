export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  _getPopupTemplate() {
    const popupElement = document
    .querySelector(this._popupSelector)
    .content
    .querySelector(".popup__content")
    .cloneNode(true);

    return popupElement;
  }

  open() {
    this._popupSelector.classList.add('popup__opened');
  }

  close() {
    this.querySelector('.popup__container').classList.add('fadeout');
    setTimeout (() => {
      this.classList.remove('popup__opened');
      this.classList.remove('popup_content_image_show')
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
      this._popupElement.addEventListener('click', () => {
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