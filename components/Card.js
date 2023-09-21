import { cardsArea, handleEsc, popupImage, handlePopupImageClose, } from "./utils.js";

export default class Card {
  constructor({ handleCardClick }, cardSelector) {
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  _handleLikeCardRemove(evt) {
    const target = evt.target;
    if (target.classList.contains('.card__button-like')) {
      target.classList.toggle('.card__button-like_checked');
    } else if (target.classList.contains('card__button-remove')) {
      target.closest('.card').classList.add('fadeout');
      setTimeout(() => {
        target.closest('.card').remove();
      }, 500);
    };
  };

  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      document.addEventListener('keydown', handleEsc);
      this._open();
    });

    cardsArea.addEventListener('click', () => {
      this._handleLikeCardRemove();
    });
  }
}