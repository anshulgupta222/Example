import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Autorization.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private authService : AuthService){}
  myForm = new FormGroup({
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])

  });

  login():void {
    console.log("From Component",this.myForm.value);
    if(this.myForm.valid){
    console.log("Form is valid");
    let credential = {email:this.myForm.get('email') , password :this.myForm.get('password')};
    this.authService.login(credential);
    //this.authService.login(this.myForm.value);
  }
  else{
    this.myForm.setErrors({});
  }
  }

}
