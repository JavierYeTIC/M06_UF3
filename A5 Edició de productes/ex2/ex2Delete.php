<?php
// Verificar si se ha recibido un ID de producto válido
if (isset($_GET['id']) && !empty($_GET['id'])) {
    // Establecer la conexión con la base de datos
    define("DB_HOST", "localhost");
    define("DB_NAME", "m06_uf3");
    define("DB_USER", "root");
    define("DB_PSW", '');
    define("DB_PORT", 3306);

    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Sanitizar y obtener el ID del producto
    $id = mysqli_real_escape_string($conn, $_GET['id']);

    // Construir la consulta de eliminación
    $sql = "DELETE FROM producte WHERE id = $id";

    // Ejecutar la consulta de eliminación
    if ($conn->query($sql) === TRUE) {
        // La eliminación fue exitosa
        http_response_code(200); // OK
    } else {
        // Error al ejecutar la consulta de eliminación
        http_response_code(500); // Internal Server Error
        echo "Error: " . $conn->error;
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
} else {
    // No se recibió un ID de producto válido
    http_response_code(400); // Bad Request
    echo "ID de producto no proporcionado o inválido";
}

header('Location: ex2FormList.php');
?>
