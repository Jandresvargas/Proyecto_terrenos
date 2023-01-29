
// STYLE 
function style_terra(feature){
	return{
		fillColor: '#BF5032',
		fillOpacity: 0.5,
		color: '#BF5032',
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
		if(status=='success')
		{
			terrenos2 = eval('('+data+')')
			var terrenos = L.geoJSON(terrenos, {
				style: style_terra,
				onEachFeature: info_popup,
			}).addTo(map);
		document.getElementById("text_tools")
			
		}
	});
var removeMarkers = function() {
		map.eachLayer( function(layer) {
		  if ( layer.myTag && layer.myTag === "terrenos") {
			map.removeLayer(layer)
			  }
			});
	}
function terra(){
	if(document.getElementById("btn_terra").checked){
		var terrenos = L.geoJSON(terrenos,{
			style:style_terra,
			onEachFeature: function(feature,layer) {
				layer.myTag = "terrenos"
			}}).addTo(map);

	}else{
		removeMarkers();
		
	}

}
