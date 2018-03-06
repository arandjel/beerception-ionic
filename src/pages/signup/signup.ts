import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { DisplayMessage } from '../../shared/models/display-message';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  title = 'Sign up';
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userProvider: UserProvider,
    private authProvider: AuthProvider,
    private formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      username: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  ionViewCanEnter() {
    return !this.userProvider.isLoggedIn();
  }

  toLogin() {
    this.navCtrl.push(LoginPage);
  }

  onSubmit() {
    this.invalidData = false;
    /**
     * Deny submit if validation errors exist
     */
    if (!this.validate())
      return;

    /**
     * Innocent until proven guilty
     */
    this.notification = undefined;
    this.submitted = true;

    this.authProvider.signup(this.formGroup.value)
    // show me the animation
    .delay(1000)
    .subscribe(data => {
      console.log(data);
      this.authProvider.login(this.formGroup.value).subscribe(loginData => {
        this.userProvider.getMyInfo().subscribe();
      });
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    },
    error => {
      console.log("error with signup: " + error);
      this.submitted = false;
      this.invalidData = true;
      this.notification = { msgType: 'error', msgBody: error['error'].errorMessage };
    });

  }

  validate(): boolean {
    if (this.formGroup.get('username').touched && this.formGroup.get('username').invalid)
      return false;
    if (this.formGroup.get('password').touched && this.formGroup.get('password').invalid)
      return false;
    if (this.formGroup.get('firstname').touched && this.formGroup.get('firstname').invalid)
      return false;
    if (this.formGroup.get('lastname').touched && this.formGroup.get('lastname').invalid)
      return false;

    return true;
  }

}
