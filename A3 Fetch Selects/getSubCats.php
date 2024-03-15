<?php
// Conexión a la base de datos (asegúrate de configurar tus credenciales)
define("DB_HOST", "localhost");
define("DB_NAME", "m06_uf3");
define("DB_USER", "root");
define("DB_PSW", '');
define("DB_PORT", 3306);

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);

if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

// Verificar si el valor de $_POST['categoria'] está presente y es un número entero
$cat = isset($_POST['categoria']) ? intval($_POST['categoria']) : 0;

// Consulta preparada para evitar inyección SQL
$query = "SELECT * FROM `subcategories` WHERE id_cat = ?";

// Preparar la consulta
$stmt = $conn->prepare($query);

if ($stmt) {
    // Vincular el parámetro
    $stmt->bind_param("i", $cat);

    // Ejecutar la consulta
    $stmt->execute();

    // Obtener los resultados
    $result = $stmt->get_result();

    // Procesar los resultados
    $return = array();  // Inicializar el array
    while ($row = mysqli_fetch_assoc($result)) {
        // Crear un array asociativo para cada fila
        $subcat = array(
            'nom' => $row["nom_subcat"],
            'id' => $row["id_subcat"]
        );

        // Agregar el array al array $return
        $return[] = $subcat;
    }

    // Codificar el array $return como JSON
    $jsonEncoded = json_encode($return);
    if ($jsonEncoded === false) {
        // Manejo del error de codificación JSON
        $jsonEncoded = json_encode(['error' => 'Error en la codificación JSON']);
    }

    // Imprimir la respuesta JSON
    echo $jsonEncoded;

    // Cerrar la consulta preparada
    $stmt->close();

    // Cerrar la conexión
    mysqli_close($conn);

} else {
    // Manejar el caso en que la preparación de la consulta falló
    echo "Error en la preparación de la consulta de subcategorías: " . $conn->error;
}
?>
