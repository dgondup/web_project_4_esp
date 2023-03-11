const formElementName = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonCloseName = document.querySelector('.popup__close-button');
const buttonSave = formElementName.querySelector('.popup__button');
const nameInput = formElementName.querySelector('#name-input');
const jobInput = formElementName.querySelector('#ocupacion-input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

function openPopupName () {
  formElementName.querySelector('.popup__container').classList.remove('fadeout');
  formElementName.classList.add('popup__opened');
};

function closePopupName () {
  formElementName.querySelector('.popup__container').classList.add('fadeout');
  setTimeout(() => {
    formElementName.classList.remove('popup__opened');
  }, 500);
};

buttonEdit.addEventListener('click', openPopupName);
buttonCloseName.addEventListener('click', closePopupName);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  profileName.textContent = nameValue;
  const jobValue = jobInput.value;
  profileJob.textContent = jobValue;
};

formElementName.addEventListener('submit', handleProfileFormSubmit);
buttonSave.addEventListener('click', closePopupName);

const initialCards = [
  {
    name: "Van Duzen County Park, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/204900368_338449741209590_80989138182320846_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PxzkxeV4LnkAX-EjGrN&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCj0hk6NUxPuHf6m_kJiQnVKSq-UpcgzLLYyOi4HWCtKA&oe=64003D20"
  },
  {
    name: "Patricks Point, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/199756227_332197951834769_7505939558248638511_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=j9M0MqlHy9IAX8CA-1j&tn=tAhIw-gmJx1N5hbC&_nc_ht=scontent-sjc3-1.xx&oh=00_AfD4hwRFpSHjAjlmtb_6PQSQbTrt13ADUPFMQk4by_R3TA&oe=64002E2A"
  },
  {
    name: "Puente de Brooklyn, NY",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/120843978_172123527842213_160369575782773858_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Uk48saPXpcQAX_CBxjL&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDFVIfgHBkMGtXswfMZH0ZBfAUXk3QqVLvyZDMoIaFmSg&oe=64002B2A"
  },
  {
    name: "Monte Shasta, CA",
    link: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/285489287_552216763166219_3225914276126028061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=2nJM0Gul7LIAX_cLoLM&_nc_ht=scontent-ord5-2.xx&oh=00_AfDulUTM4lOr643YRtz6sYIagEMGlHBKpnRCsb9O4ejEZg&oe=6401B2BF"
  },
  {
    name: "Chinatown San Francisco, CA",
    link: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/263354598_439809934406903_5822273761315807936_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=xtH1IQC_6tMAX8_7r68&_nc_oc=AQnqPdrZMSMVXNUAYN5mw28n4nWFNSkzw2BRzyTHnbwR93voiscG6OkJqEh9SJTXmOo&_nc_ht=scontent-ord5-2.xx&oh=00_AfCu4wLqXKyxCbV4DarkJ_LrWNFELk-_wKozVokFsyKClA&oe=64032536"
  },
  {
    name: "Lake Tahoe, CA",
    link: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/138112620_236756357965366_1434023870465215618_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=PakNx7YgP-8AX8hQ0ls&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCo3WGBUUuRfMTaRw9Md2H4cZ-xPTeNQ5v-TVz0kq6wKg&oe=64001CA3"
  }
];

const formElementPlace = document.querySelector('.popup_place');
const buttonAddPlace = document.querySelector('.profile__button-add');
const buttonClosePlace = formElementPlace.querySelector('.popup__close-button');

function openPopupPlace () {
  formElementPlace.querySelector('.popup__container').classList.remove('fadeout');
  formElementPlace.classList.add('popup__opened');
};

function closePopupPlace () {
  formElementPlace.querySelector('.popup__container').classList.add('fadeout');
  setTimeout(() => {
    formElementPlace.classList.remove('popup__opened');
  }, 500);
};

buttonAddPlace.addEventListener('click', openPopupPlace);
buttonClosePlace.addEventListener('click', closePopupPlace);

const cardsArea = document.querySelector('.elements');
const cardTemplate = document.querySelector('.template-card').content.querySelector('.card');
const popupImage = document.querySelector('.popup_content_image');

function createCard(item) {
  const node = cardTemplate.cloneNode(true);
  const cardImage = node.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  const cardTitle = node.querySelector('.card__title');
  cardTitle.textContent = item.name;
    cardImage.addEventListener('click', evt => {
    popupImage.classList.add('popup__opened');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    const formPopupCloseButton = popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    formPopupCloseButton.alt = 'Close';
    popupImage.querySelector('.popup__image').src = item.link;
    popupImage.querySelector('.popup__title').textContent = item.name;
    popupImage.querySelector('.popup__close-button').addEventListener('click', evt => {
      evt.target.closest('.popup__content').classList.add('fadeout');
      setTimeout (() => {
        popupImage.classList.remove('popup__opened');
      }, 500);
    });
  });
  node.querySelector('.card__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('.card__button-like_checked');
  });
  node.querySelector('.card__button-remove').addEventListener('click', evt => {
    evt.target.closest('.card').classList.add('fadeout');
    setTimeout(() => {
      evt.target.closest('.card').remove();
    }, 500);
  });

  return node;
};

initialCards.forEach(item => {
  const nodeCard = createCard(item);
  cardsArea.append(nodeCard);
});

const titleInput = formElementPlace.querySelector('#title-input');
const urlInput = formElementPlace.querySelector('#url-input');

const newCard = [
  {
    name: "",
    link: ""
  }
];

function createNewCard() {
  const node = cardTemplate.cloneNode(true);
  const cardImage = node.querySelector('.card__image');
  const cardTitle = node.querySelector('.card__title');
  const newCardTitle = titleInput.value;
  cardTitle.textContent = newCardTitle;
  const newCardUrl = urlInput.value;
  cardImage.src = newCardUrl;
  cardImage.alt = newCardTitle;
    cardImage.addEventListener('click', evt => {
    popupImage.classList.add('popup__opened');
    popupImage.querySelector('.popup__content').classList.remove('fadeout');
    const formPopupCloseButton = popupImage.querySelector('.popup__close-button').src = './images/vectores/Close-Icon.svg';
    formPopupCloseButton.alt = 'Close';
    popupImage.querySelector('.popup__image').src = newCardUrl;
    popupImage.querySelector('.popup__title').textContent = newCardTitle;
    popupImage.querySelector('.popup__close-button').addEventListener('click', evt => {
      evt.target.closest('.popup__content').classList.add('fadeout');
      setTimeout (() => {
        popupImage.classList.remove('popup__opened');
      }, 500);
    });
  });
  node.querySelector('.card__button-like').addEventListener('click', evt => {
    evt.target.classList.toggle('.card__button-like_checked');
  });
  node.querySelector('.card__button-remove').addEventListener('click', evt => {
    evt.target.closest('.card').classList.add('fadeout');
    setTimeout(() => {
      evt.target.closest('.card').remove();
    }, 500);
  });

  return node;
};

formElementPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();
  newCard.forEach(() => {
    const nodeNewCard = createNewCard();
    cardsArea.prepend(nodeNewCard);
  });
});

const placeButtonSave = formElementPlace.querySelector('.popup__button');
placeButtonSave.addEventListener('click', closePopupPlace);

const closeEscKey = () => {
  const popupList = Array.from(document.querySelectorAll('.popup__form'));
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('keydown', )
  });
};
