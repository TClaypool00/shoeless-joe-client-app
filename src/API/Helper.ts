import { getErrorMessage, getSuccessMesage, getUlErrors } from "../Elements/Element.ts";

export function displayErrorMessage(error : any) {
    let errorData = error.response.data;
    let ulErrors = getUlErrors();
    let errorMessage = getErrorMessage();

    ulErrors!.innerHTML = '';
    errorMessage!.innerHTML = '';


    if (Array.isArray(errorData)) {
        for (let i = 0; i < errorData.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = errorData[i];
            ulErrors!.appendChild(li);
        }
    } else {
        errorMessage!.innerHTML = errorData;
    }
}

export function displaySuccessMesage(resp: any) {
    const successElement = getSuccessMesage();

    successElement!.innerHTML = resp.data;
}