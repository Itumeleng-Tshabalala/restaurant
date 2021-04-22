import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  navigate : any;
  constructor(private platform : Platform) 
  {
    this.sideMenu();
  }

  
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/tabs/home",
        icon  : "home-outline"
      },
      {
        title : "Home",
        url   : "/tabs/home",
        icon  : "home"
      },
      {
        title : "Home",
        url   : "/tabs/home",
        icon  : "home"
      },
    ]
  }
}
