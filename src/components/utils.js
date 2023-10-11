const cardsArea = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_content_image');
const buttonFormName = document.querySelector('.profile__button-edit');
const buttonOpenFormAddCard = document.querySelector('.profile__button-add');
const buttonsSave = document.querySelectorAll('.popup__button');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#ocupacion-input');
const formElement = document.querySelector('.popup');
const formNewCard = document.forms.placeForm;
const titleInput = document.querySelector('#title-input');
const urlInput = document.querySelector('#url-input');

const initialCards = [
  {
    name: "Van Duzen County Park, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204900368_338449741209590_80989138182320846_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=D3o8RoAZZAcAX8FP3DW&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBMRQ6YjomT4L6ir5vhbYuU5NKgiivvi9rFGdTjZWS_PQ&oe=6541B2E0"
  },
  {
    name: "Patricks Point, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/199756227_332197951834769_7505939558248638511_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=YBbPlLphb8YAX-wRvRX&_nc_ht=scontent-sjc3-1.xx&oh=00_AfC-x5GydtH85gM9D4zhrBCvCRD52zXxxLTMRqR20mylOA&oe=6541A3EA"
  },
  {
    name: "Puente de Brooklyn, NY",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/120843978_172123527842213_160369575782773858_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=306xnikrNKoAX_P3m4L&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBJtt9VyJ-oN6hNCsgoH7YfSSrc-DjZOGkKZrQRX50pvw&oe=6541A0EA"
  },
  {
    name: "Monte Shasta, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/285489287_552216763166219_3225914276126028061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=813123&_nc_ohc=FAeI88vdFMIAX9f-Mrb&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCKNxatdKBufAwlcaga1MNnGQCBvJKo6O5QPBsIKZuMVw&oe=652A543F"
  },
  {
    name: "Chinatown San Francisco, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/263354598_439809934406903_5822273761315807936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=813123&_nc_ohc=kdnThbQcOOMAX9AiOfk&_nc_oc=AQnfzz3nQ3NrdI2EMUGjUMaDxIYke2TuZOd8oHv4zIcVNW8OT7MqL39dcs6Kl5BxPsI&_nc_ht=scontent-sjc3-1.xx&oh=00_AfBjabKNEVIIci-B77qRr9ojm1cg9GzpADToaLFYlkpcnw&oe=6529CC76"
  },
  {
    name: "Joshua Tree, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/337720117_759136078917321_5278992920202003302_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=813123&_nc_ohc=UUy_FJlNYugAX867gzA&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDnJzeKvHLJcTGvMhegJwIG7fNMxDdzrRWvoyKZAV2CoQ&oe=652A93D9"
  }
];

const initialUserInfo = [
  {
    name: "David GD",
    job: "Estudiante de programación"
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


export { cardsArea, popupImage, formNewCard, titleInput, urlInput, initialCards, validationElements, nameInput, jobInput, buttonFormName, formElement, initialUserInfo };