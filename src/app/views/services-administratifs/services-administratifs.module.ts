import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesAdministratifsRoutingModule } from './services-administratifs-routing.module';
import { AjouterDemarcheComponent } from './acte-naissance/ajouter-demarche/ajouter-demarche.component';
import { AjoutDemarcheComponent } from './acte-deces/ajout-demarche/ajout-demarche.component';
import { ListeDemandesLegalisationComponent } from './legislations/liste-demandes-legalisation/liste-demandes-legalisation.component';
import { ListeDemandesDecesComponent } from './acte-deces/liste-demandes-deces/liste-demandes-deces.component';
import { ListeDemandesNaissanceComponent } from './acte-naissance/liste-demandes-naissance/liste-demandes-naissance.component';
import { EditerActeNaissanceComponent } from './acte-naissance/editer-acte-naissance/editer-acte-naissance.component';
import { AffichageExtraitComponent } from './acte-naissance/affichage-extrait/affichage-extrait.component';





@NgModule({
  declarations: [
    AjouterDemarcheComponent,
    AjoutDemarcheComponent,
    ListeDemandesLegalisationComponent,
    ListeDemandesDecesComponent,
    ListeDemandesNaissanceComponent,
    EditerActeNaissanceComponent,
    AffichageExtraitComponent,
  ],
  imports: [
    CommonModule,
    ServicesAdministratifsRoutingModule
  ]
})
export class ServicesAdministratifsModule { }
