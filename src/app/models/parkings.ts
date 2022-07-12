export class Parkings {
  id!: number;
  nomProprietaire!: string;
  numTel!: string;
  image!:string
  nomEntreprise!: string;
  descripActivite!: string;
  jsonDonnee!: null;
  latitude!: number;
  longitude!: number;
  IdResidant!: null;
  IdCategorie!: number;
  IdCommune!: number;
  IdUser!: number;
  commune!: Commune;
  categorie!: null;
  user!: User;
}

export class Commune {
  id!: number;
  nom!: string;
}

export class User {
  id!: number;
  name!: string;
  prenom!: string;
}
