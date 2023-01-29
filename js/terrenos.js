// STYLE 
function style_terrenos(feature){
	return{
		fillColor: '#E0F2F7',
		fillOpacity: 0.5,
		color: '#0000FF',
		opacity: 1,
		weight: 0.5
	};
}
function info_popup(feature, layer){
	layer.bindPopup("<h4>" + feature.properties.cod_catast + "</h4><hr>"+"<strong> Area: </strong>"+feature.properties.area+"<br/>");
	}

// Carga Geojson BDG
var terrenos = L.geoJSON(null);
$.post("php/upload_terrenos.php",
		{
			peticion: 'upload_terrenos'
		},function (data, status, feature)
		{
		if(status=='success'){
			terrenos = eval('('+data+')')
			var terrenos = L.geoJSON(terrenos, {
				style: style_terrenos,
				onEachFeature: info_popup,
			}).addTo(map);
		document.getElementById("text_tools");
		}
	});
