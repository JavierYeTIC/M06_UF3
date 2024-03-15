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

// Consultar las categorías principales
$query = "SELECT * FROM `categoria`";
$result = mysqli_query($conn, $query);

// Verificar si la consulta fue exitosa
if ($result) {
    // Procesar los resultados
    while ($row = mysqli_fetch_assoc($result)) {
        echo '<option id="categoria_' . $row['id_cat'] . '" value="' . $row['id_cat'] . '">' . $row['nom_cat'] . '</option>';
    }
} else {
    // Manejar el caso en que la consulta falló
    echo "Error en la consulta de categorías: " . mysqli_error($conn);
}

// Cerrar la conexión
mysqli_close($conn);
?>
