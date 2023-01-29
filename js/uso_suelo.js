function getColor(d){
	return 	d > 7 ? '#00FF2E':  //180-240 poblacion alta
			d > 6 ? '#F9D900':  //119-180 poblacion media
			d > 5  ? '#FF8700':  //58-119  baja
			d > 4 ? '#800026':  //180-240 poblacion alta
			d > 3 ? '#BD0026':  //119-180 poblacion media
			d > 2  ? '#E31A1C':  //58-119  baja
					'FFEDA0';
}// STYLE 
function style_barrios(feature){
	return{
		fillColor: getColor(feature.properties.density),
		weight: 0.5,
		opacity: 1,
		color: 'white',
		opacity: 1,
		fillOpacity: 0.7
		
	};
}
// Carga Geojson BDG
var uso_suelo = L.geoJSON();
$.post("php/upload_areas_actividad.php",
		{
			peticion: 'upload_areas_actividad'
		},function (data, status, feature)
		{
		if(status=='success')
		{
			uso_suelo2 = eval('('+data+')');
		}
	});
var removeMarkers = function() {
		map.eachLayer( function(layer) {
		  if ( layer.myTag && layer.myTag === "uso_suelo") {
			map.removeLayer(layer)
			  }
			});
	}
function suelos(){
	if(document.getElementById("btn_areas").checked){
		var uso_suelo = L.geoJSON(uso_suelo2,{
			style:style_barrios,
			onEachFeature: function(feature,layer) {
				layer.myTag = "uso_suelo"
			}}).addTo(map);
			L.geoJSON(uso_suelo,{style: style_barrios});

	}else{
		removeMarkers();
		
	}

}
