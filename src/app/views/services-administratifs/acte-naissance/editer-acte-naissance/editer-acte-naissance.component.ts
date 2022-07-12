import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExtraitNaissanceService } from 'src/app/services/serviceAdministratif/extrait-naissance.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editer-acte-naissance',
  templateUrl: './editer-acte-naissance.component.html',
  styleUrls: ['./editer-acte-naissance.component.scss']
})

export class EditerActeNaissanceComponent implements OnInit {

  router: any;


  constructor(private auth:ExtraitNaissanceService, private Router:Router) { }

  errors ={
    jsonDonnee:null,

  }

  public routerLinkAffichageExtrait = "../affichage-extrait-naissance";
  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    const jsonDonnee = form.value.jsonDonnee;
    this.auth.editerNais(jsonDonnee).subscribe((res:any)=>{
      this.router.navigate(['/extrait-naissance'])
    },
    (err)=>{
      this.errors  = err.console.error.errors();
    });
  }
}
