document.addEventListener("DOMContentLoaded", () => {
    const productDetailContainer = document.getElementById("productDetailContainer");
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
                    </div>
                </div>
            </div>
        `;
    } else {
        productDetailContainer.innerHTML = "<p>Producto no encontrado.</p>";
    }
});
