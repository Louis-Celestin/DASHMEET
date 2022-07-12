import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-projets',
  templateUrl: './liste-projets.component.html',
  styleUrls: ['./liste-projets.component.scss'],
})
export class ListeProjetsComponent implements OnInit {
  projs: any;
  dtOptions: DataTables.Settings = {};

  //condition sur l'affichage de l'alert
  alert: boolean = false;

  constructor(private projetService: ProjetService, private router: Router) {}

  ngOnInit(): void {
    //Datatables
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.getAllProjets();
  }

  getAllProjets() {
    this.projetService.list().subscribe(
      (projs: any) => {
        this.projs = projs;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteProjet(id: number) {
    this.projetService.delete(id).subscribe((data) => {
      console.log(data.id);
      this.getAllProjets();
    });
    //Affichage de l'alert
    this.alert = true;
  }

  updateProjet(id: number) {
    this.router.navigate(['modifier-projet', id]);
  }

  //Function d'alert
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
