import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeeService } from 'src/app/services/idee-service/idee.service';
import { PropositionIdee } from 'src/app/models/idee';

@Component({
  selector: 'app-liste-idees',
  templateUrl: './liste-idees.component.html',
  styleUrls: ['./liste-idees.component.scss'],
})
export class ListeIdeesComponent implements OnInit {
  //Instance de notre models
  idee!: PropositionIdee[];
  //Instance du datatables
  dtOptions: DataTables.Settings = {};
  id!: number;
  show_idee: PropositionIdee = new PropositionIdee();
  //condition sur l'affichage de l'alert
  alert: boolean = false;

  constructor(
    private ideeService: IdeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Datatables
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.getIdee();
  }

  private getIdee() {
    this.ideeService.getIdeeList().subscribe((data) => {
      this.idee = data;
      console.log(this.idee);
    });
  }

  //Function de SUPPRESSION

  getIdeeDelete(id: number) {
    this.ideeService.getIdeeDelete(id).subscribe((data) => {
      console.log(data);
      this.getIdee();
      // this.getIdeeShow();
    });

    //Affichage de l'alert
    this.alert = true;
  }

  private getIdeeShow() {
    this.id = this.route.snapshot.params['id'];
    this.ideeService.getIdeeById(this.id).subscribe((data) => {
      this.show_idee = data;
      console.log(this.show_idee);
    });
  }

  //METHODE POUR L'ALERTE DE SUPPRESSION
  //visible: boolean = false;

  // visible = true;

  // onVisibleChange(eventValue: boolean) {
  //   this.visible = eventValue;
  // }

  // onResetDismiss() {
  //   this.visible = true;
  // }

  visible = false;

  onVisibleChange(eventValue: boolean) {
    this.visible = eventValue;
  }

  onResetDismiss() {
    this.visible = true;
  }

  //function de fermerture du boutton
  closeAlert() {
    this.alert = true;
  }
}
