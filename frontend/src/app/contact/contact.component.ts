import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contact = {
    id:'',
    first_name: '',
    last_name: '',
    phone: ''
  };
  ContactForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) {

  }

  ngOnInit() {
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
    this.getContact();

  }

  getContact() {
    this.route.params.subscribe(params => {
      console.log(params["id"]);
      this.api.getWithId('contacts', params['id']).subscribe((res) => {
        console.log(res);
        this.contact = res.data;
        console.log(this.contact);

        this.ContactForm.patchValue(
          {
            'first_name': this.contact.first_name,
            'last_name': this.contact.last_name,
            'phone': this.contact.phone,
          });
      })
    })
  }

  updateContact() {
    this.api.putAny('contacts', this.contact.id, this.ContactForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['contacts']);
    })
  }

}
