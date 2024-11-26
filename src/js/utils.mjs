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

// Helper function to get query parameters from the URL
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param); // Returns the value of the parameter or null if not found
}

// Function to render a list of products (or any items) into the DOM using a template function
export function renderListWithTemplate(
  templateFn,        // Template function that generates HTML from each item
  parentElement,     // Parent element where the list will be inserted
  list,              // List of data objects to render
  position = "afterbegin", // Position to insert the generated HTML, default to "afterbegin"
  clear = false      // Whether to clear the parent element's contents before rendering
) {
  const htmlStrings = list.map(templateFn).join(''); // Map the list into HTML strings
  
  if (clear) {
    parentElement.innerHTML = ""; // Clear the parent element if needed
  }

  // Insert the generated HTML into the parent element at the specified position
  parentElement.insertAdjacentHTML(position, htmlStrings);
}

// Helper function to set event listeners for both 'click' and 'touchend' on an element
export function setClick(selector, callback) {
  const element = qs(selector); // Find the element
  element.addEventListener("touchend", (event) => {
    event.preventDefault(); // Prevent default behavior on touchend
    callback();              // Call the callback function
  });
  element.addEventListener("click", callback); // Add the click event listener
}
