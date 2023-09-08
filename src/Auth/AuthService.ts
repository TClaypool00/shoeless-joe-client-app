export function isLoggedIn() : boolean {
    if (localStorage.getItem('user') !== null) {
        return true;
    } else {
        return false;
    }
}