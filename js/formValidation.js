// SECCIÓN CONTACTO - VALIDACIÓN DE FORMULARIO
(() => {
    'use strict';

    // Selección del formulario
    const form = document.getElementById('contactForm');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    // Evento de validación y envío del formulario
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated'); // Mostrar errores si los hay
        } else {
            event.preventDefault(); // Evita el envío real
            successModal.show(); // Muestra el modal de éxito
            form.reset(); // Resetea los campos del formulario
            setTimeout(() => {
                form.classList.remove('was-validated'); // Elimina la clase de validación visual después de un pequeño retraso
            }, 0);
        }
    }, false);
})();
