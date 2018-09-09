import { Page } from "../Page";
import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { Photo } from "../../models/photo.model";

@Component({
  selector: 'photo-page',
  templateUrl: 'photo.html',
})
export class PhotoPage extends Page {

  public static readonly title: string = "Photo";

  photo: Photo;

  constructor(private navParams: NavParams) {
    super(PhotoPage.title);
    this.photo = navParams.get('photo');
  }
}
