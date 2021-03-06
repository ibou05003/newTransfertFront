import { User } from './user';
import { Compte } from './compte';

export interface Partenaire {
    id:number,
    raisonSociale: string,
    ninea: string,
    adresseSociale: string,
    telephoneSiege: number,
    description: string,
    nomCompletPersonneRef: string,
    emailPersonneRef: string,
    emailSiege: string,
    telephoneRef: number,
    cniPersonneRef: number,
    adressePersonneRef: string,
    status: string,
    imageFile:File,
    action:string,
    users: User[],
    comptes: Compte[]
}
