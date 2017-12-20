import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Activity1Page } from "../pages/activity1/activity1";
import { Activity2Page } from "../pages/activity2/activity2";
import { Activity3Page } from "../pages/activity3/activity3";
import { ActivityAdminPostPage } from '../pages/activityadminpost/activityadminpost';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  navCtrl: any;
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = Activity1Page;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hospital San Jose', component: Activity1Page },
      { title: 'My First List', component: ListPage }
    ];
  }

  checkPreviousAuthorization(): void {
    if ((window.localStorage.getItem('username') == "miguel") &&
      (window.localStorage.getItem('password') == "12345")) {
      this.navCtrl = Activity2Page;
    } else {
      ((window.localStorage.getItem('username') == "admin") &&
        (window.localStorage.getItem('password') == "12345")) 
      this.navCtrl = ActivityAdminPostPage;
    }
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkPreviousAuthorization();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
