import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterInformationComponent } from './ajouter-information/ajouter-information.component';
import { ListeInformationsComponent } from './liste-informations/liste-informations.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Informations',
    },
    children: [
      {
        path: '',
        redirectTo: 'ajouter-information',
      },
      {
        path: 'ajouter-information',
        component: AjouterInformationComponent,
        data: {
          title: 'Ajouter une informaiton',
        },
      },

      {
        path: 'liste-informations',
        component: ListeInformationsComponent,
        data: {
          title: 'Lister les informations',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationsRoutingModule {}
