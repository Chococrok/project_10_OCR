import { Injectable } from "@angular/core";
import { Photo } from "../models/photo.model";

@Injectable()
export class PhotoService {

  getEveryPhotos(): Photo[] {
    return [
      {
        name: "snow-fox",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg",
        metaData: {}
      },
      {
        name: "standing-fox",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg",
        metaData: {}
      },
      {
        name: "smiling-fox",
        src: "https://peopledotcom.files.wordpress.com/2017/10/juniper-3.jpg?crop=81px,185px,625px,328px&resize=1200,630",
        metaData: {}
      },
      {
        name: "fake",
        src: "https://fakeimg.pl/350x200/ff0000/000",
        metaData: {}
      },
      {
        name: "snow-fox",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg",
        metaData: {}
      },
      {
        name: "standing-fox",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg",
        metaData: {}
      },
      {
        name: "smiling-fox",
        src: "https://peopledotcom.files.wordpress.com/2017/10/juniper-3.jpg?crop=81px,185px,625px,328px&resize=1200,630",
        metaData: {}
      },
      {
        name: "fake",
        src: "https://fakeimg.pl/350x200/ff0000/000",
        metaData: {}
      },
      {
        name: "snow-fox",
        src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg",
        metaData: {}
      },
      {
        name: "standing-fox",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg",
        metaData: {}
      },
      {
        name: "smiling-fox",
        src: "https://peopledotcom.files.wordpress.com/2017/10/juniper-3.jpg?crop=81px,185px,625px,328px&resize=1200,630",
        metaData: {}
      },
      {
        name: "fake",
        src: "https://fakeimg.pl/350x200/ff0000/000",
        metaData: {}
      }
    ]
  }

}
