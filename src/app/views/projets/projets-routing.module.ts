import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutProjetComponent } from './ajout-projet/ajout-projet.component';
import { ListeProjetsComponent } from './liste-projets/liste-projets.component';
import { ModifierProjetComponent } from './modifier-projet/modifier-projet.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Projets',
    },
    children: [
      {
        path: '',
        redirectTo: 'ajout-projet',
      },
      {
        path: 'ajout-projet',
        component: AjoutProjetComponent,
        data: {
          title: 'Ajouter un projet',
        },
      },
      {
        path: 'liste-projets',
        component: ListeProjetsComponent,
        data: {
          title: 'Liste des projets',
        },
      },
      {
        path: 'modifier-projet/:id',
        component: ModifierProjetComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetsRoutingModule {}
