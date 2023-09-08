import { getErrorMessage, getSuccessMesage } from "./Element.ts";

export function clearErrorMessage() {
    setTimeout(function() {
        const errorMessage = getErrorMessage();
        if (errorMessage!.innerHTML !== '') {
            errorMessage!.innerHTML = '';
        }
    }, 5000);
}

export function clearSuccessMessage() {
    setTimeout(function () {
        const successMessage = getSuccessMesage();
        if (successMessage!.innerHTML !== '') {
            successMessage!.innerHTML = '';
        }
    }, 5000);
}