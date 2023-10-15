import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './core/layouts/default/default.component';
import { GuestComponent } from './core/layouts/guest/guest.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      // { path: 'dashboard', component: DashboardComponent },
      // { path: 'profile', component: ProfileComponent },
      // Outras rotas dentro do layout padrão
    ],
  },
  {
    path: 'guest',
    component: GuestComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      // { path: 'register', component: RegisterComponent },
      // Outras rotas dentro do layout para convidados
    ],
  },
  // Rota padrão para redirecionar
  { path: '**', redirectTo: '/guest/login' },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
