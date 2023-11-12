function muestra_consulta_catastral() {
    var texto1 = document.getElementById('intro_titulo');
    var texto2 = document.getElementById('intro_parrafo');
    var texto3 = document.getElementById('consulta_catastral');
    var texto4 = document.getElementById('mapas_tematicos');
    var texto5 = document.getElementById('geoservicios');
    var texto6 = document.getElementById('metadatos');

    var p_uso_suelo = document.getElementById('uso_suelo');
    var p_gr = document.getElementById('gestion_riesgo');
    var p_bio = document.getElementById('biodiversidad');
    var p_cc = document.getElementById('cambio_climatico');

    var bt_ver_us = document.getElementById('ver_us');
    var bt_ver_gr = document.getElementById('ver_gr');
    var bt_ver_bio = document.getElementById('ver_bio');
    var bt_ver_cc = document.getElementById('ver_cc');
    
    var cont_gs = document.getElementById('cont_gs');

    texto1.classList.replace('p_intro', 'texto_intro_oculto');
    texto2.classList.replace('p_intro', 'texto_intro_oculto');
    texto3.classList.replace('p_titulo_herramienta_oculto', 'p_titulo_herramienta');
    texto4.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto5.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto6.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');

    p_uso_suelo.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');
    p_gr.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');
    p_bio.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');
    p_cc.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');

    bt_ver_us.classList.replace('ver_mt', 'ver_mt_oculto');
    bt_ver_gr.classList.replace('ver_mt', 'ver_mt_oculto');
    bt_ver_bio.classList.replace('ver_mt', 'ver_mt_oculto');
    bt_ver_cc.classList.replace('ver_mt', 'ver_mt_oculto');

    cont_gs.classList.replace('cont_gs', 'cont_gs_oculto');
}

function muestra_mapas_tematicos() {
    var texto1 = document.getElementById('intro_titulo');
    var texto2 = document.getElementById('intro_parrafo');
    var texto3 = document.getElementById('consulta_catastral');
    var texto4 = document.getElementById('mapas_tematicos');
    var texto5 = document.getElementById('geoservicios');
    var texto6 = document.getElementById('metadatos');

    var p_uso_suelo = document.getElementById('uso_suelo');
    var p_gr = document.getElementById('gestion_riesgo');
    var p_bio = document.getElementById('biodiversidad');
    var p_cc = document.getElementById('cambio_climatico');
    
    var bt_ver_us = document.getElementById('ver_us');
    var bt_ver_gr = document.getElementById('ver_gr');
    var bt_ver_bio = document.getElementById('ver_bio');
    var bt_ver_cc = document.getElementById('ver_cc');
    
    var cont_gs = document.getElementById('cont_gs');
    
    // Alternar la clase para ocultar o mostrar el texto
    texto1.classList.replace('p_intro', 'texto_intro_oculto');
    texto2.classList.replace('p_intro', 'texto_intro_oculto');
    texto3.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto4.classList.replace('p_titulo_herramienta_oculto', 'p_titulo_herramienta');
    texto5.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto6.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');

    p_uso_suelo.classList.replace('p_mapas_tematicos_oculto', 'p_mapas_tematicos');
    p_gr.classList.replace('p_mapas_tematicos_oculto', 'p_mapas_tematicos');
    p_bio.classList.replace('p_mapas_tematicos_oculto', 'p_mapas_tematicos');
    p_cc.classList.replace('p_mapas_tematicos_oculto', 'p_mapas_tematicos');

    bt_ver_us.classList.replace('ver_mt_oculto', 'ver_mt');
    bt_ver_gr.classList.replace('ver_mt_oculto', 'ver_mt');
    bt_ver_bio.classList.replace('ver_mt_oculto', 'ver_mt');
    bt_ver_cc.classList.replace('ver_mt_oculto', 'ver_mt');
    
    cont_gs.classList.replace('cont_gs', 'cont_gs_oculto');
}

function muestra_geoservicios() {
    var texto1 = document.getElementById('intro_titulo');
    var texto2 = document.getElementById('intro_parrafo');
    var texto3 = document.getElementById('consulta_catastral');
    var texto4 = document.getElementById('mapas_tematicos');
    var texto5 = document.getElementById('geoservicios');
    var texto6 = document.getElementById('metadatos');
    
    var p_uso_suelo = document.getElementById('uso_suelo');
    var p_gr = document.getElementById('gestion_riesgo');
    var p_bio = document.getElementById('biodiversidad');
    var p_cc = document.getElementById('cambio_climatico');
    
    var bt_ver_us = document.getElementById('ver_us');
    var bt_ver_gr = document.getElementById('ver_gr');
    var bt_ver_bio = document.getElementById('ver_bio');
    var bt_ver_cc = document.getElementById('ver_cc');

    var cont_gs = document.getElementById('cont_gs');

    // Alternar la clase para ocultar o mostrar el texto
    texto1.classList.replace('p_intro', 'texto_intro_oculto');
    texto2.classList.replace('p_intro', 'texto_intro_oculto');
    texto3.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto4.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto5.classList.replace('p_titulo_herramienta_oculto', 'p_titulo_herramienta');
    texto6.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');

    p_uso_suelo.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');
    p_gr.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');
    p_bio.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');
    p_cc.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');

    bt_ver_us.classList.replace('ver_mt', 'ver_mt_oculto');
    bt_ver_gr.classList.replace('ver_mt', 'ver_mt_oculto');
    bt_ver_bio.classList.replace('ver_mt', 'ver_mt_oculto');
    bt_ver_cc.classList.replace('ver_mt', 'ver_mt_oculto');

    cont_gs.classList.replace('cont_gs_oculto', 'cont_gs');
}

function muestra_metadatos() {
    var texto1 = document.getElementById('intro_titulo');
    var texto2 = document.getElementById('intro_parrafo');
    var texto3 = document.getElementById('consulta_catastral');
    var texto4 = document.getElementById('mapas_tematicos');
    var texto5 = document.getElementById('geoservicios');
    var texto6 = document.getElementById('metadatos');

    var p_uso_suelo = document.getElementById('uso_suelo');
    var p_gr = document.getElementById('gestion_riesgo');
    var p_bio = document.getElementById('biodiversidad');
    var p_cc = document.getElementById('cambio_climatico');
    
    var bt_ver_us = document.getElementById('ver_us');
    var bt_ver_gr = document.getElementById('ver_gr');
    var bt_ver_bio = document.getElementById('ver_bio');
    var bt_ver_cc = document.getElementById('ver_cc');

    var cont_gs = document.getElementById('cont_gs');

    // Alternar la clase para ocultar o mostrar el texto
    texto1.classList.replace('p_intro', 'texto_intro_oculto');
    texto2.classList.replace('p_intro', 'texto_intro_oculto');
    texto3.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto4.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto5.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto6.classList.replace('p_titulo_herramienta_oculto', 'p_titulo_herramienta');

    p_uso_suelo.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');
    p_gr.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');
    p_bio.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');
    p_cc.classList.replace('p_mapas_tematicos', 'p_mapas_tematicos_oculto');

    bt_ver_us.classList.replace('ver_mt', 'ver_mt_oculto');
    bt_ver_gr.classList.replace('ver_mt', 'ver_mt_oculto');
    bt_ver_bio.classList.replace('ver_mt', 'ver_mt_oculto');
    bt_ver_cc.classList.replace('ver_mt', 'ver_mt_oculto');

    cont_gs.classList.replace('cont_gs', 'cont_gs_oculto');
}