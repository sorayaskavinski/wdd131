function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
    } else {
        return 'N/A';
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const temp = 20; 
    const windSpeed = 10; 

    const windChill = calculateWindChill(temp, windSpeed);

    document.getElementById('windchill').textContent = `Wind Chill: ${windChill}°C`;

});

document.getElementById('year').textContent = new Date().getFullYear();

const lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').textContent =
    `Last Updated: ${lastModifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })}`;
