export class Sondage {
  id:          number;
  description: string;
  IdUser:      number;
  IdCommune:   number;
  user:        User;
  option:      Option[];
}

export class Option {
  id:         number;
  libelle:    string;
  point:      number;
  IdSondage:  number;
}

export class User {
  id:   number;
  name: string;
}
