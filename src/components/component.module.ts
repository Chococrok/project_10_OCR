import { NgModule } from "@angular/core";
import { GridComponent } from "./grid/grid.component";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    IonicPageModule.forChild(GridComponent)
  ],
  exports: [
    GridComponent
  ]
})
export class ComponentModule { }
