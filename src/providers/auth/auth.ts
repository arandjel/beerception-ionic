import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { UserProvider } from '../user/user';
import { ConfigProvider } from '../config/config';


@Injectable()
export class AuthProvider {

  constructor(
    private apiService: ApiProvider,
    private userService: UserProvider,
    private config: ConfigProvider
  ) { }

  login(user) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = `email=${user.username}&password=${user.password}`;

    return this.apiService.post(this.config.login_url, body, loginHeaders).map(() => {
      console.log("Login success");
      this.userService.getMyInfo().subscribe();
    });
  }

  signup(user) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const body = {
      "email": user['username'],
      "password": user['password'],
      "name": user['firstname'],
      "lastName": user['lastname']
    };
    return this.apiService.post(this.config.signup_url, body, signupHeaders).map(() => {
      console.log("Sign up success");
    });
  }

  logout() {
    const logoutHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.config.logout_url, {}, logoutHeaders)
      .map(() => {
        console.log("Logout success");
        this.userService.currentUser = null;
      });
  }

  changePassword(passwordChanger) {
    return this.apiService.post(this.config.change_password_url, passwordChanger);
  }

}
