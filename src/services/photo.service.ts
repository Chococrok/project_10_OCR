import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database"
import { Photo } from "../models";

@Injectable()
export class PhotoService {

  constructor(private db: AngularFireDatabase) { }

  getEveryPhotos(): Photo[] {
    this.db.list('foo').push({'toto': 'tata'});
    this.db.object('foo').set({'toto': 'tata'});
    console.log('I am pushing !!!!')
    return [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg",
        metaData: {
          title: "snow-fox",
          date: new Date(),
          location: "here",
          comment: "a fox in the snow"
        }
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg",
        metaData: {
          title: "standing-fox",
          date: new Date(),
          location: "there",
          comment: "an elegatn fox"
        }
      },
      {
        src: "https://peopledotcom.files.wordpress.com/2017/10/juniper-3.jpg?crop=81px,185px,625px,328px&resize=1200,630",
        metaData: {
          title: "smiling-fox",
          date: new Date(),
          location: "over there",
          comment: "an smiling fox"
        }
      },
      {
        src: "https://fakeimg.pl/350x200/ff0000/000",
        metaData: {
          title: "fake",
          date: new Date(),
          location: "not there",
          comment: "a red square"
        }
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg",
        metaData: {
          title: "snow-fox",
          date: new Date(),
          location: "here",
          comment: "a fox in the snow"
        }
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg",
        metaData: {
          title: "standing-fox",
          date: new Date(),
          location: "there",
          comment: "an elegatn fox"
        }
      },
      {
        src: "https://peopledotcom.files.wordpress.com/2017/10/juniper-3.jpg?crop=81px,185px,625px,328px&resize=1200,630",
        metaData: {
          title: "smiling-fox",
          date: new Date(),
          location: "over there",
          comment: "an smiling fox"
        }
      },
      {
        src: "https://fakeimg.pl/350x200/ff0000/000",
        metaData: {
          title: "fake",
          date: new Date(),
          location: "not there",
          comment: "a red square"
        }
      },{
        src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg",
        metaData: {
          title: "snow-fox",
          date: new Date(),
          location: "here",
          comment: "a fox in the snow"
        }
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg",
        metaData: {
          title: "standing-fox",
          date: new Date(),
          location: "there",
          comment: "an elegatn fox"
        }
      },
      {
        src: "https://peopledotcom.files.wordpress.com/2017/10/juniper-3.jpg?crop=81px,185px,625px,328px&resize=1200,630",
        metaData: {
          title: "smiling-fox",
          date: new Date(),
          location: "over there",
          comment: "an smiling fox"
        }
      },
      {
        src: "https://fakeimg.pl/350x200/ff0000/000",
        metaData: {
          title: "fake",
          date: new Date(),
          location: "not there",
          comment: "a red square"
        }
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg",
        metaData: {
          title: "snow-fox",
          date: new Date(),
          location: "here",
          comment: "a fox in the snow"
        }
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg",
        metaData: {
          title: "standing-fox",
          date: new Date(),
          location: "there",
          comment: "an elegatn fox"
        }
      },
      {
        src: "https://peopledotcom.files.wordpress.com/2017/10/juniper-3.jpg?crop=81px,185px,625px,328px&resize=1200,630",
        metaData: {
          title: "smiling-fox",
          date: new Date(),
          location: "over there",
          comment: "an smiling fox"
        }
      },
      {
        src: "https://fakeimg.pl/350x200/ff0000/000",
        metaData: {
          title: "fake",
          date: new Date(),
          location: "not there",
          comment: "a red square"
        }
      },
    ]
  }

}
