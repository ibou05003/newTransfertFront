import { User } from './user';
import { Compte } from './compte';

export interface Transaction {
    id: number,
    code: string,
    prenomEnv: string,
    nomEnv: string,
    telEnv: number,
    montant: number,
    adresseEnv: string,
    typePieceEnv: string,
    dateEnv: Date,
    dateRet: Date,
    nomBenef: string,
    telBenef: string,
    user: User,
    prenomBenef: string,
    cniBenef: number,
    status: string,
    taxe: number,
    commissionEnv: number,
    commissionRet: number,
    commissionPropre: number,
    compteEnv: Compte,
    compteRet: Compte,
    frais: number,
    typePieceBenef: string,
    cniEnv: number,
    userRet: User,
    typeRetrait: string
}
