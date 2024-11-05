// cart.js
// Seleccionamos el contenedor donde se mostrarán los elementos del carrito
const cartModalBody = document.querySelector("#cartModal .modal-body");
const cartItemsList = document.getElementById("cartItems");
const totalAmountElement = document.createElement('div'); // Elemento para el monto total
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

// Función para calcular el total del carrito
function calculateTotal() {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
}

// Función para actualizar el contenido del carrito en el modal
// Función para actualizar el contenido del carrito en el modal
function updateCartModal() {
    const cartModalBody = document.querySelector("#cartModal .modal-body");
    const cartItemsList = document.getElementById("cartItems");
    const totalAmountElement = document.createElement('div');
    
    // Revisa si el modal y la lista de items existen
    if (!cartModalBody || !cartItemsList) return;

    cartItemsList.innerHTML = ''; // Limpiar la lista

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {
        cartModalBody.innerHTML = '<p>El carrito está actualmente vacío.</p>';
    } else {
        cartModalBody.innerHTML = ''; // Limpiar mensaje de vacío si hay productos
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
        cartModalBody.appendChild(cartItemsList); // Añadir la lista al modal
        cartModalBody.appendChild(totalAmountElement); // Añadir el total al modal
    }
}


 // Evento para agregar productos desde el botón de agregar al carrito
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

// Evento para el botón "Vaciar Carrito"
document.getElementById('clearCart').addEventListener('click', () => {
    cartItems = []; // Vaciar el carrito
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCartModal(); // Actualizar el modal para reflejar el cambio
});

// Actualizar el carrito cada vez que se abre el modal
// **Agrega este código al final de tu archivo cart.js**
// Actualizar el carrito cada vez que se abre el modal
document.addEventListener("DOMContentLoaded", () => {
    // Actualizar el carrito cada vez que se abre el modal
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('show.bs.modal', updateCartModal);
    }
});
