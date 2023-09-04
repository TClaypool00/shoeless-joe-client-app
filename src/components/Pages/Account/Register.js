import { useState } from "react";
import InputButton from "../../Form/InputButton";
import InputField from "../../Form/InputField";
import { validateConfirmValues, validateEmail, validatePhoneNumber, validateStrings } from "../../../Validators/Validate";
import { setTitle } from "../../../PageHelper";
import { clearSpanErrors } from "../../Form/FormHelper";

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
    var errors = {};

    setTitle('Register or Sign up');

    function registerSubmit(e) {
        const passwordInput = document.getElementById('txtPassword');
        const confirmPasswordInput = document.getElementById('txtConfirmPassword');

        e.preventDefault();

        clearSpanErrors();
        errors.hasError = false;
        validateStrings(errors, firstName, fistNameText, fNameSpan);

        validateStrings(errors, lastName, lastNameText, lNameSpan);

        validateEmail(errors, email, emailSpan);

        validatePhoneNumber(errors,phoneNum, phoneNumberSpan);

        validateStrings(errors,password, passwordText, passwordSpan, 20);

        validateConfirmValues(errors, passwordText, confirmPasswordText, password, confirmPassword, confirmPasswordSpan);

        if (!errors.hasError) {
            alert('there are no errors');
        }

        passwordInput.value = '';
        confirmPasswordInput.value = '';
    }

    function loginSubmit(e) {
        const loginPasswordElement = document.getElementById('txtLoginPassword');

        e.preventDefault();

        clearSpanErrors(1);
        errors.hasError = false;

        validateEmail(errors, loginEmail, loginEmailSpan);

        validateStrings(errors, loginPassword, 'Password', loginPasswordSpan);

        if (!errors.hasError) {
            alert('there no errors');
        } else {
            alert('there are errors');
        }

        loginPasswordElement.value = '';

    }
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <h1>Register</h1>
                </div>

                <div className="col-md-6">
                <h1>Sing in</h1>
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