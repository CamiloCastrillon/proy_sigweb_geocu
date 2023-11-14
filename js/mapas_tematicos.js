function color_ec(nom_ecosis) {
    return nom_ecosis === 'Bosque frio humedo en montana fluvio-gravitacional' ? '#2FFAC7' :
    nom_ecosis === 'Arbustales y matorrales medio muy seco en montana fluvio-gravitacional' ? '#2FF781' :
    nom_ecosis === 'Bosque calido seco en lomerio fluvio-lacustre' ? '#2FF73C' :
    nom_ecosis === 'Bosque medio humedo en montana fluvio-gravitacional' ? '#72F72F' :
    nom_ecosis === 'Bosque calido seco en planicie aluvial' ? '#C6F72F' :
    nom_ecosis === 'Bosque calido seco en piedemonte aluvial' ? '#F7F22F' :
    '#FC4E2A';
}

function bio_ec_style(feature) {
    return {
        fillColor: color_ec(feature.properties.NOM_ECOSIS),
        opacity: 1,
        weight: 0,
        fillOpacity: 0.5
    };
}

function color_re(especie) {
    return especie === 'Animalia' ? '#000778' :
    especie === 'Plantae' ? '#084600' :
    '#FC4E2A';
}
function bio_re_style(feature) {
    return {
        fillColor: color_re(feature.properties.REINO),
        radius: 4,
        weight: 2,
        opacity: 1,
        weight: 0,
        fillOpacity: 0.8
    };
}

var bio_ap_style = {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.3,
    weight: 1
};

var bio_ap = L.geoJSON(areas_protegidas, bio_ap_style);
var bio_ec = L.geoJSON(ecosistemas, {style: bio_ec_style});
var bio_re = L.geoJSON(registro_especies, {
    pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, bio_re_style(feature))}});

var cc_es = L.geoJSON(est_red_h);
var cc_hu = L.geoJSON(humedad);
var cc_pt = L.geoJSON(piso_termico);

function ver_ap() {
    if (map.hasLayer(bio_ap)) {
        map.removeLayer(bio_ap);
      } else {
        map.addLayer(bio_ap);
      }
}

function ver_ec() {
    if (map.hasLayer(bio_ec)) {
        map.removeLayer(bio_ec);
      } else {
        map.addLayer(bio_ec);
      }

    var leyenda = document.getElementById('leyenda_ec');

    // Verificar la clase actual
    if (leyenda.classList.contains('cont_ley_oculto')) {
        // Si tiene la clase inicial, quitarla y agregar la nueva clase
        leyenda.classList.replace('cont_ley_oculto', 'cont_ley');
    } else {
        // Si tiene la nueva clase, quitarla y agregar la clase inicial
        leyenda.classList.replace('cont_ley', 'cont_ley_oculto');
    }
}

function ver_re() {
    if (map.hasLayer(bio_re)) {
        map.removeLayer(bio_re);
      } else {
        map.addLayer(bio_re);
      }

    var leyenda = document.getElementById('leyenda_re');

    // Verificar la clase actual
    if (leyenda.classList.contains('cont_ley_oculto')) {
        // Si tiene la clase inicial, quitarla y agregar la nueva clase
        leyenda.classList.replace('cont_ley_oculto', 'cont_ley');
    } else {
        // Si tiene la nueva clase, quitarla y agregar la clase inicial
        leyenda.classList.replace('cont_ley', 'cont_ley_oculto');
    }
}