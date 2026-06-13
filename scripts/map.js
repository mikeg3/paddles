const map = L.map('map').setView([46.5, -81.5], 6);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18
    }
).addTo(map);

/* ========================================= */
/* SAGUENAY */
/* ========================================= */

L.marker([48.283, -70.209])
.addTo(map)
.bindPopup(`
    <h3>Saguenay Fjord</h3>
    <p>My first experience paddling a fjord landscape.</p>
`);

/* ========================================= */
/* THOUSAND ISLANDS */
/* ========================================= */

L.marker([44.339, -76.028])
.addTo(map)
.bindPopup(`
    <h3>Thousand Islands</h3>
    <p>My first solo kayak camping adventure.</p>
`);

/* ========================================= */
/* BRUCE PENINSULA */
/* ========================================= */

L.marker([45.244, -81.534])
.addTo(map)
.bindPopup(`
    <h3>Bruce Peninsula</h3>
    <p>Where I first discovered turquoise water in Ontario.</p>
`);