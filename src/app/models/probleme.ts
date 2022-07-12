export class Probleme {
  id!: number;
  image!: string;
  commentaire!: string;
  localisation!: string;
  IdUser!: number;
  IdTypeProbleme!: number;
  user!: User;
  type_probleme!: TypeProbleme;
  name!: string;
  titre!: string;
}

export class User {
  id!: number;
  name!: string;
}

export class TypeProbleme {
  id!: number;
  titre!: string;
}
