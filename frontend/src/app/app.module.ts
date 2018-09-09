import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }