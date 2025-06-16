var wms_layers = [];

var format_ADMINISTRASIKECAMATAN_AR_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_0 = format_ADMINISTRASIKECAMATAN_AR_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_0);
var lyr_ADMINISTRASIKECAMATAN_AR_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_0,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR',
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_0.png" /> Bangli<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_1.png" /> Banjarangkan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_2.png" /> Danau Batur<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_3.png" /> Gianyar<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_4.png" /> Kintamani<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_5.png" /> Kubutambahan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_6.png" /> Payangan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_7.png" /> Susut<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_8.png" /> Tampaksiring<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_9.png" /> Tegalallang<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_10.png" /> Tejakula<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_11.png" /> Tembuku<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_0_12.png" /> <br />' });
var format_JALAN_LN_25K_1 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_1 = format_JALAN_LN_25K_1.readFeatures(json_JALAN_LN_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_1.addFeatures(features_JALAN_LN_25K_1);
var lyr_JALAN_LN_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_1, 
                style: style_JALAN_LN_25K_1,
                popuplayertitle: 'JALAN_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_1.png" /> JALAN_LN_25K'
            });
var format_SUNGAI_LN_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_2 = format_SUNGAI_LN_25K_2.readFeatures(json_SUNGAI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_2.addFeatures(features_SUNGAI_LN_25K_2);
var lyr_SUNGAI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_2, 
                style: style_SUNGAI_LN_25K_2,
                popuplayertitle: 'SUNGAI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_2.png" /> SUNGAI_LN_25K'
            });
var format_RUMAHSAKIT_PT_25K_3 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_25K_3 = format_RUMAHSAKIT_PT_25K_3.readFeatures(json_RUMAHSAKIT_PT_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_25K_3.addFeatures(features_RUMAHSAKIT_PT_25K_3);
var lyr_RUMAHSAKIT_PT_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_25K_3, 
                style: style_RUMAHSAKIT_PT_25K_3,
                popuplayertitle: 'RUMAHSAKIT_PT_25K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_25K_3.png" /> RUMAHSAKIT_PT_25K'
            });
var format_PEMERINTAHAN_PT_25K_4 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_4 = format_PEMERINTAHAN_PT_25K_4.readFeatures(json_PEMERINTAHAN_PT_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_4.addFeatures(features_PEMERINTAHAN_PT_25K_4);
var lyr_PEMERINTAHAN_PT_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_25K_4, 
                style: style_PEMERINTAHAN_PT_25K_4,
                popuplayertitle: 'PEMERINTAHAN_PT_25K',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_25K_4.png" /> PEMERINTAHAN_PT_25K'
            });
var format_JEMBATAN_PT_25K_5 = new ol.format.GeoJSON();
var features_JEMBATAN_PT_25K_5 = format_JEMBATAN_PT_25K_5.readFeatures(json_JEMBATAN_PT_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_PT_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_PT_25K_5.addFeatures(features_JEMBATAN_PT_25K_5);
var lyr_JEMBATAN_PT_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_PT_25K_5, 
                style: style_JEMBATAN_PT_25K_5,
                popuplayertitle: 'JEMBATAN_PT_25K',
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_PT_25K_5.png" /> JEMBATAN_PT_25K'
            });
var format_PENDIDIKAN_PT_25K_6 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_6 = format_PENDIDIKAN_PT_25K_6.readFeatures(json_PENDIDIKAN_PT_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_6.addFeatures(features_PENDIDIKAN_PT_25K_6);
var lyr_PENDIDIKAN_PT_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_25K_6, 
                style: style_PENDIDIKAN_PT_25K_6,
                popuplayertitle: 'PENDIDIKAN_PT_25K',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_6.png" /> PENDIDIKAN_PT_25K'
            });
var format_SARANAIBADAH_PT_25K_7 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_25K_7 = format_SARANAIBADAH_PT_25K_7.readFeatures(json_SARANAIBADAH_PT_25K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_25K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_25K_7.addFeatures(features_SARANAIBADAH_PT_25K_7);
var lyr_SARANAIBADAH_PT_25K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_25K_7, 
                style: style_SARANAIBADAH_PT_25K_7,
                popuplayertitle: 'SARANAIBADAH_PT_25K',
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_25K_7.png" /> SARANAIBADAH_PT_25K'
            });

lyr_ADMINISTRASIKECAMATAN_AR_0.setVisible(true);lyr_JALAN_LN_25K_1.setVisible(true);lyr_SUNGAI_LN_25K_2.setVisible(true);lyr_RUMAHSAKIT_PT_25K_3.setVisible(true);lyr_PEMERINTAHAN_PT_25K_4.setVisible(true);lyr_JEMBATAN_PT_25K_5.setVisible(true);lyr_PENDIDIKAN_PT_25K_6.setVisible(true);lyr_SARANAIBADAH_PT_25K_7.setVisible(true);
var layersList = [lyr_ADMINISTRASIKECAMATAN_AR_0,lyr_JALAN_LN_25K_1,lyr_SUNGAI_LN_25K_2,lyr_RUMAHSAKIT_PT_25K_3,lyr_PEMERINTAHAN_PT_25K_4,lyr_JEMBATAN_PT_25K_5,lyr_PENDIDIKAN_PT_25K_6,lyr_SARANAIBADAH_PT_25K_7];
lyr_ADMINISTRASIKECAMATAN_AR_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_25K_1.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RUMAHSAKIT_PT_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_PEMERINTAHAN_PT_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_JEMBATAN_PT_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_PT_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_SARANAIBADAH_PT_25K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_ADMINISTRASIKECAMATAN_AR_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_25K_1.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SUNGAI_LN_25K_2.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_RUMAHSAKIT_PT_25K_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_PEMERINTAHAN_PT_25K_4.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_JEMBATAN_PT_25K_5.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'JBTJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PENDIDIKAN_PT_25K_6.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_SARANAIBADAH_PT_25K_7.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FGSIBD': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_ADMINISTRASIKECAMATAN_AR_0.set('fieldLabels', {'KDPPUM': 'inline label - always visible', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_25K_1.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_RUMAHSAKIT_PT_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_PEMERINTAHAN_PT_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_JEMBATAN_PT_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PENDIDIKAN_PT_25K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_SARANAIBADAH_PT_25K_7.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'FGSIBD': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', });
lyr_SARANAIBADAH_PT_25K_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});