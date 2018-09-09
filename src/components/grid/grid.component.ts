import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'ft-grid',
  templateUrl: 'grid.component.html',
  //styleUrls: ['grid.component.scss']
})
export class GridComponent {
  @Input() photos: Photo[];
  @Output() reachedBottom = new EventEmitter<void>();
  @Output() itemSelected = new EventEmitter<Photo>();

  doInfinite(infiniteScroll) {
    this.reachedBottom.emit()
    infiniteScroll.complete();
  }

  selectItem(photo: Photo) {
    this.itemSelected.emit(photo);
  }
}
