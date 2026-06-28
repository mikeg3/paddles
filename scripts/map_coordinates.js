/* ========================================= */
/*       Clickable locations show on map     */
/* ========================================= */
function showLocation(locationName, button) {

    const location = locations[locationName];

    map.flyTo(
        [location.lat, location.lng],
        location.zoom,
        {
            animate: true,
            duration: 2
        }
    );

    /*  SHOW ACTIVE LOCATION FROM PLACES SELECTION BUTTONS */
    document.querySelectorAll('.location-list button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    /* SCROLL DOWN TO THE ACTUAL MAP */
    document.getElementById('map').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

}

/* ========================================= */
/*               MAP LOCATIONS               */
/* ========================================= */
console.log("Creating locations")

const locations = {

    /* ===================================== */
    /* NORTH CHANNEL                         */
    /* ===================================== */
    benjamin: {
        lat: 46.088662,
        lng: -82.253195,
        zoom: 15,
        marker: benjaminMarker
    },
    mcgregor: {
        lat: 46.039783,
        lng: -81.652944,
        zoom: 13,
        marker: mcgregorMarker
    },
    bayofislands: {
        lat: 46.087372,
        lng: -81.787466,
        zoom: 13,
        marker: bayOfIslandsMarker
    },
    foxIsland: {
        lat: 45.952074,
        lng: -81.362052,
        zoom: 15,
        marker: foxMarker
    },
    creakIsland: {
        lat: 45.945604, 
        lng: -81.694243,
        zoom: 13,
        marker: creakIslandMarker
    },
    airdIsland: {
        lat: 46.133408,
        lng: -82.432725,
        zoom: 13,
        marker: airdIslandMarker
    },

    /* ===================================== */
    /* KILLARNEY                             */
    /* ===================================== */
    killarneybay: {
        lat: 45.970000,
        lng: -81.520000,
        zoom: 13,
        marker: killarneyBayMarker
    },
    coveredportage: {
        lat: 45.999244,
        lng: -81.546430,
        zoom: 14,
        marker: coveredPortageMarker
    },
    georgeIsland: {
        lat: 45.970000,
        lng: -81.520000,
        zoom: 13,
        marker: georgeIslandMarker
    },
    thomasBay: {
        lat: 45.988929,
        lng:  -81.447313,
        zoom: 14,
        marker: thomasBayMarker
    },
    snugHarbor: {
        lat: 45.956323, 
        lng: -81.644473,
        zoom: 13,
        marker: snugHarborMarker
    },

    /* ===================================== */
    /* NORTHERN GEORGIAN BAY                 */
    /* ===================================== */
    westfox: {
        lat: 45.946689,
        lng: -81.365105,
        zoom: 16,
        marker: westFoxMarker
    },
    phillipedward: {
        lat: 45.980336,
        lng: -81.288489,
        zoom: 12,
        marker: philipEdwardMarker
    },
    slyFoxIsland: {
        lat: 45.953534, 
        lng: -81.366324,
        zoom: 16,
        marker: slyFoxMarker
    },
    martinsIsland: {
        lat: 45.954051, 
        lng: -81.354286,
        zoom: 16,
        marker: martinsIslandMarker
    },
    etchesIsland: {
        lat: 45.970859,
        lng:  -81.385704,
        zoom: 16,
        marker: etchesMarker
    },

    /* ===================================== */
    /* St Lawrence                 */
    /* ===================================== */
    thousandislands: {
        lat: 44.330000,
        lng: -76.030000,
        zoom: 11,
        marker: thousandIslandsMarker
    },
    lachine: {
        lat: 45.432760, 
        lng: -73.692531,
        zoom: 11,
        marker: lachineMarker
    },
    dowkerIsland: {
        lat: 45.402868, 
        lng: -73.896060,
        zoom: 13,
        marker: dowkerMarker
    },
    stnicolet: {
        lat: 46.228008, 
        lng: -72.626776,
        zoom: 11,
        marker: stNicoletMarker
    },
   lescoteaux: {
        lat: 45.255512, 
        lng: -74.207714,
        zoom: 13,
        marker: lesCoteauxMarker
    },   
    longsault: {
        lat: 45.003807, 
        lng: -74.915544,
        zoom: 13,
        marker: longSaultMarker
    },
    saintebarbe: {
        lat: 45.189563, 
        lng: -74.191540,
        zoom: 13,
        marker: sainteBarbeMarker
    },
    /* ===================================== */
    /* BRUCE PENINSULA                       */
    /* ===================================== */
    lionshead: {
        lat: 44.987000,
        lng: -81.249000,
        zoom: 13,
        marker: lionsHeadMarker
    },
    driftwoodcove: {
        lat: 45.243347,
        lng: -81.575193,
        zoom: 14,
        marker: driftwoodCoveMarker
    },
    grotto: {
        lat: 45.245216,
        lng: -81.524196,
        zoom: 15,
        marker: grottoMarker
    },
    dyersBay: {
        lat: 45.163133, 
        lng: -81.336435,
        zoom: 13,
        marker: dyersBayMarker
    },
    dunksBay: {
        lat: 45.249494, 
        lng: -81.643609,
        zoom: 14,
        marker: dunksBayMarker
    },
    littleCove: {
        lat: 45.249666,
        lng: -81.611799,
        zoom: 15,
        marker: littleCoveMarker
    },

    /* ===================================== */
    /* Quebec                      */
    /* ===================================== */
    stukley: {
        lat: 45.369463, 
        lng: -72.252020,
        zoom: 14,
        marker: stukelyMarker
    },
    mauricie: {
        lat: 46.660477, 
        lng: -73.018113,
        zoom: 14,
        marker: mauricieMarker
    },
    baieeternite: {
        lat: 48.298850,
        lng: -70.333945,
        zoom: 13,
        marker: saguenayMarker
    },
    /* Ontario */
    algonquin: {
        lat: 45.533712, 
        lng: -78.704942,
        zoom: 14,
        marker: algonquinMarker
    },
    provBay: {
        lat: 45.666430, 
        lng: -82.270689,
        zoom: 13,
        marker: provBayMarker
    },
    timberBay: {
        lat: 45.636095, 
        lng: -82.224167,
        zoom: 13,
        marker: timberBayMarker
    }


};