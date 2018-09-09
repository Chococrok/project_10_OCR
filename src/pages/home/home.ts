import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page } from '../Page';
import { PhotoPage } from '../photo/photo';
import { Photo } from '../../models/photo.model';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends Page {

  public static readonly title = "Acceuil";

  private photos: Photo[] = [];

  constructor(private navCtrl: NavController, private photoService: PhotoService) {
    super(HomePage.title);
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
