import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemesRoutingModule } from './problemes-routing.module';
import { ListeProblemesComponent } from './liste-problemes/liste-problemes.component';
import { DetailProblemeComponent } from './detail-probleme/detail-probleme.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [ListeProblemesComponent, DetailProblemeComponent],
  imports: [CommonModule, ProblemesRoutingModule, DataTablesModule],
})
export class ProblemesModule {}
