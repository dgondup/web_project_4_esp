import { cardsArea, handleEsc, popupImage, handlePopupImageClose, handleLikeCardRemove, titleInput, urlInput } from "../utils/utils.js";

class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  _handleOpenPopupImage() {
    popupImage.classList.add('popup__opened');
    popupImage.classList.add('popup_content_image_show');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    popupImage.querySelector('.popup__image').src = this._link;
    popupImage.querySelector('.popup__title').textContent = this._name;
    popupImage.querySelector('.popup__close-button').addEventListener('click', handlePopupImageClose);
  }

  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      document.addEventListener('keydown', handleEsc);
      this._handleOpenPopupImage();
    });

    cardsArea.addEventListener('click', handleLikeCardRemove);
  }
}

class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._name = data.name;
    this._link = data.link;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    const cardImage = this._element.querySelector('.card__image');
    const cardTitle = this._element.querySelector('.card__title');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    return this._element;
  }
}

const renderCards = (items) => {
  items.forEach((item) => {
    const card = new DefaultCard(item, '.template-card');

    const cardElement = card.generateCard();
    cardsArea.append(cardElement);
  });
};

const renderNewCardSubmit = (evt) => {
  evt.preventDefault();
  const newCard = [{name: `${titleInput.value}`, link: `${urlInput.value}`}];
  newCard.forEach((item) => {
    const card = new DefaultCard(item, '.template-card');

    const cardElement = card.generateCard();
    cardsArea.prepend(cardElement);
  })
};

export { renderCards, renderNewCardSubmit }