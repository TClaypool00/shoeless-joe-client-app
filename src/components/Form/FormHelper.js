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