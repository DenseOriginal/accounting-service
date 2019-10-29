import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

import { AngularFireAuthGuard, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
const redirectAuthorizedToHistory = () => redirectLoggedInTo(['history']);

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent, ...canActivate(redirectAuthorizedToHistory()) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
