import { renderCards, renderNewCardSubmit } from "./Card.js";
import { popupClickClose, formNewCard } from "./utils.js";
import FormValidator from "./FormValidator.js";

const initialCards = [
  {
    name: "Van Duzen County Park, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204900368_338449741209590_80989138182320846_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KThxRm1r6TgAX9YdcNy&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBMEUyvq4eBSoI24sTywsR3BN-gYtn-rePFiG0B7l0Sew&oe=64CF0060"
  },
  {
    name: "Patricks Point, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/199756227_332197951834769_7505939558248638511_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=4FEz8s8QzOUAX9HIJXd&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDD3hNaf7Go9gEOnYKLqWWPsKpfp99fcgIRP9QbDdhNMg&oe=64CEF16A"
  },
  {
    name: "Puente de Brooklyn, NY",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/120843978_172123527842213_160369575782773858_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lx5JtKjVXJUAX__EKcb&_nc_ht=scontent-sjc3-1.xx&oh=00_AfD04DxJEjVkpPOMXH7CNnoBKyidBvY7f4Jlqt8YLApwlA&oe=64CEEE6A"
  },
  {
    name: "Monte Shasta, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/285489287_552216763166219_3225914276126028061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=UJNNlshLASIAX-Envn7&_nc_ht=scontent-sjc3-1.xx&oh=00_AfB2SKYrIbhvo2Ol3AxMColy4sayc6n2JBxSeCmO8G0Wfg&oe=64B99BFF"
  },
  {
    name: "Chinatown San Francisco, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/263354598_439809934406903_5822273761315807936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=u-uSUlE_KTYAX8mEtZa&_nc_oc=AQkTz8UKE7aecDPTnnt7dkvZnfIcoKbHy2MkgS15zVi9Sc_5Y8oju3aAO8mxdnrfn8s&_nc_ht=scontent-sjc3-1.xx&oh=00_AfC277CXg8UxFzLkU-jf0ZVuVRKd10zvyLEwrbUpwNHiEg&oe=64B91436"
  },
  {
    name: "Joshua Tree, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/337883154_234177629010235_9016534397902803845_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=CODQLFjaRwkAX-74-II&_nc_ht=scontent-sjc3-1.xx&oh=00_AfC2PS4uGhTqRyLhH854jVd2d8XbKaKpTawRv9UqrtH2IA&oe=64B999E4"
  }
];

const validationElements = {
  formSelector: ".popup",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active"
};

renderCards(initialCards);

formNewCard.addEventListener('submit', renderNewCardSubmit);

popupClickClose();

const validateForms = new FormValidator(validationElements, '.popup__container');
validateForms.enableValidation();