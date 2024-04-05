
function generauser() {
  var nom = $('#validationNom').val();
  var cognoms = $('#validationCognoms').val();
  var dni = $('#validationDNI').val();

  // Comprobación de los campos para evitar que estén vacíos
  if (nom === '' || cognoms === '' || dni === '') {
      alert('Cal emplenar els camps de nom, cognoms i DNI.');
      return;
  }

  // Tratamiento de los apellidos para generar el nombre de usuario
  var cognomSplit = cognoms.toLowerCase().split(' ');
  var primerCognom = cognomSplit[0];
  var segonCognom = cognomSplit.length > 1 ? cognomSplit[1] : '';

  // Generación del nombre de usuario
  var username = nom.charAt(0).toLowerCase() + primerCognom.slice(0, 4).toUpperCase();
  for (var i = 0; i < dni.length; i++) {
      if (i % 2 === 0) {
          username += dni.charAt(i);
      }
  }

  // Asignación del nombre de usuario al campo de entrada
  $('#validationUsername').val(username);
}

function envia(){
  if ($('.is-invalid').length === 0) {
    alert('Formulari enviat correctament');
    //Aquí aniria el codi per enviar les dades del formulari
}else{
  alert('Complimi los campos valid');
}
}

$(document).ready(function() {
  //Primer mètode de validació: en fer clic al botó de registre
  $('#form-user-register').submit(function(e) {
      e.preventDefault(); //Evita l'enviament del formulari per defecte

      //Comprovació de cada camp i validació
      validateNomCognoms();
      validateDNIField();
      validateEmail($('#validationEmail').val());
      validatePhone();
      //Envia el formulari si totes les validacions són correctes
      
  });




  //Funció per validar el camp de nom i cognoms
  function validateNomCognoms() {
      var nom = $('#validationNom').val();
      var cognoms = $('#validationCognoms').val();

      if (nom !== '') {
          $('#validationNom').addClass('is-valid').removeClass('is-invalid');
          $('#feedbackNom').html('');
      } else {
          $('#validationNom').addClass('is-invalid').removeClass('is-valid');
          $('#feedbackNom').html('Camp obligatori');
      }

      if (cognoms !== '') {
          $('#validationCognoms').addClass('is-valid').removeClass('is-invalid');
          $('#feedbackCognoms').html('');
      } else {
          $('#validationCognoms').addClass('is-invalid').removeClass('is-valid');
          $('#feedbackCognoms').html('Camp obligatori');
      }
  }

  // Función para validar el campo de DNI
function validateDNIValue(value) {
  var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var str = value.toString().toUpperCase();

  if (!nifRexp.test(str) && !nieRexp.test(str)) return false;

  var nie = str
      .replace(/^[X]/, '0')
      .replace(/^[Y]/, '1')
      .replace(/^[Z]/, '2');

  var letter = str.substr(-1);
  var charIndex = parseInt(nie.substr(0, 8)) % 23;

  if (validChars.charAt(charIndex) === letter) return true;

  return false;
}

// Función para realizar la validación del campo de DNI en el formulario
function validateDNIField() {
  var dni = $('#validationDNI').val();

  if (dni !== '') {
      if (validateDNIValue(dni)) {
          $('#validationDNI').addClass('is-valid').removeClass('is-invalid');
          $('#feedbackDNI').html('');
      } else {
          $('#validationDNI').addClass('is-invalid').removeClass('is-valid');
          $('#feedbackDNI').html('DNI/NIE invàlid');
      }
  } else {
      $('#validationDNI').addClass('is-invalid').removeClass('is-valid');
      $('#feedbackDNI').html('Camp obligatori');
  }
}

 //Funció per validar el format de correu electrònic
function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    $('#validationEmail').addClass('is-valid').removeClass('is-invalid');
      $('#feedbackEmail').html('');
  }else{
    $('#validationEmail').addClass('is-invalid').removeClass('is-valid');
      $('#feedbackEmail').html('Correu electrònic invàlid');
  }
}


// Funció per validar el format de telèfon
function validatePhone() {
  var phone = $('#validationTelf').val();

  if (phone !== '') {
      // Lógica de validación
      if (phone.length === 9) {
          $('#validationTelf').addClass('is-valid').removeClass('is-invalid');
          $('#feedbackTelf').html('');
      } else {
          $('#validationTelf').addClass('is-invalid').removeClass('is-valid');
          $('#feedbackTelf').html('Telèfon invàlid');
      }
  } else {
      $('#validationTelf').addClass('is-invalid').removeClass('is-valid');
      $('#feedbackTelf').html('Camp obligatori');
  }
}


  //Segon mètode de validació en temps real
  $('#validationNom, #validationCognoms, #validationDNI, #validationEmail, #validationTelf').blur(function() {
      validateNomCognoms();
      validateDNIField();
      validateEmail($('#validationEmail').val());
      validatePhone();

  });
 
});


