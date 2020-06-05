export class JwtResponse{
    
    id: number;
    username: string;
    ruoloId: number;
    token: string; 

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
}