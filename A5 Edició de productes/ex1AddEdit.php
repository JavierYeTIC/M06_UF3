<?php
// Verificar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Establecer conexión a la base de datos
    define("DB_HOST", "localhost");
    define("DB_NAME", "m06_uf3");
    define("DB_USER", "root");
    define("DB_PSW", '');
    define("DB_PORT", 3306);

    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Connexió fallida: " . $conn->connect_error);
    }
    
    // Obtener los datos del formulario
    $nomProducte = $_POST["nomProducte"];
    $addEdit = $_POST["addEdit"];

    // Si addEdit es igual a 0, se está agregando un nuevo producto
    if ($addEdit == 0) {
        // Ejecutar la consulta SQL para insertar un nuevo producto
        $sql = "INSERT INTO producte (nom) VALUES ('$nomProducte')";
        
        if ($conn->query($sql) === TRUE) {
            echo "Nuevo producto agregado correctamente";
        } else {
            echo "Error al agregar el nuevo producto: " . $conn->error;
        }
    } else {
        // Si addEdit no es igual a 0, se está editando un producto existente
        // Se debe obtener el ID del producto que se está editando
        $idProducte = $_POST["idProducte"];

        // Ejecutar la consulta SQL para actualizar el producto
        $sql = "UPDATE producte SET nom='$nomProducte' WHERE id=$idProducte";
        
        if ($conn->query($sql) === TRUE) {
            echo "Producto actualizado correctamente";
        } else {
            echo "Error al actualizar el producto: " . $conn->error;
        }
    }

    // Cerrar la conexión
    $conn->close();
}
?>
