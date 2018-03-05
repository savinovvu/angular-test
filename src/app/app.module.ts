import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routes';
import { View1Component } from './components/view1/view1.component';
import { View2Component } from './components/view2/view2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MembersComponent } from './components/members/members.component';
import { PersonComponent } from './components/person/person.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    NavbarComponent,
    MembersComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
