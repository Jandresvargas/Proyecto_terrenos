function info_popup(feature, layer){
	var popupContent="Holaaaaaaaaaaaaaaaa";
	if(feature.properties && feature.properties.barrios){
		popupContent += feature.properties.barrios;
	} else {
		popupContent += 0
	}
	layer.bindPopup(popupContent);
}