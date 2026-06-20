/* ========================================= */
/*       Clickable locations show on map     */
/* ========================================= */
function showLocation(locationName){

    console.log("showLocation called");

    const location = locations[locationName];

    map.flyTo(
        [location.lat, location.lng],
        location.zoom,
        {
            animate: true,
            duration: 2
        }
    );
}

/* ========================================= */
/*               MAP LOCATIONS               */
/* ========================================= */

const locations = {

    /* ===================================== */
    /* NORTH CHANNEL                         */
    /* ===================================== */

    benjamin: {
        lat: 46.111530,
        lng: -82.204011,
        zoom: 13,
        marker: benjaminMarker
    },

    mcgregor: {
        lat: 45.995000,
        lng: -81.512000,
        zoom: 12,
        marker: mcgregorMarker
    },

    bayofislands: {
        lat: 45.940000,
        lng: -81.430000,
        zoom: 12,
        marker: bayOfIslandsMarker
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
        lat: 45.963000,
        lng: -81.545000,
        zoom: 14,
        marker: coveredPortageMarker
    },

    /* ===================================== */
    /* NORTHERN GEORGIAN BAY                 */
    /* ===================================== */

    westfox: {
        lat: 45.828000,
        lng: -80.982000,
        zoom: 13,
        marker: westFoxMarker
    },

    phillipedward: {
        lat: 45.790000,
        lng: -80.920000,
        zoom: 12,
        marker: philipEdwardMarker
    },

    thousandislands: {
        lat: 44.330000,
        lng: -76.030000,
        zoom: 11,
        marker: thousandIslandsMarker
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
        lat: 45.120000,
        lng: -81.590000,
        zoom: 14,
        marker: driftwoodCoveMarker
    },

    grotto: {
        lat: 45.229000,
        lng: -81.524000,
        zoom: 14,
        marker: grottoMarker
    },

    /* ===================================== */
    /* SAGUENAY FJORD                        */
    /* ===================================== */

    baieeternite: {
        lat: 48.255000,
        lng: -70.205000,
        zoom: 13,
        marker: baieEterniteMarker
    }

};