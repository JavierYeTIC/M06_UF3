<?php
// Connexió a la base de dades (assegura't de configurar les teves credencials)
define("DB_HOST", "localhost");
define("DB_NAME", "m06_uf3");
define("DB_USER", "root");
define("DB_PSW", '');
define("DB_PORT", 3306);

$conn = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);

if ($conn->connect_error) {
    die("Connexió fallida: " . $conn->connect_error);
}
echo("hola")
// Obté la categoria seleccionada (enviada pel fetch)
$cat = $_POST['cat'];

// Consulta les subcategories associades a la categoria seleccionada
$sql = "SELECT id_subcat, nom_subcat FROM subcategories WHERE id_cat = $cat";
$result = $conn->query($sql);

// Construeix un array d'objectes per a la resposta JSON
$return = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $object = new stdClass();
        $object->nom = $row["nom_subcat"];
        $object->id = $row["id_subcat"];
        $return[] = $object;
    }
}

// Retorna el JSON
echo json_encode($return);

$conn->close();
?>
