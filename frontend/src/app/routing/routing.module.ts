import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },

  { path: 'contacts', component: ContactsComponent },

  { path: 'contact/:id', component: ContactComponent },  

  { path: '**', redirectTo: 'contacts', pathMatch: 'full' }
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }