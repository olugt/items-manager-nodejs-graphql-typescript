export class JwtDetail {
    constructor(public jwt: string, public expiryDatetime: Date, public emailAddress: string) {

    }
}