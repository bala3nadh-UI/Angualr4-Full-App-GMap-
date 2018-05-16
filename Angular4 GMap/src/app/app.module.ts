import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/api.service';
import { AgmCoreModule } from '@agm/core';

import { routing } from "./app.route";

import { AppComponent } from './app.component';
import { NavComponent } from './modules/nav/nav.component';
import { GMapComponent } from './modules/gmap/gmap.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: environment.gKey   
    }),
    routing

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }