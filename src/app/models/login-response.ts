export interface LoginReponse {
  status: string;
  message: string;
  data: LoginReponseData;
}

export interface LoginReponseData {
  id: number;
  name: string;
  email: string;
  prenom: string;
  phone: string;
  sexe: string;
  date_naissance: Date;
  lieu_naissance: string;
  IdCommune: string;
  IdTypeUtilisateur: string;
  token: string;
}
