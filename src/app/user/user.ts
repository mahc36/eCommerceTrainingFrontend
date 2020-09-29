export interface IUser{
    email: string;
    name: string;
    lastName: string;
    gender: Gender;
    bornDate: Date;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}
