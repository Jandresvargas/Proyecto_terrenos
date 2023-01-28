<?php
  $dbconn = pg_connect("host=localhost port=5433 dbname=Proyecto_SIG3 password=12345")
     or die("Could not connect");
     
  $v = pg_version($dbconn);
  
  echo $v['client'];
?>