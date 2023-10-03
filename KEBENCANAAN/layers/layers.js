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
var format_INDEKSBAHAYABANJIRINARISKBNPB_3 = new ol.format.GeoJSON();
var features_INDEKSBAHAYABANJIRINARISKBNPB_3 = format_INDEKSBAHAYABANJIRINARISKBNPB_3.readFeatures(json_INDEKSBAHAYABANJIRINARISKBNPB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEKSBAHAYABANJIRINARISKBNPB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEKSBAHAYABANJIRINARISKBNPB_3.addFeatures(features_INDEKSBAHAYABANJIRINARISKBNPB_3);
var lyr_INDEKSBAHAYABANJIRINARISKBNPB_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEKSBAHAYABANJIRINARISKBNPB_3, 
                style: style_INDEKSBAHAYABANJIRINARISKBNPB_3,
                interactive: true,
    title: 'INDEKS BAHAYA BANJIR (INARISK-BNPB)<br />\
    <img src="styles/legend/INDEKSBAHAYABANJIRINARISKBNPB_3_0.png" /> Indeks Bahaya Banjir Rendah<br />\
    <img src="styles/legend/INDEKSBAHAYABANJIRINARISKBNPB_3_1.png" /> Indeks Bahaya Banjir Sedang<br />\
    <img src="styles/legend/INDEKSBAHAYABANJIRINARISKBNPB_3_2.png" /> Indeks Bahaya Banjir Tinggi<br />'
        });
var format_INDEKSBAHAYATSUNAMIINARISKBNPB_4 = new ol.format.GeoJSON();
var features_INDEKSBAHAYATSUNAMIINARISKBNPB_4 = format_INDEKSBAHAYATSUNAMIINARISKBNPB_4.readFeatures(json_INDEKSBAHAYATSUNAMIINARISKBNPB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEKSBAHAYATSUNAMIINARISKBNPB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEKSBAHAYATSUNAMIINARISKBNPB_4.addFeatures(features_INDEKSBAHAYATSUNAMIINARISKBNPB_4);
var lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEKSBAHAYATSUNAMIINARISKBNPB_4, 
                style: style_INDEKSBAHAYATSUNAMIINARISKBNPB_4,
                interactive: true,
    title: 'INDEKS BAHAYA TSUNAMI (INARISK-BNPB)<br />\
    <img src="styles/legend/INDEKSBAHAYATSUNAMIINARISKBNPB_4_0.png" /> Indeks Bahaya Tsunami Rendah<br />\
    <img src="styles/legend/INDEKSBAHAYATSUNAMIINARISKBNPB_4_1.png" /> Indeks Bahaya Tsunami Sedang<br />\
    <img src="styles/legend/INDEKSBAHAYATSUNAMIINARISKBNPB_4_2.png" /> Indeks Bahaya Tsunami Tinggi<br />'
        });
var format_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5 = new ol.format.GeoJSON();
var features_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5 = format_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.readFeatures(json_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.addFeatures(features_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5);
var lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5, 
                style: style_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5,
                interactive: true,
    title: 'INDEKS BAHAYA GEMPA BUMI (INARISK-BNPB)<br />\
    <img src="styles/legend/INDEKSBAHAYAGEMPABUMIINARISKBNPB_5_0.png" /> Indeks Bahaya Gempa Bumi Rendah<br />\
    <img src="styles/legend/INDEKSBAHAYAGEMPABUMIINARISKBNPB_5_1.png" /> Indeks Bahaya Gempa Bumi Sedang<br />\
    <img src="styles/legend/INDEKSBAHAYAGEMPABUMIINARISKBNPB_5_2.png" /> Indeks Bahaya Gempa Bumi Tinggi<br />'
        });
var format_INDEKSBAHAYALONSGORINARISKBNPB_6 = new ol.format.GeoJSON();
var features_INDEKSBAHAYALONSGORINARISKBNPB_6 = format_INDEKSBAHAYALONSGORINARISKBNPB_6.readFeatures(json_INDEKSBAHAYALONSGORINARISKBNPB_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEKSBAHAYALONSGORINARISKBNPB_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEKSBAHAYALONSGORINARISKBNPB_6.addFeatures(features_INDEKSBAHAYALONSGORINARISKBNPB_6);
var lyr_INDEKSBAHAYALONSGORINARISKBNPB_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEKSBAHAYALONSGORINARISKBNPB_6, 
                style: style_INDEKSBAHAYALONSGORINARISKBNPB_6,
                interactive: true,
    title: 'INDEKS BAHAYA LONSGOR (INARISK-BNPB)<br />\
    <img src="styles/legend/INDEKSBAHAYALONSGORINARISKBNPB_6_0.png" /> Indeks Bahaya Longsor Rendah<br />\
    <img src="styles/legend/INDEKSBAHAYALONSGORINARISKBNPB_6_1.png" /> Indeks Bahaya Longsor Sedang<br />\
    <img src="styles/legend/INDEKSBAHAYALONSGORINARISKBNPB_6_2.png" /> Indeks Bahaya Longsor Tinggi<br />'
        });
var format_StrukturGeologi_7 = new ol.format.GeoJSON();
var features_StrukturGeologi_7 = format_StrukturGeologi_7.readFeatures(json_StrukturGeologi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrukturGeologi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrukturGeologi_7.addFeatures(features_StrukturGeologi_7);
var lyr_StrukturGeologi_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrukturGeologi_7, 
                style: style_StrukturGeologi_7,
                interactive: true,
    title: 'Struktur Geologi<br />\
    <img src="styles/legend/StrukturGeologi_7_0.png" /> Kelurusan<br />\
    <img src="styles/legend/StrukturGeologi_7_1.png" /> Lipatan<br />\
    <img src="styles/legend/StrukturGeologi_7_2.png" /> Patahan<br />'
        });
var format_TitikGempa5magTahun902022_8 = new ol.format.GeoJSON();
var features_TitikGempa5magTahun902022_8 = format_TitikGempa5magTahun902022_8.readFeatures(json_TitikGempa5magTahun902022_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikGempa5magTahun902022_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikGempa5magTahun902022_8.addFeatures(features_TitikGempa5magTahun902022_8);
var lyr_TitikGempa5magTahun902022_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikGempa5magTahun902022_8, 
                style: style_TitikGempa5magTahun902022_8,
                interactive: true,
    title: 'Titik Gempa >5 mag (Tahun 90-2022)<br />\
    <img src="styles/legend/TitikGempa5magTahun902022_8_0.png" /> 5 - 5,5 mag<br />\
    <img src="styles/legend/TitikGempa5magTahun902022_8_1.png" /> 5,5 - 6 mag<br />\
    <img src="styles/legend/TitikGempa5magTahun902022_8_2.png" /> 6 - 6,5 mag<br />\
    <img src="styles/legend/TitikGempa5magTahun902022_8_3.png" /> 6,5 - 6,82 mag<br />'
        });
var format_TitikBangunan1LantaiHasilPMap_9 = new ol.format.GeoJSON();
var features_TitikBangunan1LantaiHasilPMap_9 = format_TitikBangunan1LantaiHasilPMap_9.readFeatures(json_TitikBangunan1LantaiHasilPMap_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikBangunan1LantaiHasilPMap_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikBangunan1LantaiHasilPMap_9.addFeatures(features_TitikBangunan1LantaiHasilPMap_9);
var lyr_TitikBangunan1LantaiHasilPMap_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikBangunan1LantaiHasilPMap_9, 
                style: style_TitikBangunan1LantaiHasilPMap_9,
                interactive: true,
                title: '<img src="styles/legend/TitikBangunan1LantaiHasilPMap_9.png" /> Titik Bangunan >1 Lantai (Hasil P-Map)'
            });
var format_BatasDesaKelurahan_10 = new ol.format.GeoJSON();
var features_BatasDesaKelurahan_10 = format_BatasDesaKelurahan_10.readFeatures(json_BatasDesaKelurahan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaKelurahan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaKelurahan_10.addFeatures(features_BatasDesaKelurahan_10);
var lyr_BatasDesaKelurahan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesaKelurahan_10, 
                style: style_BatasDesaKelurahan_10,
                interactive: true,
                title: '<img src="styles/legend/BatasDesaKelurahan_10.png" /> Batas Desa/Kelurahan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ESRISatellite_2.setVisible(true);lyr_INDEKSBAHAYABANJIRINARISKBNPB_3.setVisible(false);lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4.setVisible(false);lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.setVisible(false);lyr_INDEKSBAHAYALONSGORINARISKBNPB_6.setVisible(false);lyr_StrukturGeologi_7.setVisible(true);lyr_TitikGempa5magTahun902022_8.setVisible(true);lyr_TitikBangunan1LantaiHasilPMap_9.setVisible(true);lyr_BatasDesaKelurahan_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,lyr_ESRISatellite_2,lyr_INDEKSBAHAYABANJIRINARISKBNPB_3,lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4,lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5,lyr_INDEKSBAHAYALONSGORINARISKBNPB_6,lyr_StrukturGeologi_7,lyr_TitikGempa5magTahun902022_8,lyr_TitikBangunan1LantaiHasilPMap_9,lyr_BatasDesaKelurahan_10];
lyr_INDEKSBAHAYABANJIRINARISKBNPB_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_INDEKSBAHAYALONSGORINARISKBNPB_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_StrukturGeologi_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'namobj': 'namobj', 'klsstr': 'klsstr', 'remark': 'remark', 'Shape_Leng': 'Shape_Leng', });
lyr_TitikGempa5magTahun902022_8.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontal': 'horizontal', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSo': 'locationSo', 'magSource': 'magSource', });
lyr_TitikBangunan1LantaiHasilPMap_9.set('fieldAliases', {'Name': 'Name', 'pdfmaps_ph': 'pdfmaps_ph', 'Kemiringan': 'Kemiringan', 'Keterangan': 'Keterangan', 'Kondisi_Ba': 'Kondisi_Ba', 'Kondisi_Ja': 'Kondisi_Ja', 'Lebar_Bang': 'Lebar_Bang', 'Lebar_Jala': 'Lebar_Jala', 'Nama': 'Nama', 'Panjang_Ja': 'Panjang_Ja', 'Tinggi_Ban': 'Tinggi_Ban', 'Tipe': 'Tipe', 'row_num': 'row_num', 'arah': 'arah', 'FOTO': 'FOTO', });
lyr_BatasDesaKelurahan_10.set('fieldAliases', {'NAMOBJ': 'Nama Obyek', 'WADMKC': 'Kecamatan', 'WADMKD': 'Kelurahan/Desa', 'jumlah_kk': 'Jumlah KK', 'pria': 'Jumlah Pria', 'wanita': 'Jumlah Wanita', 'Balita': 'Jumlah Balita', 'lansia': 'Jumlah Lansia', });
lyr_INDEKSBAHAYABANJIRINARISKBNPB_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_INDEKSBAHAYALONSGORINARISKBNPB_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_StrukturGeologi_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'namobj': 'TextEdit', 'klsstr': 'TextEdit', 'remark': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_TitikGempa5magTahun902022_8.set('fieldImages', {'time': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'depth': 'TextEdit', 'mag': 'TextEdit', 'magType': 'TextEdit', 'nst': 'TextEdit', 'gap': 'TextEdit', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'net': 'TextEdit', 'id': 'TextEdit', 'updated': 'TextEdit', 'place': 'TextEdit', 'type': 'TextEdit', 'horizontal': 'TextEdit', 'depthError': 'TextEdit', 'magError': 'TextEdit', 'magNst': 'TextEdit', 'status': 'TextEdit', 'locationSo': 'TextEdit', 'magSource': 'TextEdit', });
lyr_TitikBangunan1LantaiHasilPMap_9.set('fieldImages', {'Name': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Kemiringan': 'TextEdit', 'Keterangan': 'TextEdit', 'Kondisi_Ba': 'TextEdit', 'Kondisi_Ja': 'TextEdit', 'Lebar_Bang': 'TextEdit', 'Lebar_Jala': 'TextEdit', 'Nama': 'TextEdit', 'Panjang_Ja': 'TextEdit', 'Tinggi_Ban': 'TextEdit', 'Tipe': 'TextEdit', 'row_num': 'TextEdit', 'arah': 'TextEdit', 'FOTO': 'TextEdit', });
lyr_BatasDesaKelurahan_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'jumlah_kk': 'TextEdit', 'pria': 'TextEdit', 'wanita': 'TextEdit', 'Balita': 'Range', 'lansia': 'Range', });
lyr_INDEKSBAHAYABANJIRINARISKBNPB_3.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', });
lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', });
lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', });
lyr_INDEKSBAHAYALONSGORINARISKBNPB_6.set('fieldLabels', {'OBJECTID': 'inline label', 'Id': 'inline label', 'gridcode': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_StrukturGeologi_7.set('fieldLabels', {'OBJECTID': 'inline label', 'fcode': 'inline label', 'namobj': 'inline label', 'klsstr': 'inline label', 'remark': 'inline label', 'Shape_Leng': 'inline label', });
lyr_TitikGempa5magTahun902022_8.set('fieldLabels', {'time': 'inline label', 'latitude': 'inline label', 'longitude': 'inline label', 'depth': 'inline label', 'mag': 'inline label', 'magType': 'inline label', 'nst': 'inline label', 'gap': 'inline label', 'dmin': 'inline label', 'rms': 'inline label', 'net': 'inline label', 'id': 'inline label', 'updated': 'inline label', 'place': 'inline label', 'type': 'inline label', 'horizontal': 'inline label', 'depthError': 'inline label', 'magError': 'inline label', 'magNst': 'inline label', 'status': 'inline label', 'locationSo': 'inline label', 'magSource': 'inline label', });
lyr_TitikBangunan1LantaiHasilPMap_9.set('fieldLabels', {'Name': 'inline label', 'pdfmaps_ph': 'inline label', 'Kemiringan': 'inline label', 'Keterangan': 'inline label', 'Kondisi_Ba': 'inline label', 'Kondisi_Ja': 'inline label', 'Lebar_Bang': 'inline label', 'Lebar_Jala': 'inline label', 'Nama': 'inline label', 'Panjang_Ja': 'inline label', 'Tinggi_Ban': 'inline label', 'Tipe': 'inline label', 'row_num': 'inline label', 'arah': 'inline label', 'FOTO': 'inline label', });
lyr_BatasDesaKelurahan_10.set('fieldLabels', {'NAMOBJ': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'jumlah_kk': 'inline label', 'pria': 'inline label', 'wanita': 'inline label', 'Balita': 'inline label', 'lansia': 'inline label', });
lyr_BatasDesaKelurahan_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});