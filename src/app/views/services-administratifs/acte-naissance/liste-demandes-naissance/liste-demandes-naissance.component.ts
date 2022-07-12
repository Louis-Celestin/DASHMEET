import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAdministratif } from 'src/app/models/service-administratif';
import { ExtraitNaissanceService } from '../../../../services/serviceAdministratif/extrait-naissance.service';
@Component({
  selector: 'app-liste-demandes-naissance',
  templateUrl: './liste-demandes-naissance.component.html',
  styleUrls: ['./liste-demandes-naissance.component.scss'],
})
export class ListeDemandesNaissanceComponent implements OnInit {
  //déclaration de variables
  affichageAll!: ServiceAdministratif[];
  affichageOne!: ServiceAdministratif;
  dtOptions: DataTables.Settings = {};
  // id!: number;
  constructor(
    private ServiceExtrait: ExtraitNaissanceService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllExtrait();
  }

  private getAllExtrait() {
    this.ServiceExtrait.getAllExtrait().subscribe((data) => {
      this.affichageAll = data;
      console.log(this.affichageAll);
    });
  }

  getOneDetails(id: number) {
    // this.id = this.router.snapshot.params['id'];
    // this.affichageOne= new ServiceAdministratif();
    this.ServiceExtrait.getOneExtrait(id).subscribe((data) => {
      this.affichageOne = data;
      console.log(this.affichageOne);
    });
  }
}
