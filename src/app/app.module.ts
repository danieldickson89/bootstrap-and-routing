import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BluePageComponent } from './blue-page/blue-page.component';
import { GreenPageComponent } from './green-page/green-page.component';
import { OrangePageComponent } from './orange-page/orange-page.component';
import { YellowPageComponent } from './yellow-page/yellow-page.component';
import { RedPageComponent } from './red-page/red-page.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BluePageComponent,
    GreenPageComponent,
    OrangePageComponent,
    YellowPageComponent,
    RedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
