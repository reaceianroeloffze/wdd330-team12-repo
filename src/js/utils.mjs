// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
    qs(selector).addEventListener('touchend', (event) => {
        event.preventDefault();
        callback();
    });
    qs(selector).addEventListener('click', callback);
}

// Create a function to get URL Parameters
export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const result = urlParams.get(param);

    return result;
}

export function renderListWithTemplate(
    templateFn,
    parentElement,
    position = 'afterbegin',
    clear = false
) {
    if ((clear === true)) {
        parentElement.innerHTML = ``;
    }
    parentElement.insertAdjacentHTML(
        position,
        templateFn
    );
}
