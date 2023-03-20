const formElement = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAddPlace = document.querySelector('.profile__button-add');
const buttonClose = formElement.querySelector('.popup__close-button');
const buttonSave = formElement.querySelector('.popup__button');
const nameInput = formElement.querySelector('#name-input');
const jobInput = formElement.querySelector('#ocupacion-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

function openPopup() {
  formElement.querySelector('.popup__container').classList.remove('fadeout');
  formElement.classList.add('popup__opened');
  document.addEventListener('keydown', handleEsc);
};

// function openPopup (evt) {
//       if (evt.target.classList.contains('popup_open_button')) {
//         formElement.querySelector('.popup__container').classList.remove('fadeout');
//         evt.target.classList.add('popup__opened');
//         document.addEventListener('keydown', handleEsc);
//       }
//   };

  // const handleOpenPopup = () => {
  //   const popupProfileOpened = Array.from(document.querySelectorAll('.profile'));
  //   popupProfileOpened.forEach((popupButtonOpen) => {
  //     openPopup(popupButtonOpen);
  //   });
  // };

//  handleOpenPopup(buttonEdit);

function closePopup () {
  formElement.querySelector('.popup__container').classList.add('fadeout');
  setTimeout(() => {
    formElement.classList.remove('popup__opened');
  }, 500);
};

buttonEdit.addEventListener('click', openPopup);
buttonAddPlace.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
buttonSave.addEventListener('click', closePopup);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  profileName.textContent = nameValue;
  const jobValue = jobInput.value;
  profileJob.textContent = jobValue;
};

formElement.addEventListener('submit', handleProfileFormSubmit);

const initialCards = [
  {
    name: "Van Duzen County Park, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204900368_338449741209590_80989138182320846_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=exBRboeQjCsAX8M65aJ&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDIpy9D-TiglyIDLAITybw7tQT4jbVLtKupV_ZnNnecvg&oe=6439CEA0"
  },
  {
    name: "Patricks Point, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/199756227_332197951834769_7505939558248638511_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=c-aiLrqziqAAX9fRcoC&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCoLz-Fl0XG9pvpceEfMxQKub9lE4rCaSLpLGoQ069w4g&oe=6439F7EA"
  },
  {
    name: "Puente de Brooklyn, NY",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/120843978_172123527842213_160369575782773858_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rkKcV_vtqRMAX_rzyln&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDexWeCPOgm2qcZCMIauj_AQ1umRsxpGVbKOk4XSE19aA&oe=6439F4EA"
  },
  {
    name: "Monte Shasta, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/285489287_552216763166219_3225914276126028061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=TrPiZDw82PwAX-9q1fG&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDF9xSSOa1pst8qhTyPWb23856NvAjG2kKyDfR-0yEG5w&oe=6417737F"
  },
  {
    name: "Chinatown San Francisco, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/263354598_439809934406903_5822273761315807936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=gA2S8L9R-4YAX_dThIL&_nc_oc=AQk6jqYb9yjzGOqKoY3MRsDdsV7QrpfSpAuNe-VG-fKmOBo4LMiaFIK8Fk35owbh-3k&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAUNNaIme4XGq_lb0ovhU4hDASKp6h_1mIaNNQgMGnScQ&oe=6416EBB6"
  },
  {
    name: "Lake Tahoe, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/138038083_227010315686867_4058809446922602648_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jYf-yVpEXq8AX8xP5Qg&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAVFbu_LcXG-8nSTOPL0dfnRDLaqlKhgleibbNlQFVtIw&oe=6439F4A5"
  }
];


const cardsArea = document.querySelector('.elements');
const cardTemplate = document.querySelector('.template-card').content.querySelector('.card');
const popupImage = document.querySelector('.popup_content_image');

function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  const cardTitle = card.querySelector('.card__title');
  cardTitle.textContent = item.name;
  cardImage.addEventListener('click', evt => {
    document.addEventListener('keydown', handleEsc);
    popupImage.classList.add('popup__opened');
    popupImage.classList.add('popup_content_image_show');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    const formPopupCloseButton = popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    formPopupCloseButton.alt = 'Close';
    popupImage.querySelector('.popup__image').src = item.link;
    popupImage.querySelector('.popup__title').textContent = item.name;
    popupImage.querySelector('.popup__close-button').addEventListener('click', evt => {
      evt.target.closest('.popup__content').classList.add('fadeout');
      setTimeout (() => {
        popupImage.classList.remove('popup__opened');
        popupImage.classList.remove('popup_content_image_show')
      }, 500);
    });
  });
  card.querySelector('.card__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('.card__button-like_checked');
  });
  card.querySelector('.card__button-remove').addEventListener('click', evt => {
    evt.target.closest('.card').classList.add('fadeout');
    setTimeout(() => {
      evt.target.closest('.card').remove();
    }, 500);
  });
  return card;
};

initialCards.forEach(item => {
  const nodeCard = createCard(item);
  cardsArea.append(nodeCard);
});

const titleInput = formElement.querySelector('#title-input');
const urlInput = formElement.querySelector('#url-input');

// const newCard = [
//   {
//     name: "",
//     link: ""
//   }
// ];

function createNewCard() {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const newCardTitle = titleInput.value;
  cardTitle.textContent = newCardTitle;
  const newCardUrl = urlInput.value;
  cardImage.src = newCardUrl;
  cardImage.alt = newCardTitle;
  cardImage.addEventListener('click', evt => {
    document.addEventListener('keydown', handleEsc);
    popupImage.classList.add('popup__opened');
    popupImage.classList.add('popup_content_image_show');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    const formPopupCloseButton = popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    formPopupCloseButton.alt = 'Close';
    popupImage.querySelector('.popup__image').src = newCardUrl;
    popupImage.querySelector('.popup__title').textContent = newCardTitle;
    popupImage.querySelector('.popup__close-button').addEventListener('click', evt => {
      evt.target.closest('.popup__content').classList.add('fadeout');
      setTimeout (() => {
        popupImage.classList.remove('popup__opened');
        popupImage.classList.remove('popup_content_image_show');
      }, 500);
    });
  });
  card.querySelector('.card__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('.card__button-like_checked');
  });
  card.querySelector('.card__button-remove').addEventListener('click', evt => {
    evt.target.closest('.card').classList.add('fadeout');
    setTimeout(() => {
      evt.target.closest('.card').remove();
    }, 500);
  });
  return card;
};

const formNewCard = document.querySelector('.popup_place');

formNewCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  newCard.forEach(() => {
    const nodeNewCard = createNewCard();
    cardsArea.prepend(nodeNewCard);
  });
});

const placeButtonSave = formNewCard.querySelector('.popup__button');
placeButtonSave.addEventListener('click', closePopup);

const handleEsc = (evt) => {
  const popup = document.querySelector('.popup__opened');
  if (evt.key === 'Escape') {
    evt.preventDefault();
    popup.querySelector('.popup-fadeout').classList.add('fadeout');
    document.removeEventListener('keydown', handleEsc);
    setTimeout(() => {
      popup.classList.remove('popup__opened');
      popup.classList.remove('popup_content_image_show');
    }, 500);
  };
};

function popupOutsideClose (popup) {
popup.addEventListener('click', (evt) => {
  if (evt.target == popup) {
    popup.querySelector('.popup-fadeout').classList.add('fadeout');
    setTimeout(() => {
      popup.classList.remove('popup__opened');
      popup.classList.remove('popup_content_image_show');
      }, 500);
    }
  });
};

const popupClickClose = () => {
  const popupOpened = Array.from(document.querySelectorAll('.popup'));
  popupOpened.forEach((popupContainer) => {
    popupOutsideClose(popupContainer);
  });
};

popupClickClose();