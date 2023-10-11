import "../blocks/index.css";
import vectorAdd from "../images/vectores/Vector-add.svg";
import imageButtonClose from "../images/vectores/Close-Icon.svg";
import Section from "../components/Section.js";
import { initialCards, validationElements, cardsArea, popupImage, formElement, buttonFormName, initialUserInfo } from "../components/utils.js";
import FormValidator from "../components/FormValidator.js";
import DefaultCard from "../components/DefaultCard.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

document.getElementById("vector-add").src = vectorAdd;
document.querySelector(".popup__close-button").src = imageButtonClose;

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new DefaultCard({data: item, handleCardClick: () => {
      const popupWithImage = new PopupWithImage(".popup_content_image");
      popupWithImage.open();
    } }, ".template-card");
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, cardsArea);

defaultCardList.renderer();

const userInfo = new UserInfo(initialUserInfo);

const profileFormPopup = new PopupWithForm(formElement, (values) => {
  userInfo.setUserInfo(values);
}, ".popup-name")

buttonFormName.addEventListener('click', () => {
  profileFormPopup.open();
});

const validateFormsName = new FormValidator(validationElements, '.popup-name');
const validateFormsPlace = new FormValidator(validationElements, '.popup-place');

validateFormsName.enableValidation();
validateFormsPlace.enableValidation();