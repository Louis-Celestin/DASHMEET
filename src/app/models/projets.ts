import { Sondage } from '../views/sondages/sondage.model';
export class Projet {
  id!:                number;
  IdUser!:            number;
  titre!:             string;
  description!:       string;
  created_at!:        Date;
  updated_at!:        Date;
  deleted_at!:        null;
  montant!:           number;
  reseau!:            string;
  IdProjet!:          number;
  status!:            string;
  name!:              string;
  email!:             string;
  email_verified_at!: Date;
  password!:          string;
  remember_token!:    null;
  prenom!:            string;
  phone!:             string;
  sexe!:              string;
  date_naissance!:    Date;
  lieu_naissance!:    string;
  IdCommune!:         number;
  IdTypeUtilisateur!: number;
}



