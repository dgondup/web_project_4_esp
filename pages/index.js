import { renderCards, renderNewCardSubmit } from "../components/Card.js";
import { popupClickClose, formNewCard, initialCards, validationElements } from "../utils/utils.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/section.js";

renderCards(initialCards);

formNewCard.addEventListener('submit', renderNewCardSubmit);

popupClickClose();


const validateFormsName = new FormValidator(validationElements, '.popup-name');
const validateFormsPlace = new FormValidator(validationElements, '.popup-place');

validateFormsName.enableValidation();
validateFormsPlace.enableValidation();