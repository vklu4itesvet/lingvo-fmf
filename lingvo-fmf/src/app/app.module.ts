import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavAreaComponent } from './nav.area/nav.area.component';
import { AddItemsComponent } from './add-items/add-items.component';

const appRoutes: Routes = [
  { path: 'add', component: AddItemsComponent },
  { path: '', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavAreaComponent,
    AddItemsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
