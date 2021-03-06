import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, Platform } from 'ionic-angular';
import { HttpResponse, HttpEventType, HttpEvent } from '@angular/common/http';
import { UploadFileProvider } from '../../providers/upload-file/upload-file';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-add-beerception-modal',
  templateUrl: 'add-beerception-modal.html',
})
export class AddBeerceptionModalPage {

  rules = [
    'Same user cannot take two photos in the row.',
    'Only the latest photo can be beerup-ed or beerdown-ed.',
    'If photo has -10 score, photo gets deleted from server. Previous photo takes it place.',
    'It is up to users to keep up the good beerception practice.'
  ];

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }

  fileUploading: boolean;

  errorMessage: string;

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private camera: Camera,
    private uploadFileProvider: UploadFileProvider,
    private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBeerceptionModalPage');
  }

  selectFile(event) {
    const file = event.target.files.item(0);

    if (!file)
      return;

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      this.presentToast('Invalid image format!');
    }
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);

    this.uploadFileProvider.addBeerception(this.currentFileUpload)
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            console.log('File is completely uploaded!');

            this.presentToast("Photo has been uploaded with success!");
            this.closeModal();
          }
        },
        error => {
          let errorJson = JSON.parse(error['error']);
          this.errorMessage = errorJson['errorMessage'];

          this.presentToast(this.errorMessage);
        }
      );

    this.selectedFiles = undefined;
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
    }, (error) => {
      console.log(error);
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 10000,
      position: 'top',
      showCloseButton: true
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  isBrowserDevice() {
    return this.platform.is('core') || this.platform.is('mobileweb');
  }
}
