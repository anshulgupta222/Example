import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordCheckComponent } from './password-check/password-check.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'passwordCheck', component: PasswordCheckComponent },
  { path: 'Signup', component: RegistrationComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
