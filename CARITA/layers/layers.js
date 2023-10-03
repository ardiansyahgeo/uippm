var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
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

        var lyr_HYBRID_3 = new ol.layer.Tile({
            'title': 'HYBRID',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_WILAYAHRAWANTSUNAMIAnalisisDemnas_4 = new ol.format.GeoJSON();
var features_WILAYAHRAWANTSUNAMIAnalisisDemnas_4 = format_WILAYAHRAWANTSUNAMIAnalisisDemnas_4.readFeatures(json_WILAYAHRAWANTSUNAMIAnalisisDemnas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WILAYAHRAWANTSUNAMIAnalisisDemnas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WILAYAHRAWANTSUNAMIAnalisisDemnas_4.addFeatures(features_WILAYAHRAWANTSUNAMIAnalisisDemnas_4);
var lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WILAYAHRAWANTSUNAMIAnalisisDemnas_4, 
                style: style_WILAYAHRAWANTSUNAMIAnalisisDemnas_4,
                interactive: true,
                title: '<img src="styles/legend/WILAYAHRAWANTSUNAMIAnalisisDemnas_4.png" /> WILAYAH RAWAN TSUNAMI (Analisis Demnas)'
            });
var format_JANGKAUANTESUNTUKLANSIA39Menit_5 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKLANSIA39Menit_5 = format_JANGKAUANTESUNTUKLANSIA39Menit_5.readFeatures(json_JANGKAUANTESUNTUKLANSIA39Menit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESUNTUKLANSIA39Menit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKLANSIA39Menit_5.addFeatures(features_JANGKAUANTESUNTUKLANSIA39Menit_5);
var lyr_JANGKAUANTESUNTUKLANSIA39Menit_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESUNTUKLANSIA39Menit_5, 
                style: style_JANGKAUANTESUNTUKLANSIA39Menit_5,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESUNTUKLANSIA39Menit_5.png" /> JANGKAUAN TES UNTUK LANSIA (39 Menit)'
            });
var format_JANGKAUANTESSESEORANGDENGANANAK39Menit_6 = new ol.format.GeoJSON();
var features_JANGKAUANTESSESEORANGDENGANANAK39Menit_6 = format_JANGKAUANTESSESEORANGDENGANANAK39Menit_6.readFeatures(json_JANGKAUANTESSESEORANGDENGANANAK39Menit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESSESEORANGDENGANANAK39Menit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESSESEORANGDENGANANAK39Menit_6.addFeatures(features_JANGKAUANTESSESEORANGDENGANANAK39Menit_6);
var lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESSESEORANGDENGANANAK39Menit_6, 
                style: style_JANGKAUANTESSESEORANGDENGANANAK39Menit_6,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESSESEORANGDENGANANAK39Menit_6.png" /> JANGKAUAN TES SESEORANG DENGAN ANAK (39 Menit)'
            });
var format_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7 = format_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7.readFeatures(json_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7.addFeatures(features_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7);
var lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7, 
                style: style_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7.png" /> JANGKAUAN TES UNTUK MENDORONG KERETA (39 Menit)'
            });
var format_JANGKAUANTESUNTUKLANSIA15Menit_8 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKLANSIA15Menit_8 = format_JANGKAUANTESUNTUKLANSIA15Menit_8.readFeatures(json_JANGKAUANTESUNTUKLANSIA15Menit_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESUNTUKLANSIA15Menit_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKLANSIA15Menit_8.addFeatures(features_JANGKAUANTESUNTUKLANSIA15Menit_8);
var lyr_JANGKAUANTESUNTUKLANSIA15Menit_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESUNTUKLANSIA15Menit_8, 
                style: style_JANGKAUANTESUNTUKLANSIA15Menit_8,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESUNTUKLANSIA15Menit_8.png" /> JANGKAUAN TES UNTUK LANSIA (15 Menit)'
            });
var format_JANGKAUANTESSESEORANGDENGANANAK15Menit_9 = new ol.format.GeoJSON();
var features_JANGKAUANTESSESEORANGDENGANANAK15Menit_9 = format_JANGKAUANTESSESEORANGDENGANANAK15Menit_9.readFeatures(json_JANGKAUANTESSESEORANGDENGANANAK15Menit_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESSESEORANGDENGANANAK15Menit_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESSESEORANGDENGANANAK15Menit_9.addFeatures(features_JANGKAUANTESSESEORANGDENGANANAK15Menit_9);
var lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESSESEORANGDENGANANAK15Menit_9, 
                style: style_JANGKAUANTESSESEORANGDENGANANAK15Menit_9,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESSESEORANGDENGANANAK15Menit_9.png" /> JANGKAUAN TES SESEORANG DENGAN ANAK (15 Menit)'
            });
var format_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10 = format_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10.readFeatures(json_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10.addFeatures(features_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10);
var lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10, 
                style: style_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10.png" /> JANGKAUAN TES UNTUK MENDORONG KERETA (15 Menit)'
            });
var format_JANGKAUANMENUJUTEMPATAMAN_11 = new ol.format.GeoJSON();
var features_JANGKAUANMENUJUTEMPATAMAN_11 = format_JANGKAUANMENUJUTEMPATAMAN_11.readFeatures(json_JANGKAUANMENUJUTEMPATAMAN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANMENUJUTEMPATAMAN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANMENUJUTEMPATAMAN_11.addFeatures(features_JANGKAUANMENUJUTEMPATAMAN_11);
var lyr_JANGKAUANMENUJUTEMPATAMAN_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANMENUJUTEMPATAMAN_11, 
                style: style_JANGKAUANMENUJUTEMPATAMAN_11,
                interactive: true,
    title: 'JANGKAUAN MENUJU TEMPAT AMAN<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEMPATAMAN_11_0.png" /> 0-5 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEMPATAMAN_11_1.png" /> 5-10 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEMPATAMAN_11_2.png" /> 10-15 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEMPATAMAN_11_3.png" /> 15-30 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEMPATAMAN_11_4.png" /> 30-45 MENIT<br />'
        });
var format_RuteEvakuasi_12 = new ol.format.GeoJSON();
var features_RuteEvakuasi_12 = format_RuteEvakuasi_12.readFeatures(json_RuteEvakuasi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteEvakuasi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteEvakuasi_12.addFeatures(features_RuteEvakuasi_12);
var lyr_RuteEvakuasi_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuteEvakuasi_12, 
                style: style_RuteEvakuasi_12,
                interactive: true,
                title: '<img src="styles/legend/RuteEvakuasi_12.png" /> Rute Evakuasi'
            });
var format_BANGUNAN1LANTAI_13 = new ol.format.GeoJSON();
var features_BANGUNAN1LANTAI_13 = format_BANGUNAN1LANTAI_13.readFeatures(json_BANGUNAN1LANTAI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN1LANTAI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN1LANTAI_13.addFeatures(features_BANGUNAN1LANTAI_13);
var lyr_BANGUNAN1LANTAI_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN1LANTAI_13, 
                style: style_BANGUNAN1LANTAI_13,
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN1LANTAI_13.png" /> BANGUNAN >1 LANTAI'
            });
var format_Perbukitan_14 = new ol.format.GeoJSON();
var features_Perbukitan_14 = format_Perbukitan_14.readFeatures(json_Perbukitan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perbukitan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perbukitan_14.addFeatures(features_Perbukitan_14);
var lyr_Perbukitan_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perbukitan_14, 
                style: style_Perbukitan_14,
                interactive: true,
                title: '<img src="styles/legend/Perbukitan_14.png" /> Perbukitan'
            });

lyr_google_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ESRISatellite_2.setVisible(true);lyr_HYBRID_3.setVisible(true);lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_4.setVisible(false);lyr_JANGKAUANTESUNTUKLANSIA39Menit_5.setVisible(false);lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_6.setVisible(false);lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7.setVisible(false);lyr_JANGKAUANTESUNTUKLANSIA15Menit_8.setVisible(false);lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_9.setVisible(false);lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10.setVisible(false);lyr_JANGKAUANMENUJUTEMPATAMAN_11.setVisible(true);lyr_RuteEvakuasi_12.setVisible(true);lyr_BANGUNAN1LANTAI_13.setVisible(true);lyr_Perbukitan_14.setVisible(true);
var layersList = [lyr_google_0,lyr_OpenStreetMap_1,lyr_ESRISatellite_2,lyr_HYBRID_3,lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_4,lyr_JANGKAUANTESUNTUKLANSIA39Menit_5,lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_6,lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7,lyr_JANGKAUANTESUNTUKLANSIA15Menit_8,lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_9,lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10,lyr_JANGKAUANMENUJUTEMPATAMAN_11,lyr_RuteEvakuasi_12,lyr_BANGUNAN1LANTAI_13,lyr_Perbukitan_14];
lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', });
lyr_JANGKAUANTESUNTUKLANSIA39Menit_5.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_6.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESUNTUKLANSIA15Menit_8.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_9.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANMENUJUTEMPATAMAN_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KET': 'KET', });
lyr_RuteEvakuasi_12.set('fieldAliases', {'ObjectID': 'ObjectID', 'FacilityID': 'FacilityID', 'FromCumul_': 'FromCumul_', 'ToCumul_Le': 'ToCumul_Le', });
lyr_BANGUNAN1LANTAI_13.set('fieldAliases', {'Name': 'Nama Bangunan', 'Tinggi_Ban': 'Tinggi Bangunan', 'FOTO': 'FOTO', 'RUTE': 'RUTE', });
lyr_Perbukitan_14.set('fieldAliases', {'Name': 'Name', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Rute': 'Rute', });
lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', });
lyr_JANGKAUANTESUNTUKLANSIA39Menit_5.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_6.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESUNTUKLANSIA15Menit_8.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_9.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10.set('fieldImages', {'OBJECTID_1': '', 'Name': 'TextEdit', });
lyr_JANGKAUANMENUJUTEMPATAMAN_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'KET': 'TextEdit', });
lyr_RuteEvakuasi_12.set('fieldImages', {'ObjectID': 'TextEdit', 'FacilityID': 'TextEdit', 'FromCumul_': 'TextEdit', 'ToCumul_Le': 'TextEdit', });
lyr_BANGUNAN1LANTAI_13.set('fieldImages', {'Name': 'TextEdit', 'Tinggi_Ban': 'TextEdit', 'FOTO': 'ExternalResource', 'RUTE': 'TextEdit', });
lyr_Perbukitan_14.set('fieldImages', {'Name': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Rute': 'TextEdit', });
lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_4.set('fieldLabels', {'OBJECTID': 'inline label', 'Id': 'inline label', });
lyr_JANGKAUANTESUNTUKLANSIA39Menit_5.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_6.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANTESUNTUKLANSIA15Menit_8.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_9.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10.set('fieldLabels', {'OBJECTID_1': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANMENUJUTEMPATAMAN_11.set('fieldLabels', {'OBJECTID': 'inline label', 'KET': 'inline label', });
lyr_RuteEvakuasi_12.set('fieldLabels', {'ObjectID': 'inline label', 'FacilityID': 'inline label', 'FromCumul_': 'inline label', 'ToCumul_Le': 'inline label', });
lyr_BANGUNAN1LANTAI_13.set('fieldLabels', {'Name': 'inline label', 'Tinggi_Ban': 'inline label', 'FOTO': 'inline label', 'RUTE': 'inline label', });
lyr_Perbukitan_14.set('fieldLabels', {'Name': 'inline label', 'POINT_X': 'inline label', 'POINT_Y': 'inline label', 'Rute': 'inline label', });
lyr_Perbukitan_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

var layersList = [
new ol.layer.Group({
            title: 'Basemap',
            layers: [
lyr_google_0,lyr_OpenStreetMap_1,lyr_ESRISatellite_2,lyr_HYBRID_3,
]}),

 

new ol.layer.Group({
            title: 'Jangkauan Area Skenario 15 Menit',
            fold: 'open',
            layers: [
lyr_JANGKAUANTESUNTUKLANSIA15Menit_8,lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_9,lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_10,
]}),


new ol.layer.Group({
            title: 'Jangkauan Area Skenario 39 Menit',
            fold: 'open',
            layers: [
lyr_JANGKAUANTESUNTUKLANSIA39Menit_5,lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_6,lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_7,
]}),


new ol.layer.Group({
            title: 'status area secara umum',
            fold: 'open',
            layers: [
lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_4,lyr_RuteEvakuasi_12,lyr_JANGKAUANMENUJUTEMPATAMAN_11,
]}),


new ol.layer.Group({
            title: 'lokasi bangunan dan bukit',
            fold: 'open',
            layers: [
lyr_BANGUNAN1LANTAI_13,lyr_Perbukitan_14,
]}),







];