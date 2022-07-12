export class PropositionIdee {
  id!: number;
  description!: string;
  IdUser!: number;
  IdTheme!: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: null;
  user!: User;
  theme!: Theme;
}

export interface Theme {
  id: number;
  titre: string;
}

export interface User {
  id: number;
  name: string;
}
