import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationLieuComponent } from './evaluation-lieu/evaluation-lieu.component';
import { IdentificationComponent } from './identification/identification.component';
import { ListeParkingsComponent } from './liste-parkings/liste-parkings.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cartes',
    },
    children: [
      {
        path: '',
        redirectTo: 'evaluation-lieu',
      },
      {
        path: 'evaluation-lieu',
        component: EvaluationLieuComponent,
        data: {
          title: 'Evaluons le lieu',
        },
      },

      {
        path: 'liste-parkings',
        component: ListeParkingsComponent,
        data: {
          title: 'Liste des parkings',
        },
      },

      {
        path: 'identification',
        component: IdentificationComponent,
        data: {
          title: 'Identifions le lieu',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteRoutingModule {}
