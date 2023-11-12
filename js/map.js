var map = L.map('map', {
    maxBounds: L.latLngBounds(
        L.latLng(4.58, -76.20), // Esquina superior izquierda del área permitida
        L.latLng(4.5, -76.0)  // Esquina inferior derecha del área permitida
      )
  }).setView([4.54, -76.10], 12);

var mapa_base = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 12,
	maxZoom: 16
}).addTo(map);

var wms_divipol = L.tileLayer.wms('https://www.geo.cvc.gov.co/arcgis/services/CARTO_BASICA/Division_politica/MapServer/WMSServer?request=GetCapabilities&service=WMS', {
    layers: 'NOMBRE_DE_LA_CAPA_WMS',
    format: 'image/png',
    transparent: true,
    attribution: 'Atribución del WMS'
}).addTo(map);