import { Component } from '@angular/core';
import { ModalController, NavController, AlertController } from 'ionic-angular';
import { Beerception } from '../../shared/models/beerception';
import { BeerProvider } from '../../providers/beer/beer';
import { RulesModalPage } from '../rules-modal/rules-modal';
import { UploadFileProvider } from '../../providers/upload-file/upload-file';
import { AddBeerceptionModalPage } from '../add-beerception-modal/add-beerception-modal';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  beerFileInfo: Beerception;

  imageData: any;
  url: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private fileProvider: UploadFileProvider,
    private beerProvider: BeerProvider,
    private userProvider: UserProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBeerceptionModalPage');
  }

  ionViewWillEnter() {
    this.getBeerception();
    this.getBeerceptionInfo();
  }

  getBeerception() {
    console.log("getting beerception");

    this.fileProvider.getBeerception().subscribe(
      data => {
        this.imageData = 'data:image/png;base64,' + data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getBeerceptionInfo() {
    console.log("getting beerception info");

    this.beerProvider.getBeerceptionInfo().subscribe(
      res => {
        console.log(res);
        this.beerFileInfo = res;
        if (res['beerDate'])
          this.beerFileInfo.beerDate = new Date(res['beerDate']);
      },
      error => {
        console.log(error);
      }
    );
  }

  beerUp() {
    if(!this.isLoggedIn())
      return;

    this.beerProvider.beerUp({}).subscribe(
      res => {
        console.log(res);
        this.beerFileInfo = res;
        if (res['beerDate'])
          this.beerFileInfo.beerDate = new Date(res['beerDate']);
      },
      error => {
        console.log(error);
      }
    );
  }

  beerDown() {
    if(!this.isLoggedIn())
      return;

    this.beerProvider.beerDown({}).subscribe(
      res => {
        console.log(res);
        this.beerFileInfo = res;
        if (res['beerDate'])
          this.beerFileInfo.beerDate = new Date(res['beerDate']);
      },
      error => {
        console.log(error);
      }
    );
  }

  openRulesModal() {
    let rulesModal = this.modalCtrl.create(RulesModalPage);
    rulesModal.present();
  }

  openAddBeerceptionModal() {
    if(!this.isLoggedIn())
      return;

    let rulesModal = this.modalCtrl.create(AddBeerceptionModalPage);
    rulesModal.present();
    rulesModal.onDidDismiss(() => {
      this.getBeerception();
      this.getBeerceptionInfo();
    });
  }

  isLoggedIn() {
    if(this.userProvider.isLoggedIn()) {
      return true;
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Not logged in',
        subTitle: 'Please login in order to do this action.',
        buttons: [
          'Dismiss',
          {
            text: 'Login',
            role: 'login',
            handler: () => {
              this.navCtrl.push(LoginPage);
            }
          }
        ]
      });
      alert.present();

      return false;
    }
  }

}
