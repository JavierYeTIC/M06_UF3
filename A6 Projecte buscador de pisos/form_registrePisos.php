<!DOCTYPE html>
<html>

<head>
	<title></title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwEQr8flR0CtMZ-jSs9hK8lscYUMOtVPk&callback=initMap" async defer></script>
</head>

<body>
	<div class="container pt-5 pb-5">
		<h4>Formulari de registre de pisos</h4>

		<div class="row">
			<div class="col-6">
				<form id="form-user-register">
					<div class="form-row mt-5 mb-4">
						<div class="col-8">
							<label for="nom">Nom*</label>
							<input type="text" class="form-control" id="nom" value="" name="nom" required>
						</div>

						<div class="col-4">
							<label for="preu">Preu*</label>
							<input type="text" class="form-control" id="preu" value="" name="preu" required>
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="via">Via</label>
							<select class="custom-select" name="via" id="via" required>
								<option selected disabled>Tria un tipus de via</option>
								<option value="1">Carrer</option>
								<option value="2">Torrent</option>
								<option value="3">Avinguda</option>
							</select>
						</div>

						<div class="col-4">
							<label for="nom_via">Nom de la via</label>
							<input type="text" class="form-control" id="nom_via" name="nom_via" required>
						</div>

						<div class="col-4">
							<label for="numero">Número</label>
							<input type="text" class="form-control" id="numero" name="numero" required>
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="pis">Pis</label>
							<input type="text" class="form-control" id="pis" name="pis" required>
						</div>

						<div class="col-4">
							<label for="escala">Escala</label>
							<input type="text" class="form-control" id="escala" name="escala">
						</div>

						<div class="col-4">
							<label for="porta">Porta</label>
							<input type="text" class="form-control" id="porta" name="porta">
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="cp">CP</label>
							<input type="text" class="form-control" id="cp" name="cp" required>
						</div>

						<div class="col-4">
							<label for="districte">Districte</label>
							<select class="custom-select" name="districte" id="districte" required>

							</select>
						</div>

						<div class="col-4">
							<label for="barri">Barri</label>
							<select class="custom-select" id="barri" name="barri" required>

							</select>
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="poblacio">Població</label>
							<select class="custom-select" id="poblacio" name="poblacio" required>
								<option selected disabled>Selecciona una població</option>
								<option id="bcn" value="barcelona">Barcelona</option>
								<option id="bcn" value="barcelona">Girona</option>
							</select>
						</div>

						<div class="col-4">
							<label for="latitud">Latitud</label>
							<input type="text" class="form-control" id="latitud" name="latitud">
						</div>

						<div class="col-4">
							<label for="longitud">Longitud</label>
							<input type="text" class="form-control" id="longitud" name="longitud">
						</div>
					</div>

					<div class="form-row mb-4">
						<textarea name="descripcio">

						</textarea>
					</div>

					<button class="btn btn-primary" type="button" onclick="mostrarDades()">Registrar</button>

					<button class="btn btn-info">Visualitzar</button>
				</form>
			</div>

			<div class="col-6 pt-5">
				<h4 id="nomPis">Nom + barri, districte</h4>
				<p id="dir">Via Nom Número Pis Escala Porta · CP · Districte · Barri · Població</p>
				<p id="preu">300€</p>
				<p id="desc">Text</p>
			</div>
		</div>
	</div>

	<script src="pisos.js"></script>
</body>

</html>