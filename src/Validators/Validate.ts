import { Errors } from "../Models/Errrors";

export function validateStrings(errors : Errors, value : string | null, name : string, spanId : string, maxLength : number | null  = null, required : boolean | null = null) {
    const span = getSpanElement(spanId);
    if (maxLength === null) {
        maxLength = 255;
    }

    if (required === null) {
        required = true;
    }

    if (required && (value === null || value === '')) {
        span!.innerHTML = `${name} is required`;
        errors.hasError = true;
        return;
    }

    if (value!.length > maxLength) {
        span!.innerHTML = `${name} has max length of ${maxLength}`;
        errors.hasError = true;
        return;
    }

    errors.hasError = false;
}

export function validateEmail(errors : Errors, value : string | null, spanId : string, maxLength : number | null = null, required : boolean | null = null) {
    const span = getSpanElement(spanId);

    validateStrings(errors, value, 'email', spanId, maxLength, required);
    
    if (!errors.hasError) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(value!.toString())) {
            errors.hasError = true;
            span!.innerHTML = `Not a valid email`;
            return;
        }
    }
}

export function validatePhoneNumber(errors : Errors, value : string | null, spanId : string) {
    const span = getSpanElement(spanId);

    let phoneRE = /^\d{10}$/;
    if (!phoneRE.test(value!.toString())) {
        errors.hasError = true;
        span!.innerHTML = 'Phone number is not valid';
        return;
    }
}

export function validateConfirmValues(errors : Errors, name : string, compareName : string, value : string | null, compareValue : string | null, spanId : string) {
    const span = getSpanElement(spanId);

    if (value !== compareValue) {
        errors.hasError = true;
        span!.innerHTML = `${name} and ${compareName} do not match`;
    }
}

function getSpanElement(spanId : string) : HTMLSpanElement | null {
    return document.getElementById(`errorSpan${spanId}`);
}