import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contacts = [];
  ContactForm: FormGroup

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getContacts();

    this.ContactForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required
      ]),
      last_name: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required
      ])
    });

  }

  getContacts() {
    this.api.getAll('contacts').subscribe((res) => {
      console.log(res);
      this.contacts = res.data;
    })
  }

  addContact() {
    console.log(this.ContactForm.value)
    this.api.postAny('contacts', this.ContactForm.value).subscribe((res) => {
      console.log(res);
      this.getContacts();
      this.ContactForm.reset();
      $('#addContactModal').hide();
      $('.modal-backdrop').hide();
    })
  }

  search(event: any) {
    let leters = event.target.value;
    console.log(leters);
    console.log(leters.length);
    if (leters.length > 2) {
      this.api.getSearch('search-contacts', leters).subscribe((res) => {
        console.log(res);
        this.contacts = res.data;
      })
    } else {
      this.api.getAll('contacts').subscribe((res) => {
        console.log(res);
        this.contacts = res.data;
      })
    }
  }
  deleteContact(id){
    var r = confirm("Are you sure you want to delete it?");
    if (r == true) {
      this.api.deleteAny('contacts',id).subscribe((res) => {
        this.api.getAll('contacts').subscribe((res) => {
          this.contacts = res.data;
        })
      })
    } else {
       console.log('close');
    }
  }

}
