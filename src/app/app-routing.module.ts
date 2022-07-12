import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { ForgotPasswordComponent } from './views/pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './views/pages/reset-password/reset-password.component';
//Sondages Routes
import { SondagesModule } from './views/sondages/sondages.module';
import { IsAuthentificatedGuard } from 'src/app/_auth/is-authentificated.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [IsAuthentificatedGuard],
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'sondages',
        loadChildren: () =>
          import('./views/sondages/sondages.module').then(
            (m) => m.SondagesModule
          ),
      },
      {
        path: 'utilisateurs',
        loadChildren: () =>
          import('./views/utilisateurs/utilisateurs.module').then(
            (m) => m.UtilisateursModule
          ),
      },
      {
        path: 'projets',
        loadChildren: () =>
          import('./views/projets/projets.module').then((m) => m.ProjetsModule),
      },
      {
        path: 'informations',
        loadChildren: () =>
          import('./views/informations/informations.module').then(
            (m) => m.InformationsModule
          ),
      },
      {
        path: 'problemes',
        loadChildren: () =>
          import('./views/problemes/problemes.module').then(
            (m) => m.ProblemesModule
          ),
      },
      {
        path: 'propositions-idees',
        loadChildren: () =>
          import('./views/propositions-idees/propositions-idees.module').then(
            (m) => m.PropositionsIdeesModule
          ),
      },
      {
        path: 'collecte',
        loadChildren: () =>
          import('./views/collecte/collecte.module').then(
            (m) => m.CollecteModule
          ),
      },
      {
        path: 'carte',
        loadChildren: () =>
          import('./views/carte/carte.module').then((m) => m.CarteModule),
      },
      {
        path: 'services-administratifs',
        loadChildren: () =>
          import(
            './views/services-administratifs/services-administratifs.module'
          ).then((m) => m.ServicesAdministratifsModule),
      },
    ],
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot page',
    },
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      title: 'Forgot page',
    },
  },

  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
