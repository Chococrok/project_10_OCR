import { Page } from "../Page";
import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'photo-page',
  templateUrl: 'photo.html',
})
export class PhotoPage extends Page {

  public static readonly title: string = "Photo";

  title: string;
  imgSource: string;

  constructor(private navParams: NavParams) {
    super(PhotoPage.title);
    this.imgSource = navParams.get('imgSource');
  }
}
