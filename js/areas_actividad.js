// STYLE 
function style_actividad(feature){
	return{
		fillColor: '#A3D9E7',
		fillOpacity: 0.5,
		color: '#80FF00',
		opacity: 1,
		weight: 0.5
	};
}
// Carga Geojson BDG
var areas_actividad = L.geoJSON();
$.post("php/upload_areas_actividad.php",
		{
			peticion: 'upload_areas_actividad'
		},function (data, status, feature)
		{
		if(status=='success'){
			areas_actividad = eval('('+data+')')
			var areas_actividad = L.geoJSON(areas_actividad, {
				style: style_actividad,

			});
		}
	});
