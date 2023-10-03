var map = L.map('map').setView([-6.3386, 105.9051], 10); // Default view is Kecamatan Carita, Indonesia

L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© Esri'
}).addTo(map);

function zoomToLocation(location) {
    var zoomLevel = 16;
    var coordinates;

    switch (location) {
        case 'carita':
            coordinates = [-6.31, 105.848]; // Coordinates for Kecamatan Carita, Indonesia
            break;
        case 'panimbang':
            coordinates = [-6.495, 105.797]; // Coordinates for Desa Panimbangjaya, Indonesia
            break;
        default:
            coordinates = [-6.3386, 105.9051]; // Default to Kecamatan Carita, Indonesia
    }

    map.setView(coordinates, zoomLevel);
}
