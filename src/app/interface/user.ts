import { Compte } from './compte';
import { Transaction } from './transaction';
import { Partenaire } from './partenaire';
import { Versement } from './versement';

export interface User {
    id: number,
    email: string,
    plainPassword: string,
    nomComplet: string,
    telephone: number,
    cni: number,
    adresse: string,
    role: number,
    status: string,
    imageFile:File,
    roles:Array<any>,
    imageName:string,
    nombreConnexion:number,
    compte: Compte,
    transactions: Transaction[],
    partenaire: Partenaire,
    versements: Versement[],
    action:string
}
