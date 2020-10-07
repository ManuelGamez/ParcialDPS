import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
// Import all the components for which navigation service has to be activated
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { AuthGuard } from "./guard/auth.guard";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifiyEmailComponent } from './verifiy-email/verifiy-email.component';
import {FacturaComponent} from './components/factura/factura.component';
import {TicketComponent} from './components/ticket/ticket.component';
import {SliderComponent} from './components/slider/slider.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login',component:LoginComponent},
  { path: 'register-user', component: SignUpComponent },
{ path: 'clientes', component: ClientesComponent },
{ path: 'cliente-list', component: ClienteListComponent },
{path: 'factura', component: FacturaComponent},
{path: 'ticket',component:TicketComponent},
{path: 'inicio',component:SliderComponent},

{ path: 'cliente', component: ClienteComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'verifiy-email-address', component: VerifiyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
