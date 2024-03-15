<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selectors de Categories</title>
</head>
<body>
    <form method="POST" action="getSubCats.php" id="categoriaForm" onchange="getSubCategories();">
        <label for="categoria">Categoria:</label>
        <select id="categoria" name="categoria">
        <option value="">Seleccionar una categoria</option>
            <?php
            include 'getCategories.php';
            ?>
        </select>
        <br>
        <label for="subcategoria">Subcategoria:</label>
        <select id="subcategoria" name="subcategoria">
            <!-- Opciones de subcategorías se cargarán aquí dinámicamente con JavaScript -->
        </select>
    </form>
    <script src="scripts.js"></script>
</body>
</html>
