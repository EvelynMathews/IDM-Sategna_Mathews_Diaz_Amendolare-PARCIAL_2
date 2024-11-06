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
                        
                        <p class="card-text mt-3"><strong>Mensaje Personalizado:</strong></p>
                        <textarea id="personalMessage" class="form-control mb-3" rows="3" placeholder="Escribe un mensaje especial para el destinatario..."></textarea>
                        
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
                console.log("Color seleccionado:", selectedColor); // Verificar el color en la consola
            });
        });

        // Evento para el botón "Agregar al carrito"
        document.querySelector(".add-to-cart").addEventListener("click", () => {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            
            // Obtener el mensaje personalizado
            const personalMessage = document.getElementById("personalMessage").value;

            // Verificar si el producto ya existe en el carrito
            const productIndex = cartItems.findIndex(item => item.name === selectedProduct.nombre && item.color === selectedColor);
            
            if (productIndex === -1) { // Solo agregar si no existe
                cartItems.push({
                    name: selectedProduct.nombre,
                    price: selectedProduct.precio,
                    image: selectedProduct.imagen,
                    color: selectedColor || "No especificado", 
                    message: personalMessage || "Sin mensaje"  // Guardar el mensaje personalizado
                });

                // Guardar en localStorage
                localStorage.setItem("cart", JSON.stringify(cartItems));
                showNotification("Producto agregado exitosamente.");
            } else {
                showNotification("Este producto ya está en el carrito.");
            }
            
            // Actualizar el modal del carrito
            updateCartModal();
        });
    } else {
        productDetailContainer.innerHTML = "<p>Producto no encontrado.</p>";
    }
});
