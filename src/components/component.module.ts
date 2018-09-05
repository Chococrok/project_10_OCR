import { NgModule } from "@angular/core";
import { GridComponent } from "./grid/grid.component";
import { IonicModule } from "ionic-angular";

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    IonicModule.forRoot(GridComponent)
  ],
  exports: [
    GridComponent
  ]
})
export class ComponentModule { }
