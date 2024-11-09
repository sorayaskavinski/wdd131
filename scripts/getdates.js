const yearElement = document.querySelector("#year");
yearElement.textContent = new Date().getFullYear();
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = "Last updated: " + document.lastModified;