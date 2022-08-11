import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailsComponent } from './donut-details/donut-details.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPeopleDetailsComponent } from './famous-people-details/famous-people-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = 
[
  {path: 'donuts', component: DonutsComponent},
  //id id a value/variable passed through the url
  {path: 'donuts/:id', component: DonutDetailsComponent},
  //default path
  {path: '', redirectTo: '/donuts', pathMatch: 'full'}, 
  //if page not found
  {path: '**', component: DonutsComponent}  //** if this matches anything else, go to this page: PageNotFound
]

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutDetailsComponent,
    FamousPeopleComponent,
    FamousPeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
