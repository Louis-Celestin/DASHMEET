// import { DataList } from 'src/app/models/datalist';

export class UserList {
  status!: string;
  message!: string;
  data!: UserUpdate;
}

//Model de listings
export class UserUpdate {
  id!: number;
  name!: string;
  email!: string;
  email_verified_at!: Date;
  prenom!: string;
  password!: string;
  phone!: string;
  sexe!: string;
  date_naissance!: Date;
  lieu_naissance!: string;
  IdCommune!: number;
  IdTypeUtilisateur!: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: null;
  commune!: Commune;
  type_utilisateur!: TypeUtilisateur;
  token!: string;
}

export class Commune {
  id!: number;
  nom!: string;
}

export class TypeUtilisateur {
  id!: number;
  profil!: string;
}
