<?php

//  Credenciales de conexion con GDB

define("PG_DB", "Proyecto_SIG3");
define("PG_HOST", "localhost");
define("PG_USER", "postgres");
define("PG_PSW", "12345");
define("PG_PORT", "5433");

$conect = pg_connect("dbname=".PG_DB." host=".PG_HOST." user=" .PG_USER." password=".PG_PSW." port=".PG_PORT."");

?>