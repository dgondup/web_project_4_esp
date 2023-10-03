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
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/285489287_552216763166219_3225914276126028061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=813123&_nc_ohc=h1OTj3Bg8zkAX-qmVZG&_nc_ht=scontent-sjc3-1.xx&oh=00_AfALwZQA9lbPifjIQblhe1DIMqrIct_zFHh5kpdKw5NHeA&oe=651E76BF"
  },
  {
    name: "Chinatown San Francisco, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/263354598_439809934406903_5822273761315807936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=813123&_nc_ohc=bHT_vCjUc68AX-_emgO&_nc_oc=AQl4morUkcymgG-Pf77utRUmN7mWmHxNLNH85Qwl8-CIvS8V4-E61XXBUxtStd7CJCQ&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDWBGYfenYHN-pcD3wMdHx-spoc5mztq1XZq9O4EMiEzg&oe=651FE936"
  },
  {
    name: "Joshua Tree, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/337720117_759136078917321_5278992920202003302_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=813123&_nc_ohc=msbLDXGFu3AAX-wFKZN&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCukMHadilLcZM1VyB-3tKJ76IeuwWFrron1Hby-zLulw&oe=651EB659"
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