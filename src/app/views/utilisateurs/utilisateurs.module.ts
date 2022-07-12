import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { DetailsUtilisateursComponent } from './details-utilisateurs/details-utilisateurs.component';
import { ModifierUtilisateursComponent } from './modifier-utilisateurs/modifier-utilisateurs.component';
import { IconModule } from '@coreui/icons-angular';
import { BadgeModule } from '@coreui/angular';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from '@coreui/angular';
import {
  FormGroup,
  FormsModule,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { AjouterUtilisateursComponent } from './ajouter-utilisateurs/ajouter-utilisateurs.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { AlertModule } from '@coreui/angular';
@NgModule({
  declarations: [
    DetailsUtilisateursComponent,
    ModifierUtilisateursComponent,
    AjouterUtilisateursComponent,
    ListeUtilisateursComponent,
  ],
  imports: [
    CommonModule,
    UtilisateursRoutingModule,
    IconModule,
    BadgeModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    DataTablesModule,
    ModalModule,
  ],
})
export class UtilisateursModule {}
