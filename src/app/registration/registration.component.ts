import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

  myRegistrationForm = new FormGroup({
    firstName : new FormControl,
    lastName : new FormControl,
    email : new FormControl,
    password : new FormControl,

  })

 
}
