// place.js

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("lastModified").textContent = document.lastModified;

// Function to calculate wind chill in Celsius
function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

// Static weather values for Estonia
const temperature = 3;     // degrees Celsius
const windSpeed = 12;      // km/h

const windChillElement = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `${windChill} °C`;
} else {
  windChillElement.textContent = "N/A";
}
