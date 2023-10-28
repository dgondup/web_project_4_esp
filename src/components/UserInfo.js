export default class UserInfo {
  constructor(titleSelector, subtitleSelector) {
    this._userName = document.querySelector(titleSelector);
    this._userJob = document.querySelector(subtitleSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.value,
      job: this._userJob.value
    };
  }

  setUserInfo(data) {
    this.getUserInfo(data);
    document.querySelector(".profile__name").textContent = data.value;
    document.querySelector(".profile__description").textContent = data.value;
  }
}