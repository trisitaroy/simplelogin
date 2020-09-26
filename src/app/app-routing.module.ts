import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {AuthguardGuard} from './authguard.guard'

const routes: Routes = [
  {path: '', redirectTo :'/login',pathMatch:"full"},
  {path: 'login', component :LoginComponent},
  {path: 'dashboard', component :DashboardComponent,canActivate:[AuthguardGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
