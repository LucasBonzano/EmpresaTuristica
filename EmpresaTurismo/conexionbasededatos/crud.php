<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

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

// Recibir datos enviados desde la solicitud POST en formato JSON
$data = json_decode(file_get_contents('php://input'), true);
$nombre = $data['nombre'];
$apellido = $data['apellido'];
$mail = $data['mail'];
$dni = $data['dni'];
$consulta = $data['consulta'];
$id = $data['id'];

// Manejo de operaciones CRUD
if ($method === 'POST') {
    // Realizar la inserción de datos en la base de datos
    $insertQuery = "INSERT INTO contacto(nombre, apellido, mail, dni, consulta, id) VALUES ('$nombre', '$apellido', '$mail', '$dni', '$consulta', '$id')";
    
    if (mysqli_query($connection, $insertQuery)) {
        $response = array('status' => 'success', 'message' => 'Datos insertados correctamente');
        echo json_encode($response);
    } else {
        $response = array('status' => 'error', 'message' => 'Error al insertar datos: ' . mysqli_error($connection));
        echo json_encode($response);
    }
} elseif ($method === 'GET') {
    // Lógica para obtener datos (por ejemplo, una consulta SELECT)
    // Aquí debes realizar una consulta SELECT y devolver los resultados
    // en el formato adecuado (JSON) como respuesta al cliente.
    // Ejemplo:
    $selectQuery = "SELECT * FROM contacto";
    $result = mysqli_query($connection, $selectQuery);
    
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    
    echo json_encode($data);
} elseif ($method === 'DELETE') {
    // Lógica para eliminar datos (por ejemplo, una consulta DELETE)
    // Aquí debes realizar una consulta DELETE basada en el correo electrónico ($mail)
    // que recibiste en la solicitud y devolver una respuesta apropiada.
    // Ejemplo:
    $deleteQuery = "DELETE FROM contacto WHERE mail = '$mail'";
    
    if (mysqli_query($connection, $deleteQuery)) {
        $response = array('status' => 'success', 'message' => 'Datos eliminados correctamente');
        echo json_encode($response);
    } else {
        $response = array('status' => 'error', 'message' => 'Error al eliminar datos: ' . mysqli_error($connection));
        echo json_encode($response);
    }
} elseif ($method === 'PUT') {
    // Lógica para actualizar datos (por ejemplo, una consulta UPDATE)
    // Aquí debes realizar una consulta UPDATE y devolver una respuesta apropiada.
    // Ejemplo:
    $updateQuery = "UPDATE contacto SET nombre='$nombre', apellido='$apellido', dni='$dni', consulta='$consulta' WHERE mail='$mail'";
    
    if (mysqli_query($connection, $updateQuery)) {
        $response = array('status' => 'success', 'message' => 'Datos actualizados correctamente');
        echo json_encode($response);
    } else {
        $response = array('status' => 'error', 'message' => 'Error al actualizar datos: ' . mysqli_error($connection));
        echo json_encode($response);
    }
}

// Cerrar la conexión a la base de datos
mysqli_close($connection);
?>
