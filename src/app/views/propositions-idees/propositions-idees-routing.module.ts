import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeIdeesSignaleesComponent } from './liste-idees-signalees/liste-idees-signalees.component';
import { ListeIdeesComponent } from './liste-idees/liste-idees.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: "Propositions d'idée",
    },
    children: [
      {
        path: '',
        redirectTo: 'liste-idees',
      },
      {
        path: 'liste-idees',
        component: ListeIdeesComponent,
        data: {
          title: 'Mes sondages',
        },
      },
      {
        path: 'liste-idees-signalees',
        component: ListeIdeesSignaleesComponent,
        data: {
          title: 'Liste des sondages',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropositionsIdeesRoutingModule {}
