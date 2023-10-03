import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pressedButton: boolean = false;
  animales: boolean = true;
  numeros: boolean = false;
  colores: boolean = false;
  spanish: boolean = true;
  portuguese: boolean = false;
  english: boolean = false;
  language: string = '_esp';
  audioPath: string = '';
  sound: any;

  constructor(private user: UserService) {}

  ngOnInit(): void {
    StatusBar.hide()
  }

  logoutUser() {
    this.user.logout();
  } // end of logoutUser

  playSoundTheme(typeOfSound: string) {
    if (this.animales) {
      this.audioPath = '../../../assets/audios/animales/' + typeOfSound + this.language + '.mp3';
      this.sound = new Audio(this.audioPath);
      this.sound.play();
    } else if (this.numeros) {
      this.audioPath =
      this.audioPath = '../../../assets/audios/numeros/' + typeOfSound + this.language + '.mp3';
      this.sound = new Audio(this.audioPath);
      this.sound.play();
    } else if (this.colores) {
      this.audioPath =
      this.audioPath = '../../../assets/audios/colores/' + typeOfSound + this.language + '.mp3';
      this.sound = new Audio(this.audioPath);
      this.sound.play();
    }
  } // end of playSound

  chooseLanguage(languageOption: number) {
    switch (languageOption) {
      case 1:
        this.spanish = false;
        this.portuguese = true;
        this.english = false;
        this.language = '_por';
        break;
      case 2:
        this.spanish = false;
        this.portuguese = false;
        this.english = true;
        this.language = '_eng';
        break;
      case 3:
        this.spanish = true;
        this.portuguese = false;
        this.english = false;
        this.language = '_esp';
        break;
    }
  } // end of chooseLanguage

  chooseTheme(themeOption: number) {
    this.pressedButton = true;
    setTimeout(() => {
      this.pressedButton = false;
      switch (themeOption) {
        case 1:
          this.animales = false;
          this.numeros = true;
          this.colores = false;
          break;
        case 2:
          this.animales = false;
          this.numeros = false;
          this.colores = true;
          break;
        case 3:
          this.animales = true;
          this.numeros = false;
          this.colores = false;
          break;
      }
    }, 2000);
  } // end of chooseTheme

  chooseAnimal(animal: string) {
    this.playSoundTheme(animal);
  } // end of chooseAnimal

  chooseColor(color: string) {
    this.playSoundTheme(color);
  } // end of chooseColor

  chooseNumber(number: string) {
    this.playSoundTheme(number);
  } // end of chooseNumber

}
