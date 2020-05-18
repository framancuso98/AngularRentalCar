import { RuoloInterface } from './ruolo.interface';

export class UtenteInterface{
    id: number;
    username: string;
    password: string;
    nome: string;
    cognome:string;
    data_nascita: Date;
    ruolo: RuoloInterface;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
}