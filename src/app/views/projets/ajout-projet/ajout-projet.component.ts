import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../projet.service';
import { Projet } from '../projet';

@Component({
  selector: 'app-ajout-projet',
  templateUrl: './ajout-projet.component.html',
  styleUrls: ['./ajout-projet.component.scss'],
})
export class AjoutProjetComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  projects: any;
  projets: Projet = new Projet();

  //condition sur l'affichage de l'alert
  alert: boolean = false;

  constructor(
    private projetService: ProjetService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllProjets();
    this.saveProjet();
  }

  getAllProjets() {
    this.projetService.list().subscribe(
      (projects: any) => {
        this.projects = projects;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  saveProjet() {
    this.projetService.create(this.projets).subscribe(
      (data) => {
        console.log(data);
        this.goToProjetList();
      },
      (error) => console.log(error)
    );
  }

  goToProjetList() {
    this.router.navigate(['/projets']);
  }

  onSubmit() {
    console.log(this.projets);
    this.saveProjet();
    //Affichage de l'alert
    this.alert = true;
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
