import "../blocks/index.css";
import vectorAdd from "../images/vectores/Vector-add.svg";
import imageButtonClose from "../images/vectores/Close-Icon.svg";
import Section from "../components/Section.js";
import { initialCards, validationElements, cardsArea, popupImage, formElement, buttonFormName, initialUserInfo, buttonFormAddCard } from "../components/utils.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

document.getElementById("vector-add").src = vectorAdd;
document.getElementById("popup-name-close").src = imageButtonClose;
document.getElementById("popup-place-close").src = imageButtonClose;

const popupWithImage = new PopupWithImage(".popup_content_image");

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({data: item, handleCardClick: () => {
      popupWithImage.open(item);
    } }, ".template-card");
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, cardsArea);

defaultCardList.renderer();


const userInfo = new UserInfo('#name-input', '#ocupacion-input');

const profileFormPopup = new PopupWithForm(formElement, {formCallBack: (data) => {
  userInfo.setUserInfo(data);
}
}, ".popup-name")

buttonFormName.addEventListener('click', () => {
  profileFormPopup.open();
});

const addCardFormPopup = new PopupWithForm(formElement, {formCallBack:() => {}}, ".popup-place" )

buttonFormAddCard.addEventListener('click', () => {
  addCardFormPopup.open();
});

const validateFormsName = new FormValidator(validationElements, '.popup-name');
const validateFormsPlace = new FormValidator(validationElements, '.popup-place');

validateFormsName.enableValidation();
validateFormsPlace.enableValidation();

// const renderNewCardSubmit = (evt) => {
//   evt.preventDefault();
//   const newCard = [{name: `${titleInput.value}`, link: `${urlInput.value}`}];
//   newCard.forEach((item) => {
//     const card = new DefaultCard(item, '.template-card');

//     const cardElement = card.generateCard();
//     cardsArea.prepend(cardElement);
//   })
// };