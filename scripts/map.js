const map = L.map('map').setView([46.5, -81.1], 6);

/* ========================================= */
/*               INITIAL MAP                 */
/* ========================================= */
L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
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

/* ========================================= */
/* LIONS HEAD */
/* ========================================= */
L.marker([44.988315, -81.250822])
.addTo(map)
.bindPopup(`
    <h3>Lions Head</h3>
    <p>A favorite destination of mine on the Bruce Peninsula</p>
    <img src="images/gallery/bruce/Lions_Head10.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* DUNKS BAY */
/* ========================================= */
L.marker([45.249494, -81.643609])
.addTo(map)
.bindPopup(`
    <h3>Dunk's Bay</h3>
    <p>Where I first discovered clear emerald waters in Ontario</p>
    <img src="images/gallery/bruce/DunksBay.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* DYERS BAY */
/* ========================================= */
L.marker([45.163133, -81.336435])
.addTo(map)
.bindPopup(`
    <h3>Dyer's Bay</h3>
    <p>Access Point to a quieter yet epic scenary on the Bruce Peninsula</p>
    <img src="images/gallery/bruce/DyersBay.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* GROTTO */
/* ========================================= */
L.marker([45.245216, -81.524196])
.addTo(map)
.bindPopup(`
    <h3>The Grotto</h3>
    <p>A perfect destination for a day trip along the Bruce Peninsula</p>
    <img src="images/gallery/bruce/Grotto.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* BENJAMIN ISLANDS */
/* ========================================= */
L.marker([46.089078, -82.252460])
.addTo(map)
.bindPopup(`
    <h3>Benjamin Islands</h3>
    <p>Multi-night trips, one of favourite destinations so far</p>
    <img src="images/adventures/Benjis2025.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* SPANISH MARINA */
/* ========================================= */
L.marker([46.183668, -82.360327])
.addTo(map)
.bindPopup(`
    <h3>Spanish Marina</h3>
    <p>Access point for the Benjamin Islands and other North Channel adventures</p>
    <img src="images/gallery/northChannel/SpanishMarina.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* MCBEAN HARBOR*/
/* ========================================= */
L.marker([46.131733, -82.192341])
.addTo(map)
.bindPopup(`
    <h3>Launch from McBean Harbor</h3>
    <p>Shortcut to the Benjamin Islands for my second trip</p>
    <img src="images/gallery/northChannel/McBean.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* Fox Island */
/* ========================================= */
L.marker([46.115635, -82.226179])
.addTo(map)
.bindPopup(`
    <h3>Fox Island</h3>
    <p>A labrynthe of rocks, islands, channels and pines</p>
    <img src="images/gallery/northChannel/Fox Island 2.jpg" style="width:250px;border-radius:10px;">
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
    <p>An unexpectedly beautiful shore after launching from a sandy beach</p>
    <img src="images/gallery/ProvidenceBay.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/*     PRINCE EDWARD COUNTY - PRESQU'ILE    */
/* ========================================= */
L.marker([44.010694, -77.704297])
.addTo(map)
.bindPopup(`
    <h3>Presqu'ile Provincial Park</h3>
    <p>A park in Lake Ontario, visited during a long weekend</p>
`);

/* ========================================= */
/* LACHINE */
/* ========================================= */
L.marker([45.432760, -73.692531])
.addTo(map)
.bindPopup(`
    <h3>Lachine</h3>
    <p>My home base where I can launch of for an evening paddle after work</p>
`);

/* ========================================= */
/* DOWKER ISLAND */
/* ========================================= */
L.marker([45.402868, -73.896060])
.addTo(map)
.bindPopup(`
    <h3>Dowker Island</h3>
    <p>A fun island to paddle around close to where I live</p>
`);

/* ========================================= */
/* Les Coteaux */
/* ========================================= */
L.marker([45.255512, -74.207714])
.addTo(map)
.bindPopup(`
    <h3>Les Coteaux</h3>
    <p>A small stretch in the Saint-Lawrence RIver where the water turns turquoise</p>
`);

/* ========================================= */
/* Long Sault Parkway */
/* ========================================= */
L.marker([45.003807, -74.915544])
.addTo(map)
.bindPopup(`
    <h3>Long Sault Parkway</h3>
    <p>11 Islands in a chain in the Saint-Lawrence River</p>
`);

/* ========================================= */
/* LAC STUKLEY */
/* ========================================= */
L.marker([45.369463, -72.252020])
.addTo(map)
.bindPopup(`
    <h3>Lac Stukely</h3>
    <p>A small lake in Parc Orford in South Eastern Quebec</p>
`);

/* ========================================= */
/* Nicolet, Qc */
/* ========================================= */
L.marker([46.228008, -72.626776])
.addTo(map)
.bindPopup(`
    <h3>Nicolet</h3>
    <p>Access point to the more open Lac Saint Pierre, in the Saint Lawrence River</p>
`);