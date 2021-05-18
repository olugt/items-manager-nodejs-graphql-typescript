import { JwtDetailInterface } from './interfaces/JwtDetailInterface';
class JwtManager {
    constructor() {

    }

    static generate(emailAddress: string): JwtDetailInterface {
        throw new Error("Not implmented.");
    }

    static validate(jwt: string): boolean {
        throw new Error("Not implmented.");
    }
}