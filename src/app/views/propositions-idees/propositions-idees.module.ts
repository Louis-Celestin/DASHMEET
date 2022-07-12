import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropositionsIdeesRoutingModule } from './propositions-idees-routing.module';
import { ListeIdeesComponent } from './liste-idees/liste-idees.component';
import { ListeIdeesSignaleesComponent } from './liste-idees-signalees/liste-idees-signalees.component';
import { DataTablesModule } from 'angular-datatables';
import { AlertModule } from '@coreui/angular';
import { BadgeModule } from '@coreui/angular';

@NgModule({
  declarations: [ListeIdeesComponent, ListeIdeesSignaleesComponent],
  imports: [
    CommonModule,
    PropositionsIdeesRoutingModule,
    DataTablesModule,
    AlertModule,
    BadgeModule,
  ],
})
export class PropositionsIdeesModule {}
