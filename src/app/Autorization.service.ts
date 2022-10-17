import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private toastr : ToastrService){}
login(credential: { email: string | null ; password: string|null}): void {
    console.log('From Service', credential);
    localStorage.setItem('credential',JSON.stringify(credential));
    let userDetails:any = localStorage.getItem('credential');
    console.log(JSON.parse(userDetails).email);
    if (JSON.parse(userDetails).email === 'anshulguptaa222@gmail.com'){
      this.toastr.success("Access Granted");
    }
    else {
      this.toastr.error("Access is denied");
    }
  }
}
