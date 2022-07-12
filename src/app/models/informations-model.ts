export interface Informations {
  id: number;
  titre: string;
  description: string;
  images: string;
  IdTypeInformation: number;
  IdUser: number;
  IdCommune: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  user: User;
  commune: Commune;
  type_information: TypeInformation;
}

export interface Commune {
  id: number;
  nom: string;
}

export interface TypeInformation {
  id: number;
  titre: string;
}

export interface User {
  id: number;
  name: string;
}
