import { NgModule } from "@angular/core";
import { PhotoService } from "./photo.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { configuration } from "../config/config";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(configuration.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    PhotoService,
  ],
})
export class ServiceModule { }
