import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page } from '../Page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends Page {

  public static readonly title = "Acceuil";

  public title;

  constructor(public navCtrl: NavController) {
    super(HomePage.title);
  }

}
