import { Component } from '@angular/core';

@Component({
  selector: 'ft-grid',
  templateUrl: 'grid.component.html',
  //styleUrls: ['grid.component.scss']
})
export class GridComponent {
  astres = [
    { b: "https://upload.wikimedia.org/wikipedia/commons/0/03/Vulpes_vulpes_laying_in_snow.jpg" },
    { b: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg" },
    { b: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg", },
    { b: "https://peopledotcom.files.wordpress.com/2017/10/juniper-3.jpg?crop=81px,185px,625px,328px&resize=1200,630", },
    { b: "https://fakeimg.pl/350x200/ff0000/000", },
    { b: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg", },
    { b: "https://fakeimg.pl/350x200/ff0000/000", },
    { b: "https://fakeimg.pl/350x200/ff0000/000", },
    { b: "https://fakeimg.pl/350x200/ff0000/000", },
    { b: "https://fakeimg.pl/350x200/ff0000/000", },
  ]

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    this.astres.push( {b: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/399px-Fox_study_6.jpg"} );
    infiniteScroll.complete();
  }
}
