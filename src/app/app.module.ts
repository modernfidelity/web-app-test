import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing,
    appRoutingProviders }  from './app.routing';


// Components
import { NewsComponent } from './news/news.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

// Modules
import { EventsModule } from "./events/events.module";

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // EventsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
