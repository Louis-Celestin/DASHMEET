export class User {
  name!: string;
  email!: string;
  prenom!: string;
  phone!: string;
  sexe!: string;
  date_naissance!: Date;
  password!: string;
  lieu_naissance!: string;
  IdCommune!: number;
  IdTypeUtilisateur!: number;
}

export class UserCreate {
  status!: string;
  message!: string;
  data!: User;
}
