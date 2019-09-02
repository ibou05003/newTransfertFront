import { Compte } from './compte';
import { User } from './user';

export interface Versement {
    id: number,
    compte: Compte,
    montant: number,
    dateVersement: Date,
    user: User
}
