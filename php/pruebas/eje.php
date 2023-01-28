<?php
require "conect2.php";
$conn = new PDO("pgsql:host=".$remote_dbhost.";dbname=".$remote_dbname."",
"".$remote_dbuser."",$remote_dbpassword."");

$sql = "SELECT *, ST_AsGeoJSON(geom) AS geojson FROM barrios";
$result = $conn -> query($sql);
if (!$result){
    echo "SQL error!";
    exit();
}
?>