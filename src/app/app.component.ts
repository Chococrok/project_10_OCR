import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Page } from '../pages/Page';
import { FavoritePage } from '../pages/favorite/favorite';
import { OwnedPage } from '../pages/owned/owned';
import { ProfilePage } from '../pages/profile/profile';
import { Profile } from '../models';
import { ProfileService } from '../services';
import { LogInPage } from '../pages/log-in.ts/log-in';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<Page>;

  profile: Profile;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private profileService: ProfileService
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      HomePage,
      FavoritePage,
      OwnedPage,
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.profile = this.profileService.getProfile();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }

  showProfile() {
    if (this.profile) {
      this.nav.push(ProfilePage, { profile: this.profile });
    } else {
      this.nav.push(LogInPage);
    }
  }
}
