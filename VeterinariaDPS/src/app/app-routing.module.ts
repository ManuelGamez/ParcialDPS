import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
// Import all the components for which navigation service has to be activated
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from "./guard/auth.guard";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifiyEmailComponent } from './verifiy-email/verifiy-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login',component:LoginComponent},
  { path: 'register-user', component: SignUpComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'verifiy-email-address', component: VerifiyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
