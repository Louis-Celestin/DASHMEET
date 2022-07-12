//import { DataList } from './DataList';

export interface UserList {
  status: string;
  message: string;
  data: DataList;
}

//Model de listings
export interface DataList {
  id: number;
  name: string;
  email: string;
  email_verified_at: Date;
  prenom: string;
  password: string;
  phone: string;
  sexe: string;
  date_naissance: Date;
  lieu_naissance: string;
  IdCommune: number;
  IdTypeUtilisateur: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  commune: Commune;
  type_utilisateur: TypeUtilisateur;
  token: string;
}

export interface Commune {
  id: number;
  nom: string;
}

export interface TypeUtilisateur {
  id: number;
  profil: string;
}
