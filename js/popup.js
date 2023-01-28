function popup(feature, layer){
	if(feature.properties && feature.properties.barrio){
		layer.bindPopup('<strong>Barrio: </strong>' + feature.properties.nombre 
		+ '<br/>' + '<strong>Estrato: </strong>' + feature.properties.area
		+ '<br/>' + '<strong>Total de viviendas: </strong>' + feature.properties.id_comuna);
	}
}