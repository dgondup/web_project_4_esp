const formElement = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAddPlace = document.querySelector('.profile__button-add');
const buttonClose = document.querySelector('.popup__close-button');
const buttonSave = document.querySelector('.popup__button');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#ocupacion-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

// function openPopup() {
//   const item = document.querySelector('.popup');
//   item.querySelector('.popup__container').classList.remove('fadeout');
//   item.classList.add('popup__opened');
//   document.addEventListener('keydown', handleEsc);
// };

function openPopup(e) {
  const target = e.target;
  const selectedPopup = formElement;
  selectedPopup.querySelector('.popup__container').classList.remove('fadeout');
  selectedPopup.classList.add('popup__opened');
  document.addEventListener('keydown', handleEsc);
};



// function openPopup () {
//   const popupForm = document.querySelector('.popup');
//   if (popupForm.classList.contains('.popup__container')) {
//     popupForm.querySelector('.popup__container').classList.remove('fadeout');
//     popupForm.classList.add('popup__opened');
//     document.addEventListener('keydown', handleEsc);
//   }
// };

// const handleOpenPopup = () => {
//   const popupProfile = Array.from(document.querySelectorAll('.profile'));
//   popupProfile.forEach((profileButton) => {
//     openPopup(profileButton);
//   });
// };

// handleOpenPopup(buttonEdit);

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
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204900368_338449741209590_80989138182320846_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=z1qjHaXYPWgAX-MDZDn&_nc_ht=scontent-sjc3-1.xx&oh=00_AfApbpNX7sVX94pvcXftMC_hnGZ78SqxlFICgETJjTUv6Q&oe=64658860"
  },
  {
    name: "Patricks Point, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/199756227_332197951834769_7505939558248638511_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=nOyCowdpfVMAX8-PxcY&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDMbo5d1YByjTNHojvf9IEpB9pH4m079lrgJk19dYO8dw&oe=6465796A"
  },
  {
    name: "Puente de Brooklyn, NY",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/120843978_172123527842213_160369575782773858_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=X-TGRXkWYlkAX9i9wkx&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAVCFdVrstz8Aq0uct3u5EwzZ3txk2WNWypi6pxDUi_gw&oe=6465766A"
  },
  {
    name: "Monte Shasta, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/285489287_552216763166219_3225914276126028061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=6SRRxN0WpCwAX9OeYmJ&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAFW4oDZtqYruzMGPDuHXhM204eNQdsJCn_5v98NqC_9Q&oe=6442F4FF"
  },
  {
    name: "Chinatown San Francisco, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/263354598_439809934406903_5822273761315807936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=VFSFHgX7YoUAX9yRkGo&_nc_oc=AQkXXIiEHKeKIUqlpat-RAZfh_QhkiB19lTL5HqIQAAMVfFBjRy0wMPGMHj_Wjv5jJ8&_nc_ht=scontent-sjc3-1.xx&oh=00_AfB7hAAW92XlL3QjT4AsH1qdJOTpdRcRyebbgapvrLspbQ&oe=64426D36"
  },
  {
    name: "Joshua Tree, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/337883154_234177629010235_9016534397902803845_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=dlm-aeCABBsAX-IK0HP&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAQnXd9nE0tSmhixPZgBvA5XplzEV6mrOIAC77YQyxLPw&oe=6442F2E4"
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

//const formNewCard = document.querySelector('.popup_place');
const formNewCard = document.forms.placeForm;

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