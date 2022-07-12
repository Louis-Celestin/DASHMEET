import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProblemesComponent } from './liste-problemes/liste-problemes.component';
import { DetailProblemeComponent } from './detail-probleme/detail-probleme.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Problèmes',
    },
    children: [
      {
        path: '',
        redirectTo: 'liste-problemes',
      },
      {
        path: 'liste-problemes',
        component: ListeProblemesComponent,
        data: {
          title: 'Listes des problèmes',
        },
      },
      {
        path: 'detail-probleme/:id',
        component: DetailProblemeComponent,
        data: {
          title: 'Detail du probleme',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemesRoutingModule {}
