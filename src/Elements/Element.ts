export function getErrorMessage() : HTMLElement | null {
    return document.getElementById('errorMessage') ?? null;
}

export function getSuccessMesage() : HTMLElement | null {
    return document.getElementById('successMesage');
}

export function getUlErrors() : HTMLElement | null {
    return document.getElementById('ulErrors')
}