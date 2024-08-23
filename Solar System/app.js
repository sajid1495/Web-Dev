document.getElementById('fetch-data').addEventListener('click', fetchNEOData);

function fetchNEOData() {
    const apiKey = 'DEMO_KEY';  // Replace with your NASA API key
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-08-20&end_date=2024-08-24&api_key=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const neoData = data.near_earth_objects;
            displayNEOs(neoData);
        })
        .catch(error => console.error('Error fetching NEO data:', error));
}

function displayNEOs(neoData) {
    const orrery = document.getElementById('orrery');
    orrery.innerHTML = '';  // Clear previous data

    Object.keys(neoData).forEach(date => {
        neoData[date].forEach(neo => {
            const neoElement = document.createElement('div');
            const size = Math.max(5, neo.estimated_diameter.kilometers.estimated_diameter_max * 10);
            neoElement.style.width = `${size}px`;
            neoElement.style.height = `${size}px`;

            const distanceFromEarth = neo.close_approach_data[0].miss_distance.kilometers;
            const orbitRadius = Math.min(250, distanceFromEarth / 100000);  // Scale for visualization

            const angle = Math.random() * 360;  // Random angle for simplicity
            neoElement.style.top = `${250 + orbitRadius * Math.sin(angle)}px`;
            neoElement.style.left = `${250 + orbitRadius * Math.cos(angle)}px`;

            orrery.appendChild(neoElement);
        });
    });
}
