import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { CookieService } from 'ngx-cookie-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BeerProvider } from '../providers/beer/beer';
import { ConfigProvider } from '../providers/config/config';
import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { RulesModalPage } from '../pages/rules-modal/rules-modal';
import { UploadFileProvider } from '../providers/upload-file/upload-file';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FormsModule } from '@angular/forms';
import { AddBeerceptionModalPage } from '../pages/add-beerception-modal/add-beerception-modal';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

export function initUserFactory(userProvider: UserProvider) {
  console.log("initUserFactory");
  return () => userProvider.initUser();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    RulesModalPage,
    AddBeerceptionModalPage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    RulesModalPage,
    AddBeerceptionModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    CookieService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    ApiProvider,
    AuthProvider,
    UserProvider,
    BeerProvider,
    {
      'provide': APP_INITIALIZER,
      'useFactory': initUserFactory,
      'deps': [UserProvider],
      'multi': true
    },
    UploadFileProvider
  ]
})
export class AppModule {}
