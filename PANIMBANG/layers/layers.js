var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_2 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RawanTsunami_3 = new ol.format.GeoJSON();
var features_RawanTsunami_3 = format_RawanTsunami_3.readFeatures(json_RawanTsunami_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanTsunami_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanTsunami_3.addFeatures(features_RawanTsunami_3);
var lyr_RawanTsunami_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RawanTsunami_3, 
                style: style_RawanTsunami_3,
                interactive: true,
                title: '<img src="styles/legend/RawanTsunami_3.png" /> Rawan Tsunami'
            });
var format_BatasDesaKelurahan_4 = new ol.format.GeoJSON();
var features_BatasDesaKelurahan_4 = format_BatasDesaKelurahan_4.readFeatures(json_BatasDesaKelurahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaKelurahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaKelurahan_4.addFeatures(features_BatasDesaKelurahan_4);
var lyr_BatasDesaKelurahan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesaKelurahan_4, 
                style: style_BatasDesaKelurahan_4,
                interactive: true,
                title: '<img src="styles/legend/BatasDesaKelurahan_4.png" /> Batas Desa/Kelurahan'
            });
var format_ShelterdanTitikKumpul_5 = new ol.format.GeoJSON();
var features_ShelterdanTitikKumpul_5 = format_ShelterdanTitikKumpul_5.readFeatures(json_ShelterdanTitikKumpul_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShelterdanTitikKumpul_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShelterdanTitikKumpul_5.addFeatures(features_ShelterdanTitikKumpul_5);
var lyr_ShelterdanTitikKumpul_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShelterdanTitikKumpul_5, 
                style: style_ShelterdanTitikKumpul_5,
                interactive: true,
    title: 'Shelter dan Titik Kumpul<br />\
    <img src="styles/legend/ShelterdanTitikKumpul_5_0.png" /> Lapangan<br />\
    <img src="styles/legend/ShelterdanTitikKumpul_5_1.png" /> Peribdatan<br />\
    <img src="styles/legend/ShelterdanTitikKumpul_5_2.png" /> Puskesmas<br />\
    <img src="styles/legend/ShelterdanTitikKumpul_5_3.png" /> Rumah Sakit<br />\
    <img src="styles/legend/ShelterdanTitikKumpul_5_4.png" /> Sekolah<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ESRISatellite_2.setVisible(true);lyr_RawanTsunami_3.setVisible(true);lyr_BatasDesaKelurahan_4.setVisible(true);lyr_ShelterdanTitikKumpul_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,lyr_ESRISatellite_2,lyr_RawanTsunami_3,lyr_BatasDesaKelurahan_4,lyr_ShelterdanTitikKumpul_5];
lyr_RawanTsunami_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'sumber': 'sumber', });
lyr_BatasDesaKelurahan_4.set('fieldAliases', {'NAMOBJ': 'Nama Obyek', 'WADMKC': 'Kecamatan', 'WADMKD': 'Kelurahan/Desa', 'jumlah_kk': 'Jumlah KK', 'pria': 'Jumlah Pria', 'wanita': 'Jumlah Wanita', 'Balita': 'Jumlah Balita', 'lansia': 'Jumlah Lansia', });
lyr_ShelterdanTitikKumpul_5.set('fieldAliases', {'NAME': 'NAME', 'koordinat': 'koordinat', 'Rute': 'Rute', 'FOTO': 'FOTO', 'JENIS': 'JENIS', });
lyr_RawanTsunami_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'sumber': 'TextEdit', });
lyr_BatasDesaKelurahan_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'jumlah_kk': 'TextEdit', 'pria': 'TextEdit', 'wanita': 'TextEdit', 'Balita': 'Range', 'lansia': 'Range', });
lyr_ShelterdanTitikKumpul_5.set('fieldImages', {'NAME': 'TextEdit', 'koordinat': 'TextEdit', 'Rute': 'TextEdit', 'FOTO': 'ExternalResource', 'JENIS': 'TextEdit', });
lyr_RawanTsunami_3.set('fieldLabels', {'OBJECTID': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'sumber': 'inline label', });
lyr_BatasDesaKelurahan_4.set('fieldLabels', {'NAMOBJ': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'jumlah_kk': 'inline label', 'pria': 'inline label', 'wanita': 'inline label', 'Balita': 'inline label', 'lansia': 'inline label', });
lyr_ShelterdanTitikKumpul_5.set('fieldLabels', {'NAME': 'inline label', 'koordinat': 'inline label', 'Rute': 'inline label', 'FOTO': 'inline label', 'JENIS': 'inline label', });
lyr_ShelterdanTitikKumpul_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});