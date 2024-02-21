let files = [];

const dropAreas = document.getElementsByClassName('drop-area');
const dragDropText = document.getElementsByTagName('h2')[0];
const input = document.getElementsByClassName('input-file')[0];
const preview = document.getElementById('preview');
const form = document.getElementById('form'); // Agrega el ID al formulario
const button = document.getElementById('button');

Array.from(dropAreas).forEach(dropArea => {
    ['dragover', 'dragleave', 'drop'].forEach((evt) => {
        dropArea.addEventListener(evt, prevDefault);
    });

    dropArea.addEventListener("dragover", function () {
        dropArea.classList.add('active');
        dragDropText.textContent = 'Suelta los archivos';
    });

    dropArea.addEventListener("dragleave", function () {
        dropArea.classList.remove('active');
        dragDropText.textContent = 'Arrastra y suelta los archivos aquí';
    });

    dropArea.addEventListener("drop", function (event) {
        dropArea.classList.remove('active');
        dragDropText.textContent = 'Arrastra y suelta los archivos aquí';

        files = files.concat(Array.from(event.dataTransfer.files));
        showFiles();
    });
});

function prevDefault(e) {
    e.preventDefault();
}

function showFiles() {
    preview.innerHTML = '';

    if (files.length > 0) {
        files.forEach((file, index) => {
            processFile(file, index);
        });
    }
}

function processFile(file, index) {
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

    const docType = file.type;

    if (validExtensions.includes(docType)) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const fileURL = e.target.result;
            const prev = `<div class="previewImage">
                            <img src="${fileURL}" alt="${file.name}" style="width: 100px; height: 100px;"/>
                            <span>${file.name}</span>
                            <span onclick="remove(${index})" class="material-symbols-outlined removeBtn">&#10006;</span>
                         </div>`;

            preview.innerHTML += prev;
        };

        reader.readAsDataURL(file);
    } else {
        files.splice(index, 1);
        alert('Archivo no válido. Solo se permiten imágenes (jpeg, jpg, png, gif).');
    }
}

function remove(index) {
    files.splice(index, 1);
    showFiles();
}



button.addEventListener('click', function (e) {
    e.preventDefault();
    input.click(); 
});

input.addEventListener('change', function () {
    files = files.concat(Array.from(input.files));
    showFiles();
    
    // Automáticamente enviar el formulario después de seleccionar archivos
    const dataTransfer = new DataTransfer();
    files.forEach(file => {
        dataTransfer.items.add(file);
    });
    input.files = dataTransfer.files;
    form.submit();
});


