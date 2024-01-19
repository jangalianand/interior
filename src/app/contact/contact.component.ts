import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  };
  submitForm() {
    // Handle form submission logic here (e.g., send data to a backend server)
    // console.log('Form submitted!');
    console.log('Form Data:', this.formData);

  }
}
