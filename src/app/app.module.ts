import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShineComponent } from './components/shine/shine.component';
import { GloryComponent } from './components/glory/glory.component';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NoviaComponent } from './components/novia/novia.component';
import { BlueJewlleryComponent } from './components/blue-jewllery/blue-jewllery.component';

@NgModule({
  declarations: [
    AppComponent,
    ShineComponent,
    GloryComponent,
    NoviaComponent,
    BlueJewlleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
