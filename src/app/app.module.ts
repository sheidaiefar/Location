import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapModule} from "./pages/map/map.module";
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {MarkerComponent} from "./pages/marker/marker.component";
import {DataService} from "./pages/services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    MarkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    LeafletModule,
    LeafletModule,
  ],
  providers: [DataService],
  exports: [
    LeafletModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
