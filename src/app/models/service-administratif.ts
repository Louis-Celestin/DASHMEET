export class ServiceAdministratif {
  id!: number;
  statut!: string;
  jsonDonnee!: JSONDonnee;
  nbreExemplaire!: number;
  codeUnique!: string;
  copieImage!: string;
  IdTypeService!: number;
  IdUser!: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: null;
  user!: User;
  service!: Service;
}

export class JSONDonnee {
  nom!: string;
  prenom!: string;
  nomMere!: string;
  nomPere!: string;
  dateNaissance!: string;
  lieuNaissance!: string;
  numeroRegistre!: string;
}

export class Service {
  id!: number;
  typeService!: string;
}

export class User {
  id!: number;
  name!: string;
  prenom!: string;
  phone!: string;
}
