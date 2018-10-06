import { NgModule } from "@angular/core";
import { HomePage } from "./home/home";
import { FavoritePage } from "./favorite/favorite";
import { OwnedPage } from "./owned/owned";
import { PhotoPage } from "./photo/photo";
import { IonicPageModule } from "ionic-angular";
import { ComponentModule } from "../components/component.module";
import { ProfilePage } from "./profile/profile";
import { LogInPage } from "./log-in.ts/log-in";

@NgModule({
  declarations: [
    HomePage,
    FavoritePage,
    OwnedPage,
    PhotoPage,
    ProfilePage,
    LogInPage,
  ],
  imports: [
    ComponentModule,
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(FavoritePage),
    IonicPageModule.forChild(OwnedPage),
    IonicPageModule.forChild(PhotoPage),
    IonicPageModule.forChild(ProfilePage),
    IonicPageModule.forChild(LogInPage),
  ],
  exports: [
    HomePage,
    FavoritePage,
    OwnedPage,
    PhotoPage,
    ProfilePage,
    LogInPage,
  ]
})
export class PageModule { }
