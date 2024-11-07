document.addEventListener("DOMContentLoaded", () => {
    const productDetailContainer = document.getElementById("productDetailContent");
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    let selectedColor = null;

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

        // Generar el carrusel de imágenes
        const carouselImages = selectedProduct.imagenes.map((image, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="${image}" class="d-block w-100 product-carousel-img" alt="${selectedProduct.nombre}">
            </div>
        `).join("");

        productDetailContainer.innerHTML = `
            <div class="col-md-12 col-lg-10 mx-auto">
                <div class="product-detail-card d-flex">
                    <!-- Columna izquierda con contenedor de información y carrusel -->
                    <div class="product-detail-left">
                        <!-- Contenedor para nombre y descripción alineados al inicio -->
                        <div class="product-info-container">
                            <h2 class="card-title">${selectedProduct.nombre}</h2>
                            <p class="card-text">${selectedProduct.descripcion}</p>
                        </div>
                        
                        <!-- Carrusel de imágenes centrado -->
                        <div id="productCarousel" class="carousel slide mt-3" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${carouselImages}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Anterior</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                    </div>

                    <!-- Columna derecha con detalles adicionales -->
                    <div class="product-detail-card-body">
                        <p class="card-text"><strong>Fecha de Entrega:</strong> ${selectedProduct.fechaEntrega}</p>
                        <p class="card-text"><strong>Disponibilidad:</strong> ${selectedProduct.stock ? "En stock" : "Agotado"}</p>
                        
                        <p class="card-text"><strong>Color:</strong></p>
                        <div class="color-option-container">${colorOptions}</div>

                        <p class="card-text mt-3"><strong>Detalle de Financiación:</strong></p>
                        <div class="financing-options d-flex gap-3">
                            <i class="bi bi-bank fs-4 financing-icon" title="Banco"></i>
                            <i class="bi bi-credit-card-2-back-fill fs-4 financing-icon" title="Visa"></i>
                            <i class="bi bi-credit-card fs-4 financing-icon" title="Mastercard"></i>
                        </div>
                        
                        <p class="card-text mt-3"><strong>Mensaje Personalizado:</strong></p>
                        <textarea id="personalMessage" class="form-control mb-3" rows="3" placeholder="Escribe un mensaje especial para el destinatario..."></textarea>
                        
                        <p class="card-text precio-caja"><strong>Precio:</strong><strong> ARS $${selectedProduct.precio}</strong></p>

                        
                        <button class="btn btn-primary mt-3 add-to-cart" data-name="${selectedProduct.nombre}" data-price="${selectedProduct.precio}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;

        // Selección de color
        const colorCircles = document.querySelectorAll(".color-option-circle");
        colorCircles.forEach(circle => {
            circle.addEventListener("click", () => {
                colorCircles.forEach(c => c.classList.remove("selected"));
                circle.classList.add("selected");
                selectedColor = circle.getAttribute("data-color");
            });
        });

        // Agregar al carrito
        document.querySelector(".add-to-cart").addEventListener("click", () => {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            const personalMessage = document.getElementById("personalMessage").value;
            const productIndex = cartItems.findIndex(item => item.name === selectedProduct.nombre && item.color === selectedColor);

            if (productIndex === -1) {
                cartItems.push({
                    name: selectedProduct.nombre,
                    price: selectedProduct.precio,
                    image: selectedProduct.imagenes[0],
                    color: selectedColor || "No especificado",
                    message: personalMessage || "Sin mensaje"
                });

                localStorage.setItem("cart", JSON.stringify(cartItems));
                showNotification("Producto agregado exitosamente.");
            } else {
                showNotification("Este producto ya está en el carrito.");
            }

            updateCartModal();
        });
    } else {
        productDetailContainer.innerHTML = "<p>Producto no encontrado.</p>";
    }
});
