import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();
  title = 'ericPierCarpentry';

  clientProfileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new  FormControl(''),
    email: new FormControl(''),
    phoneNum: new FormControl('', Validators.required),
    comment: new FormControl('')
  });

  onSubmit() {
    //TODO: Use EventEmitter with form value
    //console.log(this.clientProfileForm.controls['firstName'].value);
    alert('Thank you! We will contact you shortly!');
  }
}

export interface Post {
  firstName: string;
  phone: string;
}