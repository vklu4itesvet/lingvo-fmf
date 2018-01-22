import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavAreaComponent } from './nav.area/nav.area.component';

const appRoutes: Routes = [
  { path: 'area', component: NavAreaComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
