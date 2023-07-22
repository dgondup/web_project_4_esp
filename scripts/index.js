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
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/285489287_552216763166219_3225914276126028061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Y7kMZnTwZwAAX8l_4ou&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDFlqN8pNctlxVgyNt84QCcFQeHGl-xQRmLDm5ttk-IwQ&oe=64BF8ABF"
  },
  {
    name: "Chinatown San Francisco, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/263354598_439809934406903_5822273761315807936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=JJ5pSjPL3k4AX9YrdfW&_nc_oc=AQldOswYbm-gjBqdkE_KyJIckM9gKTsO8WWm_tJp_gVPMPmrdgNZNAhw2ay508UYQWw&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCL8IXshBgRrriNIZ6vQIBXsxn96TbFf5n08grzXyjAuQ&oe=64C0FD36"
  },
  {
    name: "Joshua Tree, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/337883154_234177629010235_9016534397902803845_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=jnhhm7MjyWAAX8kSXd1&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDAq-y5zC0FRHA9F1erdiwFx_OF65Cu7lmL1M4J9DcRjQ&oe=64BF88A4"
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


const validateFormsName = new FormValidator(validationElements, '.popup-name');
const validateFormsPlace = new FormValidator(validationElements, '.popup-place');

validateFormsName.enableValidation();
validateFormsPlace.enableValidation();