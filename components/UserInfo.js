export default class UserInfo {
  constructor(data, userInfoSelector) {
    this._userName = data.name;
    this._userJob = data.job;
    this._userInfoSelector = userInfoSelector;
  }

  getUserInfo() {
    return {
      name: this._userName,
      job: this._userJob
    }
  }

  setUserInfo() {
    document.querySelector('.profile__name').textContent = data.name;
    document.querySelector('.profile__description').textContent = data.job;
  }
}