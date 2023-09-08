export function clearSpanErrors(formIndex = null) {
    if (formIndex === null) {
        formIndex = 0;
    }

    const form = document.getElementsByTagName('form')[formIndex];
    const spans = form.getElementsByTagName('span');
    
    for (let i = 0; i < spans.length; i++) {
        const element = spans[i];
        
        if (element.innerHTML !== '') {
            element.innerHTML = '';
        }
    }
}

export function resetFormValues(formIndex = null) {
    if (formIndex === null) {
        formIndex = 0;
    }

    const form = document.getElementsByTagName('form')[0];
    const inputs = form.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];
        
        if (element.value !== '' || element.value !== null) {
            element.value = '';
        }
    }
}