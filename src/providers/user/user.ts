import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { ConfigProvider } from '../config/config';


@Injectable()
export class UserProvider {

  currentUser;

  constructor(
    private apiService: ApiProvider,
    private config: ConfigProvider
  ) { }

  initUser() {
    const promise = this.apiService.get(this.config.refresh_token_url).toPromise()
    .then(res => {
      if (res.access_token !== null) {
        return this.getMyInfo().toPromise()
        .then(user => {
          this.currentUser = user;
        });
      }
    })
    .catch(() => null);
    return promise;
  }

  resetCredentials() {
    return this.apiService.get(this.config.reset_credentials_url);
  }

  getMyInfo() {
    return this.apiService.get(this.config.whoami_url).map(user => this.currentUser = user);
  }

  getAll() {
    return this.apiService.get(this.config.users_url);
  }

  isLoggedIn() {
    if (this.currentUser) {
      return true;
    } else {
      return false;
    }
  }

}
