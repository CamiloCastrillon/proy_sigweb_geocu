const buscarPredio = () => {
    const npn = document.getElementById('in_npn').value
    if (npn === ''){
        alert('Digite un npn de 30 digitos')
    }else if(npn.length !== 30){
        alert('El numero suministrado debe ser de 30 digitos')
    }else{
        const url = `http://44.214.39.85:8100/geovisor/geojson/${npn}`
        fetch(url)
        .then(response => response.json()) 
        .then(json => {
            const consulta = L.geoJSON(json).addTo(map);
            console.log(json)
            map.flyToBounds(consulta.getBounds());
        }); 
    }
}
