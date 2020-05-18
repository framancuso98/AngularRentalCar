export class JwtResponse{
    token: string;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
}