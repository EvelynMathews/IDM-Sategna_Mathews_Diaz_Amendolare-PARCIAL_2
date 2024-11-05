document.addEventListener("DOMContentLoaded", () => {
    const productDetailContainer = document.getElementById("productDetailContent");
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));


    if (selectedProduct) {
        productDetailContainer.innerHTML = `
            <div class="col-md-6 mx-auto">
                <div class="card">
                    <img src="${selectedProduct.imagen}" class="card-img-top" alt="${selectedProduct.nombre}">
                    <div class="card-body">
                        <h2 class="card-title">${selectedProduct.nombre}</h2>
                        <p class="card-text">${selectedProduct.descripcion}</p>
                        <p class="card-text"><strong>Precio:</strong> ARS $${selectedProduct.precio}</p>
                        <p class="card-text"><strong>Disponibilidad:</strong> ${selectedProduct.stock ? "En stock" : "Agotado"}</p>
                        <button class="btn btn-primary mt-3 add-to-cart" data-name="${selectedProduct.nombre}" data-price="${selectedProduct.precio}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `

        // Evento para el botón "Agregar al carrito"
        document.querySelector(".add-to-cart").addEventListener("click", () => {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push({
                name: selectedProduct.nombre,
                price: selectedProduct.precio,
                image: selectedProduct.imagen,
            });

            localStorage.setItem("cart", JSON.stringify(cartItems));
            showNotification("Producto agregado exitosamente.");
            updateCartModal();
        });
    } else {
        productDetailContainer.innerHTML = "<p>Producto no encontrado.</p>";
    }
});
