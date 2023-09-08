export class RegisterModel {
    constructor(firstName : string, lastName : string, email : string, phoneNumber : string, password : string, confirmPassword : string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.PhoneNumb = phoneNumber;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public firstName : string | null;

    public lastName: string | null;

    public email: string | null;

    public PhoneNumb : string | null;

    public password : string | null;

    public confirmPassword : string | null;
}