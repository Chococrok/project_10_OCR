import { Component } from '@angular/core';

@Component({
  selector: 'ft-grid',
  templateUrl: 'grid.component.html',
  //styleUrls: ['grid.component.scss']
})
export class GridComponent {
  astres = [
    { b: "b", },
    { b: "c" },
    { b: "dhfsoi,csjdfcswlhdfhclxw,f,ushfl,hdfl,dfkjclfjf djfldsjflkjcwflwjdsf hlkhflwfw", },
    { b: "f", },
    { b: "e", },
    { b: "g", },
    { b: "h", },
  ]

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    this.astres.push( {b: "HO"} );
    infiniteScroll.complete();
  }
}
