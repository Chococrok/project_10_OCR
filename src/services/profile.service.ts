import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database"
import { Profile } from "../models";

@Injectable()
export class ProfileService {

  constructor(private db: AngularFireDatabase) { }

  profile: Profile;

  connect() {
    this.profile = {
      avatarSrc: 'https://fakeimg.pl/350x300/99ffff/000/',
      email: 'toto@tata.com',
      name: 'zozo'
    };
  }

  getProfile(): Profile {
    this.db.list('foo').push({'toto': 'tata'});
    this.db.object('foo').set({'toto': 'tata'});
    this.connect()
    return undefined;
  }

}
