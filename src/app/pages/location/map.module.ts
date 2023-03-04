import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {LocationComponent} from "./map.component";

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    LocationComponent
  ],
  bootstrap: []
})
export class LocationModule { }
