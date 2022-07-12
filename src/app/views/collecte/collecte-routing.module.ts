import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCollectesComponent } from './liste-collectes/liste-collectes.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Collectes'
    },
    children: [
      {
        path: '',
        redirectTo: 'liste-collectes'
      },
      {
        path: 'liste-collectes',
        component:ListeCollectesComponent,
        data: {
          title: 'Lister tous les collectes'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollecteRoutingModule { }
