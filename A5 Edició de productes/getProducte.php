<?php
    // Conexión a la base de datos (asegúrate de configurar tus credenciales)
    define("DB_HOST", "localhost");
    define("DB_NAME", "m06_uf3");
    define("DB_USER", "root");
    define("DB_PSW", '');
    define("DB_PORT", 3306);

    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);

    if ($conn->connect_error) {
        die("Connexió fallida: " . $conn->connect_error);
    }

    // Obtiene el ID del producto enviado por GET
    $id = $_GET['id'];

    // Consulta para obtener los detalles del producto por ID
    $sql = "SELECT * FROM producte WHERE id = $id";
    $result = $conn->query($sql);

    // Construye un objeto para la respuesta JSON
    $return = new stdClass();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $return->nom = $row["nom"];
        $return->addEdit = $row["id"]; // Suponiendo que el ID es lo que quieres editar
    }

    // Retorna la respuesta en formato JSON
    echo json_encode($return);

    $conn->close();
?>
