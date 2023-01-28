<?php
define("PG_DB", "Proyecto_SIG3");
define("PG_HOST", "localhost");
define("PG_USER", "postgres");
define("PG_PSW", "12345");
define("PG_PORT", "5433");

function getData(){


  $conect = pg_connect("dbname=".PG_DB." host=".PG_HOST." user=" .PG_USER." password=".PG_PSW." port=".PG_PORT."");
  $v = pg_version($conect);
  
  echo $v['client'];

  if (!$conect) {
    echo("Error in connection: " . pg_last_error());
  }
  else {
    echo ("conected");
  }

  if ($conect -> connect_errno){
    echo $conect->connect_error;
  }
  $query = "SELECT * FROM barrios";
  $result = $conect->query($query);

  $rowCount = $result->num_rows;
  echo $rowCount;

  }
getData();
?>