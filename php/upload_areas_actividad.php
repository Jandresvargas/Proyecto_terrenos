<?php
	//configuracion de la conexion a la gdb
    include('connection.php');
    session_start();

	if(!isset($_POST['peticion']))
	{
		$_POST['peticion'] = "peticion";
	}
	if(!isset($_POST['parametros']))
	{
		$_POST['parametros'] = 'parametros';
	}
	$peticion = $_POST['peticion'];
	$parametros = $_POST['parametros'];

	switch($peticion)
	{
		case 'upload_areas_actividad':
		{
			$sql="SELECT row_to_json(fc) AS geojson
			 FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
			 FROM (SELECT 'Feature' As type
				, ST_AsGeoJSON(lg.geom)::json As geometry
				, row_to_json((SELECT l FROM (SELECT id_activ, id_barrio) As l
				  )) As properties
			   FROM areas_actividad As lg ) As f )  As fc;";
   
			$query = pg_query($conect,$sql);
			$row = pg_fetch_row($query);

			echo $row[0];

			break;
		}
	}
?>