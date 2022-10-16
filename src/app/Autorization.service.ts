import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
login(credential: { email: string | null ; password: string|null}): void {
    console.log('From Service', credential);
  }
}
