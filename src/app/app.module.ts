import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapModule} from "./pages/map/map.module";
import {MarkerComponent} from "./pages/marker/marker.component";
import {DataService} from "./pages/services/data.service";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {LocationModule} from "./pages/location/location.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MarkerComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MapModule,
    LocationModule,
    LeafletModule
  ],
  providers: [DataService],
  exports: [
    LeafletModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
