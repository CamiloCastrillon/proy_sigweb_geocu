const buscarPredio = () => {
    const npn = document.getElementById('in_npn').value
    if (npn === ''){
        alert('Digite un npn de 30 digitos')
    }else if(npn.length !== 30){
        alert('El numero suministrado debe ser de 30 digitos')
    }else{
        //const url = `http://44.214.39.85:8100/geovisor/geojson/${npn}`
        const url = `http://localhost:8100/geovisor/geojson/${npn}`
        fetch(url)
        .then(response => response.json()) 
        .then(json => {
            if (json.status === 1){
                const consulta = L.geoJSON(json.data.terrenos).addTo(map);
                map.flyToBounds(consulta.getBounds());
                console.log(json.message)
            }else{
                console.log(json.message)
            }
            document.getElementById('table_consulta_npn').innerHTML = json.data.npn
            document.getElementById('table_consulta_area').innerHTML = json.data.terrenos.properties.area_digitada

        }); 
    }
}
