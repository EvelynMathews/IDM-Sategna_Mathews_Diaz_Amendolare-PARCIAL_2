document.addEventListener("DOMContentLoaded", () => {
    // Aplica una suave transición de entrada en la opacidad
    document.body.classList.add("fade-in");

    // Al hacer clic en cualquier enlace, aplica una transición de salida
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (link.href.startsWith(window.location.origin)) {
                event.preventDefault(); // Evita la navegación inmediata
                document.body.classList.add("fade-out"); // Añade la clase de desvanecimiento suave

                // Redirige después de un breve retraso
                setTimeout(() => {
                    window.location.href = link.href;
                }, 100); // Retraso mínimo
            }
        });
    });
});
