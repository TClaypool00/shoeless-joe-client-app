import { useState } from "react";
import InputButton from "../../Form/InputButton";
import InputField from "../../Form/InputField";
import { validateConfirmValues, validateEmail, validatePhoneNumber, validateStrings } from "../../../Validators/Validate.ts";
import { setTitle } from "../../../PageHelper";
import { clearSpanErrors, resetFormValues } from "../../Form/FormHelper";
import { Errors } from "../../../Models/Errrors.ts";
import { create, login } from "../../../API/Api.ts";
import { RegisterModel } from "../../../Models/RegisterModel.ts";
import { LoginModel } from "../../../Models/LoginModel.ts";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const fNameSpan = 'fName';
    const lNameSpan = 'lName';
    const emailSpan = 'email';
    const phoneNumberSpan = 'phoneNumber';
    const passwordSpan = 'password';
    const confirmPasswordSpan = 'confirmPassword';

    const loginEmailSpan = 'loginEmail';
    const loginPasswordSpan = 'loginPassword';

    const fistNameText = 'First Name';
    const lastNameText = 'Last Name';
    const passwordText = 'Password';
    const confirmPasswordText = 'Confirm Passowrd';
    var errors = new Errors();
    const navigate = useNavigate();

    setTitle('Register or Sign up');

    function registerSubmit(e) {
        e.preventDefault();

        clearSpanErrors();
        validateStrings(errors, firstName, fistNameText, fNameSpan);

        validateStrings(errors, lastName, lastNameText, lNameSpan);

        validateEmail(errors, email, emailSpan);

        validatePhoneNumber(errors,phoneNum, phoneNumberSpan);

        validateStrings(errors,password, passwordText, passwordSpan, 20);

        validateConfirmValues(errors, passwordText, confirmPasswordText, password, confirmPassword, confirmPasswordSpan);
        

        if (errors.hasError) {
            let model = new RegisterModel(firstName, lastName, email, phoneNum, password, confirmPassword);
            create(model);
            resetFormValues();
        } else {
            const passwordInput = document.getElementById('txtPassword');
            const confirmPasswordInput = document.getElementById('txtConfirmPassword');

            passwordInput.value = '';
            confirmPasswordInput.value = '';
        }
    }

    function loginSubmit(e) {
        const loginPasswordElement = document.getElementById('txtLoginPassword');

        e.preventDefault();

        clearSpanErrors(1);
        errors.hasError = false;

        validateEmail(errors, loginEmail, loginEmailSpan);

        validateStrings(errors, loginPassword, 'Password', loginPasswordSpan);

        if (!errors.hasError) {
            let model = new LoginModel(loginEmail, loginPassword);
            login(model, navigate);
        } else {
            loginPasswordElement.value = '';
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <h1>Register</h1>
                </div>

                <div className="col-md-6">
                <h1>Sign in</h1>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <form method="post">
                        <InputField id="txtFirstName" text="First Name" spanId={fNameSpan} setFunction={setFirstName} />

                        <InputField id="txtLasttName" text="Last Name" spanId={lNameSpan} setFunction={setLastName} />

                        <InputField id="txtEmail" text="Email" spanId={emailSpan} setFunction={setEmail} type="email" />

                        <InputField id="txtPhoneNumber" text="Phone Number" spanId={phoneNumberSpan} setFunction={setPhoneNum} />

                        <InputField id="txtPassword" text="Password" spanId={passwordSpan} setFunction={setPassword} type="password" />

                        <InputField id="txtConfirmPassword" text="Confirm Password" spanId={confirmPasswordSpan} setFunction={setConfirmPassword} type="password" />

                        <InputButton id="btnRegister" text="Register" function={registerSubmit} />
                    </form>
                </div>

                <div className="col-md-6">
                    <form method="post">
                        <InputField id="txtLoginEmail" text="Email" spanId={loginEmailSpan} setFunction={setLoginEmail} />

                        <InputField id="txtLoginPassword" text="Password" spanId={loginPasswordSpan} setFunction={setLoginPassword} type="password" />

                        <InputButton id="btnLogin" text="Sign in" function={loginSubmit} />
                    </form>
                </div>
            </div>
        </>
    );
};


export default Register