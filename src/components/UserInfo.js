export default class UserInfo {
  constructor(titleSelector, subtitleSelector) {
    this._userName = document.querySelector(titleSelector);
    this._userJob = document.querySelector(subtitleSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent
    }
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.job;
  }
}