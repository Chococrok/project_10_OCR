import { Page } from "../Page";
import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { Profile } from "../../models";
import { ProfileService } from "../../services";

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html',
})
export class ProfilePage extends Page {

  public static readonly title: string = 'Profile';

  profile: Profile;

  constructor(private navParams: NavParams, private profileService: ProfileService) {
    super(ProfilePage.title);
    this.profile = navParams.get("profile");
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR');
  }
}
