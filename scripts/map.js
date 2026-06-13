const map = L.map('map').setView([46.5, -81.5], 6);

/* ========================================= */
/*               INITIAL MAP                 */
/* ========================================= */
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18
    }
).addTo(map);

/* ========================================= */
/* Algonquin Park */
/* ========================================= */
L.marker([45.533712, -78.704942])
.addTo(map)
.bindPopup(`
    <h3>Algonquin Park</h3>
    <p>My first experience paddling a fjord landscape.</p>
`);

/* ========================================= */
/* Mauricie */
/* ========================================= */
L.marker([46.660477, -73.018113])
.addTo(map)
.bindPopup(`
    <h3>Mauricie National Park</h3>
    <p>My first experience paddling a fjord landscape.</p>
`);

/* ========================================= */
/* SAGUENAY */
/* ========================================= */
L.marker([48.298850, -70.333945])
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

/* ========================================= */
/* BENJAMIN ISLANDS*/
/* ========================================= */
L.marker([46.089078, -82.252460])
.addTo(map)
.bindPopup(`
    <h3>Benjamin Islands</h3>
    <p></p>
`);

/* ========================================= */
/* SPANISH MARINA */
/* ========================================= */
L.marker([46.183668, -82.360327])
.addTo(map)
.bindPopup(`
    <h3>Launch from Spanish Marina</h3>
    <p></p>
`);

/* ========================================= */
/* MCBEAN HARBOR*/
/* ========================================= */
L.marker([46.131733, -82.192341])
.addTo(map)
.bindPopup(`
    <h3>Launch from McBean Harbor</h3>
    <p></p>
`);


/* ========================================= */
/* ETCHES ISLAND */
/* ========================================= */
L.marker([45.970859, -81.385704])
.addTo(map)
.bindPopup(`
    <h3>Etches Island</h3>
    <p></p>
`);

/* ========================================= */
/* FOX ISLANDS */
/* ========================================= */
L.marker([45.952074, -81.362052])
.addTo(map)
.bindPopup(`
    <h3>Fox Islands</h3>
    <p></p>
`);

/* ========================================= */
/* PHILLIP EDWARD ISLAND */
/* ========================================= */
L.marker([45.980336, -81.288489])
.addTo(map)
.bindPopup(`
    <h3>Phillip Edward Island</h3>
    <p></p>
`);

/* ========================================= */
/* KILLARNEY BAY */
/* ========================================= */
L.marker([
46.003299, -81.515819])
.addTo(map)
.bindPopup(`
    <h3>Killarney Bay</h3>
    <p></p>
`);

/* ========================================= */
/* SNUG HARBOR */
/* ========================================= */
L.marker([45.956323, -81.644473])
.addTo(map)
.bindPopup(`
    <h3>Camping spot in Snug Harbor</h3>
    <p></p>
`);

/* ========================================= */
/* CREAK ISLAND */
/* ========================================= */
L.marker([45.945604, -81.694243])
.addTo(map)
.bindPopup(`
    <h3>Creak Island</h3>
    <p></p>
`);

/* ========================================= */
/* MCGREGOR BAY */
/* ========================================= */
L.marker([46.063572, -81.751782])
.addTo(map)
.bindPopup(`
    <h3>McGregor Bay launch</h3>
    <p></p>
`);

/* ========================================= */
/* MCGREGOR BAY TRIP CAMPSITE */
/* ========================================= */
L.marker([46.026368, -81.633917])
.addTo(map)
.bindPopup(`
    <h3>Campsite during McGregor Bay Trip</h3>
    <p></p>
`);

/* ========================================= */
/* PROVIDENCE BAY */
/* ========================================= */
L.marker([45.666430, -82.270689])
.addTo(map)
.bindPopup(`
    <h3>Providence Bay</h3>
    <p></p>
`);