import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sondage, Option } from '../sondage.model';
import { SondageService } from '../sondage.service';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { TokenStorageService } from '../../../services/_auth-services/token-storage.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-ajouter-sondage',
  templateUrl: './ajouter-sondage.component.html',
  styleUrls: ['./ajouter-sondage.component.scss'],
})
export class AjoutSondageComponent implements OnInit {
  public sondageForm!: FormGroup;
  sondage: Sondage = new Sondage();
  option: Option = new Option();
  one!: any;
  ids!: any;
  currentUser: any;

  //condition sur l'affichage de l'alert
  alert: boolean = false;

  constructor(
    private SondageService: SondageService,
    private fb: FormBuilder,
    private router: Router,
    private token: TokenStorageService
  ) {}

  ngOnInit() {
    this.sondageForm = this.fb.group({
      description: ['', Validators.required],
      // 2eme Etape : Declrarer la propoiété comme un tableau de données
      options: this.fb.array([new FormControl()]),
      // options
    });
    this.currentUser = this.token.getUser();
  }

  goToSondageListe() {
    this.router.navigate(['/sondages/liste-sondages']);
  }

  // 1ere Etape : Avoir tous les elements du formulaire
  public get options(): FormArray {
    return this.sondageForm.get('options') as FormArray;
  }

  // 3eme Etape : Creer la fonction qui permet de generer le template
  public addOption() {
    if (this.options.length === 3) {
      alert("Vous n'avez droit qu'à trois options de sondage");
    } else {
      this.options.push(new FormControl());
    }
  }

  public deleteOption(index: number) {
    this.options.removeAt(index);
  }

  nothing() {}
  saveSondage() {
    if (this.sondageForm.valid) {
      this.sondage.description = this.sondageForm.value.description;
      this.sondage.IdUser = this.currentUser.data.id;
      console.log(this.sondage);
      this.SondageService.createSondage(this.sondage).subscribe({
        next: () => this.nothing(),
      });
      this.one = new Sondage();
      this.SondageService.getSondagesIdOne(this.currentUser.data.id).subscribe(
        (data) => {
          this.one = data;
          console.log(this.ids);
          for (let i = 0; i < this.options.length; i++) {
            this.option.libelle = this.options.value[i];
            this.option.point = 0;
            this.option.IdSondage = this.one.id + 1;
            this.SondageService.createOption(this.option).subscribe({
              next: () => this.goToSondageListe(),
            });
          }
        }
      );
    }
    //Affichage de l'alert
    this.alert = true;
  }

  //function de fermerture du boutton
  closeAlert() {
    this.alert = true;
  }
}
