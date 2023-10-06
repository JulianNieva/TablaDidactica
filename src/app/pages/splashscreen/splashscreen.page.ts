import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
    StatusBar.hide();
  }
  
  ionViewDidEnter() {
    SplashScreen.hide();
    setTimeout(() => {
      this.navCtrl.navigateRoot(['/login']);
    }, 4000);
  }

}
