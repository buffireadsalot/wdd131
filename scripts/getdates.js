// getdates.js

// Dynamically set the current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Dynamically set last modified date
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
