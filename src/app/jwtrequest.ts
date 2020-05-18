export class JwtRequest{
    username: string;
    password: string;

    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
}