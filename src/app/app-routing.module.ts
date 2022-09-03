import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './clients/pages/page-list-clients/page-list-clients.component';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: PageSignInComponent },
  //créer routes pour sign up
  { path: 'sign-up', component: PageSignUpComponent },
  //créer routes pour reset
  { path: 'reset', component: PageResetPasswordComponent },
  //créer routes pour forgot
  { path: 'forgot', component: PageForgotPasswordComponent },

  //lazy loading
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  //pour clients module
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },

  //chemin **
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
      {preloadingStrategy: PreloadAllModules}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){
    console.log(this.router.config, 'tableau de routes');
  }
}
