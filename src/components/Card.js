import { cardsArea, } from "./utils.js";

export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    return this._element;
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
      this._handleCardClick();
    });

    cardsArea.addEventListener('click', this._handleLikeCardRemove);
  }
}