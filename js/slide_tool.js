function muestra_consulta_catastral() {
    var texto1 = document.getElementById('intro_titulo');
    var texto2 = document.getElementById('intro_parrafo');
    var texto3 = document.getElementById('consulta_catastral');
    var texto4 = document.getElementById('mapas_tematicos');
    var texto5 = document.getElementById('geoservicios');
    var texto6 = document.getElementById('metadatos');

    var cont_mt = document.getElementById('cont_mt');
    var cont_gs = document.getElementById('cont_gs');
    var cont_md = document.getElementById('cont_md');

    texto1.classList.replace('p_intro', 'texto_intro_oculto');
    texto2.classList.replace('p_intro', 'texto_intro_oculto');
    texto3.classList.replace('p_titulo_herramienta_oculto', 'p_titulo_herramienta');
    texto4.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto5.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto6.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');

    cont_mt.classList.replace('cont_mt', 'cont_mt_oculto');
    cont_gs.classList.replace('cont_gs', 'cont_gs_oculto');
    cont_md.classList.replace('cont_md', 'cont_md_oculto');
}

function muestra_mapas_tematicos() {
    var texto1 = document.getElementById('intro_titulo');
    var texto2 = document.getElementById('intro_parrafo');
    var texto3 = document.getElementById('consulta_catastral');
    var texto4 = document.getElementById('mapas_tematicos');
    var texto5 = document.getElementById('geoservicios');
    var texto6 = document.getElementById('metadatos');
 
    var cont_mt = document.getElementById('cont_mt');
    var cont_gs = document.getElementById('cont_gs');
    var cont_md = document.getElementById('cont_md');
    
    // Alternar la clase para ocultar o mostrar el texto
    texto1.classList.replace('p_intro', 'texto_intro_oculto');
    texto2.classList.replace('p_intro', 'texto_intro_oculto');
    texto3.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto4.classList.replace('p_titulo_herramienta_oculto', 'p_titulo_herramienta');
    texto5.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto6.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');

    cont_mt.classList.replace('cont_mt_oculto', 'cont_mt');
    cont_gs.classList.replace('cont_gs', 'cont_gs_oculto');
    cont_md.classList.replace('cont_md', 'cont_md_oculto');
}

function muestra_geoservicios() {
    var texto1 = document.getElementById('intro_titulo');
    var texto2 = document.getElementById('intro_parrafo');
    var texto3 = document.getElementById('consulta_catastral');
    var texto4 = document.getElementById('mapas_tematicos');
    var texto5 = document.getElementById('geoservicios');
    var texto6 = document.getElementById('metadatos');

    var cont_mt = document.getElementById('cont_mt');
    var cont_gs = document.getElementById('cont_gs');
    var cont_md = document.getElementById('cont_md');

    // Alternar la clase para ocultar o mostrar el texto
    texto1.classList.replace('p_intro', 'texto_intro_oculto');
    texto2.classList.replace('p_intro', 'texto_intro_oculto');
    texto3.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto4.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto5.classList.replace('p_titulo_herramienta_oculto', 'p_titulo_herramienta');
    texto6.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');

    cont_mt.classList.replace('cont_mt', 'cont_mt_oculto');
    cont_gs.classList.replace('cont_gs_oculto', 'cont_gs');
    cont_md.classList.replace('cont_md', 'cont_md_oculto');
}

function muestra_metadatos() {
    var texto1 = document.getElementById('intro_titulo');
    var texto2 = document.getElementById('intro_parrafo');
    var texto3 = document.getElementById('consulta_catastral');
    var texto4 = document.getElementById('mapas_tematicos');
    var texto5 = document.getElementById('geoservicios');
    var texto6 = document.getElementById('metadatos');

    var cont_mt = document.getElementById('cont_mt');
    var cont_gs = document.getElementById('cont_gs');
    var cont_md = document.getElementById('cont_md');

    // Alternar la clase para ocultar o mostrar el texto
    texto1.classList.replace('p_intro', 'texto_intro_oculto');
    texto2.classList.replace('p_intro', 'texto_intro_oculto');
    texto3.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto4.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto5.classList.replace('p_titulo_herramienta', 'p_titulo_herramienta_oculto');
    texto6.classList.replace('p_titulo_herramienta_oculto', 'p_titulo_herramienta');

    cont_mt.classList.replace('cont_mt', 'cont_mt_oculto');
    cont_gs.classList.replace('cont_gs', 'cont_gs_oculto');
    cont_md.classList.replace('cont_md_oculto', 'cont_md');
}