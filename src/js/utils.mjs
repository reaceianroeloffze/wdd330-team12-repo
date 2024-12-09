// utils.mjs

// Wrapper for querySelector to return matching element from the parent (defaults to the document)
export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}

// Or a more concise version for those who prefer it:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// Retrieve data from localStorage (returns parsed object)
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// Save data to localStorage (stringified)
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
export const getParam = function (param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
};

export const renderListWithTemplate = function (
    templateFn,
    parentElement,
    list,
    position = 'afterbegin',
    clear = false
) {
    const HTMLProdDisplay = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, HTMLProdDisplay.join(''));
    if (clear) {
        parentElement.innerHTML = '';
    }
};

export const renderWithTemplate = function (
    templateFn,
    parentElement,
    data,
    callback
) {
    parentElement.insertAdjacentHTML('afterbegin', templateFn);
    if (callback) {
        callback(data);
    }
};

export const loadHeaderFooter = async function () {
    const headerElem = document.getElementById('site-header');
    const footerElem = document.getElementById('site-footer');

    const headerHtml = await loadTemplate('../partials/header.html');
    const footerHtml = await loadTemplate('../partials/footer.html');

    renderWithTemplate(headerHtml, headerElem);
    renderWithTemplate(footerHtml, footerElem);
};

async function loadTemplate(path) {
    const html = await fetch(path);
    const htmlString = await html.text();

    return htmlString;
}

export const alertMessage = function (message, scroll = true) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('alert');

    const messageDiv = document.createElement('div');
    const closeDiv = document.createElement('div');
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');

    closeDiv.addEventListener('click', function (e) {
        main.removeChild(e.target.closest('.alert'));
    });

    messageDiv.textContent = message;
    closeBtn.textContent = '❌';
    closeDiv.appendChild(closeBtn);

    errorDiv.appendChild(messageDiv);
    errorDiv.appendChild(closeDiv);

    const main = document.querySelector('main');
    main.prepend(errorDiv);

    if (scroll) {
        window.scrollTo(0, 0);
    }
};
