<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, UPDATE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE, UPDATE");
header('Content-Type: application/json; charset=UTF-8');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formulario";

// Establecer conexión a la base de datos
$connection = mysqli_connect($servername, $username, $password, $dbname);

// Verificar errores en la conexión a la base de datos
if (!$connection) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Realizar la consulta para obtener datos de la base de datos
$selectQuery = "SELECT * FROM contacto";
$result = mysqli_query($connection, $selectQuery);

if (!$result) {
    die("Error al obtener datos: " . mysqli_error($connection));
}

// Crear un array para almacenar los registros
$registros = array();

while ($row = mysqli_fetch_assoc($result)) {
    $registros[] = $row;
}

// Cerrar la conexión a la base de datos
mysqli_close($connection);

// Respuesta al cliente
echo json_encode($registros);
?>
