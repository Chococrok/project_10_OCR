import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page } from '../Page';
import { PhotoPage } from '../photo/photo';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'page-owned',
  templateUrl: 'owned.html'
})
export class OwnedPage extends Page {

  public static readonly title = "Mes photos";

  private photos: Photo[] = [];

  constructor(private navCtrl: NavController, private photoService: PhotoService) {
    super(OwnedPage.title);
  }

  ngOnInit() {
    this.getEveryPhotos()
  }

  getEveryPhotos(): void {
    this.photos = this.photos.concat(this.photoService.getEveryPhotos());
  }

  navigate(photo: Photo) {
    this.navCtrl.push(PhotoPage, { photo });
  }

}
