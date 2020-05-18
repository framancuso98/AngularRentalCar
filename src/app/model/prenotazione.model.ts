import { UtenteInterface } from '../utente-interface';
import { AutoModel } from './auto.model';

export class PrenotazioneModel{
    id: number;
    auto: AutoModel;
    utente: UtenteInterface;
    stato:string;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
}