import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './core/layouts/default/default.component';
import { GuestComponent } from './core/layouts/guest/guest.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './features/login/login.component';
import { GuestContentComponent } from './features/guest-content/guest-content.component';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
    ],
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      { path: '', component: GuestContentComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
