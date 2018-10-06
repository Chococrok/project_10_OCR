import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page } from '../Page';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models';
import { PhotoPage } from '../photo/photo';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage extends Page {

  public static readonly title = "Favorites";

  private photos: Photo[] = [];

  constructor(private navCtrl: NavController, private photoService: PhotoService) {
    super(FavoritePage.title);
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
