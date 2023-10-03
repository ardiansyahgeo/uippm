var size = 0;
var placement = 'point';
function categories_JANGKAUANMENUJUTEMPATAMAN_11(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '0-5 MENIT':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(17,134,101,0.439)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '5-10 MENIT':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(171,221,164,0.439)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '10-15 MENIT':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,191,0.439)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '15-30 MENIT':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,174,97,0.439)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '30-45 MENIT':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,0.439)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_JANGKAUANMENUJUTEMPATAMAN_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("KET");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_JANGKAUANMENUJUTEMPATAMAN_11(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
