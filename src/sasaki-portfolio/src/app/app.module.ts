import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { TopComponent } from './pages/top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TopComponent]
})
export class AppModule { }
