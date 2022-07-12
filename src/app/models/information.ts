import {
  Commune,
  User,
  TypeInformation,
} from 'src/app/models/informations-model';
export class Informations {
  id!: number;
  titre!: string;
  description!: string;
  images!: string;
  IdTypeInformation!: number;
  IdUser!: number;
  IdCommune!: number;
  user!: User;
  commune!: Commune;
  type_information!: TypeInformation;
}
