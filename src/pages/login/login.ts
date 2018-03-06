import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisplayMessage } from '../../shared/models/display-message';
import 'rxjs/add/operator/delay';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  title = 'Login';
  formGroup: FormGroup;

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

  /**
   * Notification message from received
   * form request or router
   */
  notification: DisplayMessage;
  invalidData = false;
  formValid = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userProvider: UserProvider,
    private authProvider: AuthProvider,
    private formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        username: ['', Validators.compose([Validators.email, Validators.required, Validators.nullValidator])],
        password: ['', Validators.compose([Validators.required, Validators.nullValidator])]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewCanEnter() {
    return !this.userProvider.isLoggedIn();
  }

  toSignup() {
    this.navCtrl.push(SignupPage);
  }

  onSubmit() {
    this.invalidData = false;
    this.formValid = true;
    /**
     * Deny submit if username or password contain validation errors
     */
    if (!this.validate()) {
      this.formValid = false;
      return;
    }
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined;
    this.submitted = true;

    this.authProvider.login(this.formGroup.value)
    // show me the animation
    .delay(1000)
    .subscribe(data => {
      console.log("logging in");
      this.userProvider.getMyInfo().subscribe();
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    },
    error => {
      console.log("error with login: " + error);
      this.submitted = false;
      this.invalidData = true;
      this.notification = { msgType: 'error', msgBody: error.error['message'] };
    });

  }

  validate(): boolean {
    if (this.formGroup.get('username').invalid)
      return false;
    if (this.formGroup.get('password').invalid)
      return false;

    return true;
  }

}
