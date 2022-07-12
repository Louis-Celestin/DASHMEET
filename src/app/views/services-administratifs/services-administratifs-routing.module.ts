import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutDemarcheComponent } from './acte-deces/ajout-demarche/ajout-demarche.component';
import { ListeDemandesDecesComponent } from './acte-deces/liste-demandes-deces/liste-demandes-deces.component';
import { AjouterDemarcheComponent } from './acte-naissance/ajouter-demarche/ajouter-demarche.component';
import { ListeDemandesLegalisationComponent } from './legislations/liste-demandes-legalisation/liste-demandes-legalisation.component';
import { ListeDemandesNaissanceComponent } from './acte-naissance/liste-demandes-naissance/liste-demandes-naissance.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Services administratifs'
    },
    children: [
      {
        path: '',
        redirectTo: 'ajout-demarche'
      },
       //Acte de décès
      {
        path: 'ajout-demarche',
        component:AjoutDemarcheComponent,
        data: {
          title: 'Ajouter une démarche'
        }
      },
      {
        path: 'liste-demandes',
        component: ListeDemandesDecesComponent,
        data: {
          title: 'Liste des décès'
        }
      },

       //Acte de legalisation
      {
        path: 'ajouter-demarche',
        component:AjouterDemarcheComponent,
        data: {
          title: 'Ajouter une démarche'
        }
      },

      {
        path: 'liste-demandes-legalisation',
        component:ListeDemandesLegalisationComponent,
        data: {
          title: 'Liste des légalisation'
        }
      },

      //Acte de naissance
      {
        path: 'ajouter-demarche',
        component:AjoutDemarcheComponent,
        data: {
          title: 'Ajouter une démarche'
        }
      },
      {
        path: 'liste-demandes-naissance',
        component: ListeDemandesNaissanceComponent,
        data: {
          title: "Liste des demandes au niveau de l'extrait"
        }
      },

    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesAdministratifsRoutingModule { }
