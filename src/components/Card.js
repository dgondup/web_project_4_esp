import { cardsArea, } from "./utils.js";

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
    if (evt.target.classList.contains('.card__button-like')) {
      evt.target.toggle('.card__button-like_checked');
    } else if (evt.target.classList.contains('card__button-remove')) {
      evt.target.closest('.card').classList.add('fadeout');
      setTimeout(() => {
        evt.target.closest('.card').remove();
      }, 500);
    };
  };

  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleCardClick;
      console.log("click");
    });

    cardsArea.addEventListener('click', this._handleLikeCardRemove);
  }
}