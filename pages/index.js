import Section from '../components/section.js';
import { popupClickClose, formNewCard, initialCards, validationElements, titleInput, urlInput, cardsArea } from "../components/utils.js";
import FormValidator from "../components/FormValidator.js";
import DefaultCard from "../components/DefaultCard.js";

// renderCards(initialCards);

const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new DefaultCard(item, ".template-card");
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, cardsArea);

defaultCardList.renderer();

// const renderCards = (items) => {
//   items.forEach((item) => {
//     const card = new DefaultCard(item, '.template-card');

//     const cardElement = card.generateCard();
//     cardsArea.append(cardElement);
//   });
// };

// const renderNewCardSubmit = (evt) => {
//   evt.preventDefault();
//   const newCard = [{name: `${titleInput.value}`, link: `${urlInput.value}`}];
//   newCard.forEach((item) => {
//     const card = new DefaultCard(item, '.template-card');

//     const cardElement = card.generateCard();
//     cardsArea.prepend(cardElement);
//   })
// };

// formNewCard.addEventListener('submit', renderNewCardSubmit);

popupClickClose();


const validateFormsName = new FormValidator(validationElements, '.popup-name');
const validateFormsPlace = new FormValidator(validationElements, '.popup-place');

validateFormsName.enableValidation();
validateFormsPlace.enableValidation();