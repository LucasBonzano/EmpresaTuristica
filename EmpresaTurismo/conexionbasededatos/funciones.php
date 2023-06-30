<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('Content-Type: text/html; charset=UTF-8');

$method = $_SERVER['REQUEST_METHOD'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formulario";

// Establecer conexión a la base de datos
$connection = mysqli_connect($servername, $username, $password, $dbname);

// Verificar errores en la conexión a la base de datos
if ($connection->connect_error) {
    die("Error de conexión: " . $connection->connect_error);
}
// Verificar si hay errores en la conexión
if (!$connection) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Recibir datos enviados desde la solicitud POST en formato JSON
$data = json_decode(file_get_contents('php://input'), true);
$nombre = $data['nombre'];
$apellido = $data['apellido'];
$mail = $data['mail'];
$dni = $data['dni'];
$consulta = $data['consulta'];

// Realizar la inserción de datos en la base de datos
$insertQuery = "INSERT INTO contacto(nombre, apellido, mail, dni, consulta, id) VALUES ('$nombre', '$apellido', '$mail', '$dni', '$consulta', '')";
mysqli_query($connection, $insertQuery);

// Cerrar la conexión a la base de datos
mysqli_close($connection);

// Respuesta al cliente (puedes personalizarla según tus necesidades)
$response = array('status' => 'success', 'message' => 'Datos insertados correctamente');
echo json_encode($response);
?>
