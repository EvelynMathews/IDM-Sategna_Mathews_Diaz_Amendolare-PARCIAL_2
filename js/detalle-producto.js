document.addEventListener("DOMContentLoaded", () => {
    const productDetailContainer = document.getElementById("productDetailContent");
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    let selectedColor = null;  // Variable para almacenar el color seleccionado

    if (selectedProduct) {
        // Generar opciones de color
        let colorOptions = "";
        if (selectedProduct.colores && selectedProduct.colores.length > 0) {
            colorOptions = selectedProduct.colores.map((color) => `
                <div class="color-option-circle" data-color="${color}" style="background-color: ${color};"></div>
            `).join("");
        } else {
            colorOptions = "<p>No hay colores disponibles.</p>";
        }

        productDetailContainer.innerHTML = `
            <div class="col-md-6 mx-auto">
                <div class="card">
                    <img src="${selectedProduct.imagen}" class="card-img-top" alt="${selectedProduct.nombre}">
                    <div class="card-body">
                        <h2 class="card-title">${selectedProduct.nombre}</h2>
                        <p class="card-text">${selectedProduct.descripcion}</p>
                        <p class="card-text"><strong>Precio:</strong> ARS $${selectedProduct.precio}</p>
                        <p class="card-text"><strong>Fecha de Entrega:</strong> ${selectedProduct.fechaEntrega}</p>
                        <p class="card-text"><strong>Disponibilidad:</strong> ${selectedProduct.stock ? "En stock" : "Agotado"}</p>
                        <p class="card-text"><strong>Color:</strong></p>
                        <div class="color-option-container">${colorOptions}</div> <!-- Opciones de color -->
                        <button class="btn btn-primary mt-3 add-to-cart" data-name="${selectedProduct.nombre}" data-price="${selectedProduct.precio}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;

        // Selección de color
        const colorCircles = document.querySelectorAll(".color-option-circle");
        colorCircles.forEach(circle => {
            circle.addEventListener("click", () => {
                // Remover la clase 'selected' de todos los círculos y añadirla solo al seleccionado
                colorCircles.forEach(c => c.classList.remove("selected"));
                circle.classList.add("selected");
                
                // Guardar el color seleccionado
                selectedColor = circle.getAttribute("data-color");
            });
        });

        // Evento para el botón "Agregar al carrito"
        document.querySelector(".add-to-cart").addEventListener("click", () => {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push({
                name: selectedProduct.nombre,
                price: selectedProduct.precio,
                image: selectedProduct.imagen,
                color: selectedColor || "No especificado", 
            });

            localStorage.setItem("cart", JSON.stringify(cartItems));
            showNotification("Producto agregado exitosamente.");
            updateCartModal();
        });
    } else {
        productDetailContainer.innerHTML = "<p>Producto no encontrado.</p>";
    }
});
