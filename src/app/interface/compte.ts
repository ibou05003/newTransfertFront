import { Partenaire } from './partenaire';
import { User } from './user';
import { Versement } from './versement';

export interface Compte {
    id:number,
    numeroCompte:string,
    solde: number,
    partenaire: Partenaire,
    createdAt: Date,
    users: User[],
    versements: Versement[]
}
