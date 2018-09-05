import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page } from '../Page';

@Component({
  selector: 'page-owned',
  templateUrl: 'owned.html'
})
export class OwnedPage extends Page {

  public static readonly title = "Mes photos";

  public title;

  private imgSources = [
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg",
    "https://peopledotcom.files.wordpress.com/2017/10/juniper-3.jpg?crop=81px,185px,625px,328px&resize=1200,630",
    "https://fakeimg.pl/350x200/ff0000/000",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg",
    "https://fakeimg.pl/350x200/ff0000/000",
    "https://fakeimg.pl/350x200/ff0000/000",
    "https://fakeimg.pl/350x200/ff0000/000",
    "https://fakeimg.pl/350x200/ff0000/000",
  ]

  constructor(public navCtrl: NavController) {
    super(OwnedPage.title);
  }

  pull(): void {
    this.imgSources.push("https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg")
  }

}
