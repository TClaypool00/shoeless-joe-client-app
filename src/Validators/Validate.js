export function validateStrings(errors, value, name, spanId, maxLength = null, required = null) {
    const span = getSpanElement(spanId);
    if (maxLength === null) {
        maxLength = 255;
    }

    if (required === null) {
        required = true;
    }

    if (required && (value === null || value === '')) {
        span.innerHTML = `${name} is required`;
        errors.hasError = true;
        return;
    }

    if (value.length > maxLength) {
        span.innerHTML = `${name} has max length of ${maxLength}`;
        errors.hasError = true;
        return;
    }

    errors.hasError = false;
}

export function validateEmail(errors, value, spanId, maxLength = null, required = null) {
    const span = getSpanElement(spanId);

    validateStrings(errors, value, 'email', spanId, maxLength, required);
    
    if (!errors.hasError) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(value)) {
            errors.hasError = true;
            span.innerHTML = `Not a valid email`;
            return;
        }
    }
}

export function validatePhoneNumber(errors, value, spanId) {
    const span = getSpanElement(spanId);

    let phoneRE = /^\d{10}$/;
    if (!phoneRE.test(value)) {
        errors.hasError = true;
        span.innerHTML = 'Phone number is not valid';
        return;
    }
}

export function validateConfirmValues(errors, name, compareName, value, compareValue, spanId) {
    const span = getSpanElement(spanId);

    if (value !== compareValue) {
        errors.hasError = true;
        span.innerHTML = `${name} and ${compareName} do not match`;
    }
}

function getSpanElement(spanId) {
    return document.getElementById(`errorSpan${spanId}`);
}