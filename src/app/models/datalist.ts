import { Commune, TypeUtilisateur } from './utilisateurs';

export class DataList {
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
