const productos = [
    {
        nombre: "Caja Romántica",
        descripcion: "Todo para un momento especial en pareja: chocolates gourmet, una vela aromática de vainilla, una botella de vino o espumante, pétalos de flores secas y una tarjeta en blanco para personalizar.",
        precio: 3500,
        stock: true,
        imagenes: [
            "./img/productos/caja-romantica.webp",
            "./img/productos/caja-romantica2.webp",
            "./img/productos/caja-romantica3.webp"
        ],
        fechaEntrega: "2 días después de la compra",
        colores: ["#FF0000", "#FFC0CB", "#800080"],
        id: 0,
    },
    {
        nombre: "Caja Cumpleaños",
        descripcion: "¡Festejo completo en una caja! Incluye caramelos surtidos, un mini banner de “Feliz Cumple”, una taza con diseño colorido, un set de velitas para deseos y una mini botella de sidra.",
        precio: 4200,
        stock: true,
        imagenes: [
            "./img/productos/caja-cumpleaños.webp",
            "./img/productos/caja-cumpleaños2.webp",
            "./img/productos/caja-cumpleaños3.webp"
        ],
        fechaEntrega: "2 días después de la compra",
        colores: ["#FFD700", "#FF69B4", "#1E90FF"],
        id: 1,
    },
    {
        nombre: "Caja Relax",
        descripcion: "Para desconectar y relajarse en casa. Trae una vela aromática de lavanda, té de hierbas, una taza de cerámica, un set de sales de baño y una agenda para llevar el registro de momentos zen.",
        precio: 3800,
        stock: true,
        imagenes: [
            "./img/productos/caja-relax.webp",
            "./img/productos/caja-relax2.webp",
            "./img/productos/caja-relax3.webp"
        ],
        fechaEntrega: "2 días después de la compra",
        colores: ["#ADD8E6", "#B0C4DE", "#D8BFD8"],
        id: 2,
    },
    {
        nombre: "Caja de Café o Té Lover",
        descripcion: "Perfecta para los fanáticos del café o té. Viene con una taza de cerámica pintada a mano, una bolsita de caramelos o mini chocolates, una variedad de saquitos de té o café y una bandejita de madera para servir.",
        precio: 4500,
        stock: true,
        imagenes: [
            "./img/productos/caja-de-cafe.webp",
            "./img/productos/caja-de-cafe2.webp",
            "./img/productos/caja-de-cafe3.webp"
        ],
        fechaEntrega: "2 días después de la compra",
        colores: ["#6B4226", "#D2B48C", "#8B4513"],
        id: 3,
    },
    {
        nombre: "Caja Picnic",
        descripcion: "¡Ideal para una escapada al aire libre! Incluye una mini bandeja, un mantel a cuadros, una botella de jugo natural, galletitas y chocolates. También trae servilletas de tela y una tarjeta con ideas para un picnic perfecto.",
        precio: 4000,
        stock: true,
        imagenes: [
            "./img/productos/caja-picnic.webp",
            "./img/productos/caja-picnic2.webp",
            "./img/productos/caja-picnic3.webp"
        ],
        fechaEntrega: "2 días después de la compra",
        colores: ["#32CD32", "#FFD700", "#FF6347"],
        id: 4,
    },
    {
        nombre: "Caja Bienestar y Cuidado Personal",
        descripcion: "Todo lo necesario para un mimo personal. Incluye una vela aromática, una crema de manos con fragancia suave, un set de té de hierbas, flores secas, y una libreta para reflexionar y escribir.",
        precio: 3600,
        stock: true,
        imagenes: [
            "./img/productos/caja-bienestar.webp",
            "./img/productos/caja-bienestar2.webp",
            "./img/productos/caja-bienestar3.webp"
        ],
        fechaEntrega: "2 días después de la compra",
        colores: ["#FFB6C1", "#FFFACD", "#E6E6FA"],
        id: 5,
    },
    {
        nombre: "Caja Retro Gamer",
        descripcion: "Para amantes de lo retro y gamers. Contiene snacks clásicos como caramelos y chocolates, una taza personalizada de videojuegos y un llavero de control retro.",
        precio: 4300,
        stock: true,
        imagenes: [
            "./img/productos/caja-retro-gamer.webp",
            "./img/productos/caja-retro-gamer2.webp",
            "./img/productos/caja-retro-gamer3.webp"
        ],
        fechaEntrega: "2 días después de la compra",
        colores: ["#2E8B57", "#708090", "#000000"],
        id: 6,
    },
    {
        nombre: "Caja Para Viajeros",
        descripcion: "Ideal para quienes aman recorrer el mundo. Incluye un cuaderno de viaje, una botellita de licor o vino mini, una mini brújula de decoración y caramelos de sabores exóticos.",
        precio: 4700,
        stock: true,
        imagenes: [
            "./img/productos/caja-para-viajeros.webp",
            "./img/productos/caja-para-viajeros2.webp",
            "./img/productos/caja-para-viajeros3.webp"
        ],
        fechaEntrega: "2 días después de la compra",
        colores: ["#4682B4", "#8B0000", "#FFD700"],
        id: 7,
    },
    {
        nombre: "Caja Energía y Motivación",
        descripcion: "Para quienes buscan energía y positivismo. Trae una agenda motivacional, caramelos de menta, una botellita de jugo energizante, y un set de stickers inspiradores.",
        precio: 3900,
        stock: true,
        imagenes: [
            "./img/productos/caja-energia.webp",
            "./img/productos/caja-energia2.webp",
            "./img/productos/caja-energia3.webp"
        ],
        fechaEntrega: "2 días después de la compra",
        colores: ["#FF4500", "#FF8C00", "#FFFF00"],
        id: 8,
    },
    {
        nombre: "Caja de Flores y Aromas",
        descripcion: "Una caja llena de encanto floral. Contiene un ramo de flores secas, una vela aromática de jazmín, un set de jabones artesanales y un pequeño florero de cerámica.",
        precio: 3400,
        stock: true,
        imagenes: [
            "./img/productos/caja-de-flores.webp",
            "./img/productos/caja-de-flores2.webp",
            "./img/productos/caja-de-flores3.webp"
        ],
        fechaEntrega: "2 días después de la compra",
        colores: ["#FF69B4", "#FFF0F5", "#BA55D3"],
        id: 9,
    }
];

document.querySelectorAll('.product-detail').forEach((button) => {
    button.addEventListener('click', (event) => {
        const id = button.getAttribute('data-id');
        const selectedProduct = productos.find(p => id == p.id);
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    });
});

// barra de busqueda
const barraBusqueda = document.querySelector("#barraBusqueda");
// agregar opciones a la barra de busqueda
barraBusqueda.addEventListener('input', () => {
    const valorInput = barraBusqueda.value.trim();
    let optionsHTML = '';
    if (valorInput) {
        productos.forEach(p => {
            if (p.nombre.toLowerCase().includes(valorInput.toLowerCase())) {
                optionsHTML += `<option value="${p.nombre}" data-id="${p.id}"></option>`
            }
        })
    }
    document.querySelector("#opcionesBusquedaProductos").innerHTML = optionsHTML;
})
// ir a detalle al seleccionr una opción
barraBusqueda.addEventListener('change', e => {
    productoSeleccionado = document.querySelector("#opcionesBusquedaProductos")
        .querySelector(`option[value="${e.target.value}"]`);
    if (productoSeleccionado) {
        localStorage.setItem('selectedProduct', JSON.stringify(productos.find(p => p.id == productoSeleccionado.getAttribute('data-id'))));
        ruteActual = window.location.pathname
        rutaBase = ruteActual.substring(0, ruteActual.lastIndexOf('/'));
        window.location.href = `${rutaBase}/productos-detalle.html`;
    }
})

// contenedor donde se van a mostrar los elementos del carrito
const cartModalBody = document.querySelector("#cartModal .modal-body");
const cartItemsList = document.getElementById("cartItems");
const totalAmountElement = document.createElement('div'); // para el monto total
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Función para mostrar la notificación de éxito
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success alert-dismissible fade show';
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '1050';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(notification);

    // Ocultar automáticamente después de 3 segundos
    setTimeout(() => {
        notification.classList.remove("show");
        notification.classList.add("fade");
        setTimeout(() => notification.remove(), 150);
    }, 3000);
}

//CARRITO

// Función para calcular el total del carrito
function calculateTotal() {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
}
// Función para actualizar el contenido del carrito en el modal
function updateCartModal() {
    const cartModalBody = document.querySelector("#cartModal .modal-body");
    const cartItemsList = document.getElementById("cartItems");
    const totalAmountElement = document.createElement('div');
    
    // Revisa si el modal y la lista de items existen
    if (!cartModalBody || !cartItemsList) return;

    cartItemsList.innerHTML = ''; // Limpia la lista

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {
        cartModalBody.innerHTML = '<p>El carrito está actualmente vacío.</p>';
    } else {
        cartModalBody.innerHTML = ''; // limpia el mensaje de vacío si hay productos
        cartItemsList.classList.add("list-group");

        cartItems.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            itemElement.innerHTML = `${item.name} <span>ARS $${item.price}</span>`;
            cartItemsList.appendChild(itemElement);
        });

        const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
        totalAmountElement.classList.add('text-end', 'mt-3', 'fw-bold');
        totalAmountElement.innerHTML = `Total: ARS $${totalAmount}`;
        cartModalBody.appendChild(cartItemsList); 
        cartModalBody.appendChild(totalAmountElement); 
    }
}


 // Para agregar productos desde el botón de agregar al carrito
 document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = button.getAttribute('data-price');

        if (itemName && itemPrice) {
            cartItems.push({ name: itemName, price: itemPrice });
            localStorage.setItem("cart", JSON.stringify(cartItems));
            showNotification("Producto agregado exitosamente.");
            updateCartModal();
        } else {
            console.error("No se encontró el nombre o precio del producto.");
        }
    });
});

// "Vaciar Carrito"
document.getElementById('clearCart').addEventListener('click', () => {
    cartItems = []; 
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCartModal(); 
});


// Actualizar el carrito cada vez que se abre el modal
document.addEventListener("DOMContentLoaded", () => {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('show.bs.modal', updateCartModal);
    }
});

//DETALLE DE PRODUCTOS

document.addEventListener("DOMContentLoaded", () => {
    const productDetailContainer = document.getElementById("productDetailContent");
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    let selectedColor = null;

    if (selectedProduct) {
        // opciones de color
        let colorOptions = "";
        if (selectedProduct.colores && selectedProduct.colores.length > 0) {
            colorOptions = selectedProduct.colores.map((color) => `
                <div class="color-option-circle" data-color="${color}" style="background-color: ${color};"></div>
            `).join("");
        } else {
            colorOptions = "<p>No hay colores disponibles.</p>";
        }

        // Genera el carrusel de imágenes
        const carouselImages = selectedProduct.imagenes.map((image, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="${image}" class="d-block w-100 product-carousel-img" alt="${selectedProduct.nombre}">
            </div>
        `).join("");

        if (productDetailContainer) {
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
        }

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
        document.querySelector(".add-to-cart")?.addEventListener("click", () => {
            const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            const personalMessage = document.getElementById("personalMessage")?.value;
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



// SECCIÓN CONTACTO - VALIDACIÓN DE FORMULARIO
(() => {
    'use strict';

    // Selección del formulario
    const form = document.getElementById('contactForm');
    let successModalElement = document.getElementById('successModal');
    const successModal = successModalElement ? new bootstrap.Modal(successModalElement) : null;

    // Evento de validación y envío del formulario
    form?.addEventListener('submit', function (event) {
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
