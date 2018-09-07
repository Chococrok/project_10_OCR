import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ft-grid',
  templateUrl: 'grid.component.html',
  //styleUrls: ['grid.component.scss']
})
export class GridComponent {
  @Input() imgSources: [string];
  @Output() reachedBottom = new EventEmitter<void>();
  @Output() itemSelected = new EventEmitter<string>();

  doInfinite(infiniteScroll) {
    this.reachedBottom.emit()
    infiniteScroll.complete();
  }

  selectItem(src) {
    this.itemSelected.emit(src);
  }
}
