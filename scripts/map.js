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
    <p>Where the inspiration all started and I returned decades later</p>
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
    <img src="images/gallery/saguenay/Epic_wide_angle_of_The_Fjords_of_the_Saguenay_river.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* THOUSAND ISLANDS */
/* ========================================= */
L.marker([44.339, -76.028])
.addTo(map)
.bindPopup(`
    <h3>Thousand Islands</h3>
    <p>My first solo kayak camping adventure.</p>
    <img src="images/gallery/1000iSLANDS/mermaidISland.jpg" style="width:250px;border-radius:10px;">
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
    <p>A less visited access point on the Bruce Peninsula</p>
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
    <img src="images/gallery/pei/Etches_Island_Crystals_2.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* FOX ISLANDS */
/* ========================================= */
L.marker([45.952074, -81.362052])
.addTo(map)
.bindPopup(`
    <h3>Fox Islands</h3>
    <p></p>
    <img src="images/gallery/pei/West_Fox_Island_Northern_View_Evening.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* PHILLIP EDWARD ISLAND */
/* ========================================= */
L.marker([45.980336, -81.288489])
.addTo(map)
.bindPopup(`
    <h3>Phillip Edward Island</h3>
    <p></p>
    <img src="images/gallery/pei/View From an Island During a Kayak Break 2.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* WEST FOX ISLANDS */
/* ========================================= */
L.marker([45.946689, -81.365105])
.addTo(map)
.bindPopup(`
    <h3>West Fox Island</h3>
    <p></p>
    <img src="images/gallery/pei/West_Fox_Island_Wave_Shaped_Rock_Formations.jpg" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* SLY FOX ISLANDS */
/* ========================================= */
L.marker([45.953534, -81.366324])
.addTo(map)
.bindPopup(`
    <h3>Sly Fox Island</h3>
    <p></p>
    <img src="images/gallery/pei/Epic_View_From_Sly_Fox_Island.jpg" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* CENTER FOX ISLANDS */
/* ========================================= */
L.marker([45.950976, -81.357019])
.addTo(map)
.bindPopup(`
    <h3>CenterFox Island</h3>
    <p></p>
    <img src="images/gallery/pei/Center_Fox_Island.jpg" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* MARTINS ISLAND ISLANDS */
/* ========================================= */
L.marker([45.954051, -81.354286])
.addTo(map)
.bindPopup(`
    <h3>Martin's Island</h3>
    <p></p>
    <img src="images/gallery/pei/Wave_Shaped_Rocks_On_Martins_Island.jpg" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* SOLOMANS ISLANDS */
/* ========================================= */
/* ========================================= */
/* EAST DESJARDINS BAY ROCK */
/* ========================================= */
L.marker([45.956218, -81.298308])
.addTo(map)
.bindPopup(`
    <h3>Kayak Break on an unexpectedly beautiful rock</h3>
    <p></p>
    <img src="images/gallery/pei/Metamorphic_granite_rock.jpg" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* Thomas Bay*/
/* ========================================= */
L.marker([45.988929, -81.447313])
.addTo(map)
.bindPopup(`
    <h3>First campsite in Killarney</h3>
    <p></p>
    <img src="images/gallery/pei/Thomas_Bay_Shore.jpg" style="width:250px;border-radius:10px;">
`);
/* ========================================= */
/* GEORGE ISLAND*/
/* ========================================= */
L.marker([45.961616, -81.520747])
.addTo(map)
.bindPopup(`
    <h3>George Island</h3>
    <p></p>
    <img src="images/gallery/pei/20210718_151217.jpg" style="width:250px;border-radius:10px;">
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
    <img src="images/gallery/killarney/White quartzite cliffs and pine trees at the entrance in the Killarney Bay in Killarney Ontario Canada 2.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* SNUG HARBOR */
/* ========================================= */
L.marker([45.956323, -81.644473])
.addTo(map)
.bindPopup(`
    <h3>Camping spot in Snug Harbor</h3>
    <p></p>
    <img src="images/gallery/northChannel/SnugHarborSunset.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* CREAK ISLAND */
/* ========================================= */
L.marker([45.945604, -81.694243])
.addTo(map)
.bindPopup(`
    <h3>Creak Island</h3>
    <p></p>
    <img src="images/gallery/northChannel/Creak Island.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* MCGREGOR BAY */
/* ========================================= */
L.marker([46.063572, -81.751782])
.addTo(map)
.bindPopup(`
    <h3>McGregor Bay launch</h3>
    <p></p>
    <img src="images/gallery/northChannel/McGregor Bay Tilted Pine on Rock.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* MCGREGOR BAY TRIP CAMPSITE */
/* ========================================= */
L.marker([46.026368, -81.633917])
.addTo(map)
.bindPopup(`
    <h3>Campsite during McGregor Bay Trip</h3>
    <p></p>
    <img src="images/adventures/McGregorBay.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* PROVIDENCE BAY */
/* ========================================= */
L.marker([45.666430, -82.270689])
.addTo(map)
.bindPopup(`
    <h3>Providence Bay</h3>
    <p>An unexpectedly beautiful rocky shore after launching from a sandy beach</p>
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
    <img src="images/gallery/Lachine.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* DOWKER ISLAND */
/* ========================================= */
L.marker([45.402868, -73.896060])
.addTo(map)
.bindPopup(`
    <h3>Dowker Island</h3>
    <p>A fun island to paddle around close to where I live</p>
    <img src="images/gallery/Dowker.jpg" style="width:250px;border-radius:10px;">
`);

/* ========================================= */
/* Les Coteaux */
/* ========================================= */
L.marker([45.255512, -74.207714])
.addTo(map)
.bindPopup(`
    <h3>Les Coteaux</h3>
    <p>A small stretch in the Saint-Lawrence River where the water turns turquoise</p>
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
    <img src="images/gallery/LacStukley.jpg" style="width:250px;border-radius:10px;">
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

/* ========================================= */
/* Sainte Barbe, Qc */
/* ========================================= */
L.marker([45.189563, -74.191540])
.addTo(map)
.bindPopup(`
    <h3>Sainte-Brabe, Qc</h3>
    <p>Last paddle of 2025 exploring a new area</p>
`);