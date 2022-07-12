import { Component, OnInit } from '@angular/core';
import { ExtraitNaissanceService } from 'src/app/services/serviceAdministratif/extrait-naissance.service';

@Component({
  selector: 'app-affichage-extrait',
  templateUrl: './affichage-extrait.component.html',
  styleUrls: ['./affichage-extrait.component.scss']
})
export class AffichageExtraitComponent implements OnInit {

  //Déclaration de mes variable;
  cheminImage:any = "assets/amoirie/images.png";
  constructor(private auth:ExtraitNaissanceService) { }

  ngOnInit(): void {
  }

}
