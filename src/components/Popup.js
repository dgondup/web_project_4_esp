export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup__opened');
  }

  close() {
    this._popupSelector.querySelector('.popup__jsClose').classList.add('fadeout');
    setTimeout (() => {
      this._popupSelector.classList.remove('popup__opened');
      this._popupSelector.classList.remove('popup_content_image_show')
    }, 500);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.close();
    }
  }

  _removeEscCloseListener() {
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popupSelector.closest(".popup").addEventListener('click', (evt) => {
      if (evt.target.tagName === "SECTION" ? true : evt.target.tagName === "FORM") {
          this.close();
        }
      });

    this._popupSelector.querySelector('.popup__close-button').addEventListener('click', () => {
      this.close();
    });

    document.addEventListener('keydown', this._handleEscClose);
  }
}