import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { SearchComponent } from './search/search.component';
import { MatSliderModule } from '@angular/material/slider';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    TopbannerComponent,
    SearchComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
