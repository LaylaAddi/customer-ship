import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';

// import pages
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {HistoryPage} from '../pages/history/history';
import {NotificationPage} from '../pages/notification/notification';
import {SupportPage} from '../pages/support/support';

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {

  public rootPage: any;

  public nav: any;

  public pages = [
    {
      title: 'Home',
      icon: 'ios-home-outline',
      count: 0,
      component: HomePage
    },
    {
      title: 'History',
      icon: 'ios-time-outline',
      count: 0,
      component: HistoryPage
    },
    {
      title: 'Notification',
      icon: 'ios-notifications-outline',
      count: 2,
      component: NotificationPage
    },
    {
      title: 'Support',
      icon: 'ios-help-circle-outline',
      count: 0,
      component: SupportPage
    },
    {
      title: 'Logout',
      icon: 'ios-log-out-outline',
      count: 0,
      component: LoginPage
    }
  ];

  constructor(public platform: Platform) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}


