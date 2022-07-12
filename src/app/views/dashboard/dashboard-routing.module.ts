import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { AgentsBoardComponent } from './agents-board/agents-board.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { DashboardComponent } from './dashboard.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: $localize`Tableau de bord`,
    },
  },

  // path de l'administrateur en fonction du dashboard
  {
    path: 'admin-board',
    component: DashboardComponent,
    data: {
      title: $localize`Tableau de bord administrateur`,
    },
  },

  // path de l'agent en fonction du dashboard
  {
    path: 'agents-board',
    component: AgentsBoardComponent,
    data: {
      title: $localize`Tableau de bord agents`,
    },
  },

  //Pofile de l'utilisateurs
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: $localize`profile utilisateurs`,
    },
  },

  //Pofile de l'utilisateurs
  {
    path: 'edit-profil/:id',
    component: EditProfilComponent,
    data: {
      title: $localize`modifier utilisateurs`,
    },
  },

  //Change password
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    data: {
      title: $localize`modifier utilisateurs`,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
