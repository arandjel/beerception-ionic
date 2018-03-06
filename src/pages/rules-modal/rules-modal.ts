import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-rules-modal',
  templateUrl: 'rules-modal.html',
})
export class RulesModalPage {

  rules = [
    'Same user cannot take two photos in the row.',
    'Only the latest photo can be beerup-ed or beerdown-ed.',
    'If photo has -10 score, photo gets deleted from server. Previous photo takes it place.',
    'It is up to users to keep up the good beerception practice.'
  ];

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RulesModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
