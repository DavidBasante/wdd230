// dates.js
document.addEventListener("DOMContentLoaded", function () {

    const currentYearElement = document.getElementById('yearDate');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    const lastModifiedElement = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = "Last modified: " + lastModified;
});
