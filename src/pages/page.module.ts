import { NgModule } from "@angular/core";
import { HomePage } from "./home/home";
import { FavoritePage } from "./favorite/favorite";
import { OwnedPage } from "./owned/owned";
import { PhotoPage } from "./photo/photo";
import { IonicPageModule } from "ionic-angular";
import { ComponentModule } from "../components/component.module";

@NgModule({
  declarations: [
    HomePage,
    FavoritePage,
    OwnedPage,
    PhotoPage,
  ],
  imports: [
    ComponentModule,
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(FavoritePage),
    IonicPageModule.forChild(OwnedPage),
    IonicPageModule.forChild(PhotoPage),
  ],
  exports: [
    HomePage,
    FavoritePage,
    OwnedPage,
    PhotoPage,
  ]
})
export class PageModule { }
