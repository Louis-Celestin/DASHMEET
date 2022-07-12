import { DetailSondageComponent } from './detail-sondage/detail-sondage.component';
import { AjoutSondageComponent } from './ajouter-sondage/ajouter-sondage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeSondagesComponent } from './liste-sondages/liste-sondages.component';
import { MesSondagesComponent } from './mes-sondages/mes-sondages.component';
import { MajSondageComponent } from './maj-sondage/maj-sondage.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sondages'
    },
    children: [
      {
        path: '',
        redirectTo: 'ajouter-sondage'
      },
      {
        path: 'ajouter-sondage',
        component:AjoutSondageComponent,
        data: {
          title: 'Ajouter un sondage'
        }
      },
      {
        path: 'mes-sondages',
        component: MesSondagesComponent,
        data: {
          title: 'Mes sondages'
        }
      },
      {
        path: 'liste-sondages',
        component: ListeSondagesComponent,
        data: {
          title: 'Liste des sondages'
        }
      },
      {
        path: 'maj-sondage',
        component:MajSondageComponent,
        data: {
          title: 'mise a jour sondage'
        }
      },
      {
        path: 'detail-sondage/:id',
        component:DetailSondageComponent,
        data: {
          title: 'Detail du sondage'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SondagesRoutingModule { }
