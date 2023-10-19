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

// Recibir datos enviados desde la solicitud POST en formato JSON
$data = json_decode(file_get_contents('php://input'), true);
$id = mysqli_real_escape_string($connection, $data['id']);
$nombre = mysqli_real_escape_string($connection, $data['nombre']);
$apellido = mysqli_real_escape_string($connection, $data['apellido']);
$mail = mysqli_real_escape_string($connection, $data['mail']);
$dni = mysqli_real_escape_string($connection, $data['dni']);
$consulta = mysqli_real_escape_string($connection, $data['consulta']);

// Actualizar datos en la base de datos

$updateQuery = "UPDATE contacto(nombre, apellido, dni,) SET nombre='$nombre', apellido='$apellido', dni='$dni', consulta='$consulta' WHERE mail= '$mail'";

if (mysqli_query($connection, $updateQuery)) {
    $response = array('status' => 'success', 'message' => 'Datos actualizados correctamente');
} else {
    $response = array('status' => 'error', 'message' => 'Error al actualizar datos: ' . mysqli_error($connection));
}

// Cerrar la conexión a la base de datos
mysqli_close($connection);

// Respuesta al cliente
echo json_encode($response);
?>
