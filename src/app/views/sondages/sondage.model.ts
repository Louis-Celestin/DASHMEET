export class Sondage {
  id!: number;
  description!: string;
  IdUser!: number;
  user!: User;
}
export class User {
  id!: number;
  name!: string;
}
export class Option {
  id!: number;
  libelle!: string;
  point!: number;
  IdSondage!: number;
}
