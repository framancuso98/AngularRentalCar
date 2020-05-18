import { CategoriaModel } from './categoria.model';
export class AutoModel{
    id: number;
    costruttore: string;
    modello: string;
    targa: string;
    anno:Date;
    categoria: CategoriaModel;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
}