
// STYLE 
function style_barrios(feature){
	return{
		fillColor: '#A3D9E7',
		fillOpacity: 0.5,
		color: '#80FF00',
		opacity: 1,
		weight: 0.5
	};
}
function info_popup(feature, layer){
	layer.bindPopup("<h4>" + feature.properties.nombre + "</h4><hr>"+"<strong> Area: </strong>"+feature.properties.area+"<br/>");
	}
// Carga Geojson BDG
var barrios = L.geoJSON();
$.post("php/upload_barrios.php",
		{
			peticion: 'upload_barrios'
		},function (data, status, feature)	{
		if(status=='success')
		{
			barrios2 = eval('('+data+')')
			var barrios = L.geoJSON(barrios, {
				style: style_barrios,
				onEachFeature: info_popup,})
			document.getElementById("text_tools");
		}
	});
var removeMarkers = function() {
		map.eachLayer( function(layer) {
		  if ( layer.myTag && layer.myTag === "barrios") {
			map.removeLayer(layer)
			  }
			});
	}
function barrioss(){
	if(document.getElementById("btn_residencia").checked){
		var barrios = L.geoJSON(barrios2,{
			style:style_barrios,
			onEachFeature: function(feature,layer) {
				layer.myTag = "barrios",info_popup
			}}).addTo(map);
		document.getElementById("text_tools");
	}else{
		removeMarkers();
		
	}

}
