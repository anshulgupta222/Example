import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
login(credential: { email: string |null|undefined ; password: string|null|undefined}): void {
    console.log('From Service', credential);
  }
}
