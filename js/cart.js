// Seleccionamos el contenedor donde se mostrarán los elementos del carrito
const cartModalBody = document.querySelector("#cartModal .modal-body");
const cartItemsList = document.getElementById("cartItems");
const totalAmountElement = document.createElement('div'); // Elemento para el monto total
let cartItems = [];

// Función para mostrar la notificación
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
function updateCartModal() {
    cartItemsList.innerHTML = ''; // Limpiar la lista

    if (cartItems.length === 0) {
        cartModalBody.innerHTML = '<p>El carrito está actualmente vacío.</p>';
    } else {
        cartModalBody.innerHTML = ''; // Limpiar mensaje de vacío si hay productos
        cartItemsList.classList.add("list-group");

        // Añadir cada producto al carrito
        cartItems.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            itemElement.innerHTML = `${item.name} <span>ARS $${item.price}</span>`;
            cartItemsList.appendChild(itemElement);
        });

        // Añadir el monto total al final de la lista
        const totalAmount = calculateTotal();
        totalAmountElement.classList.add('text-end', 'mt-3', 'fw-bold');
        totalAmountElement.innerHTML = `Total: ARS $${totalAmount}`;
        cartModalBody.appendChild(cartItemsList); // Añadir la lista al modal
        cartModalBody.appendChild(totalAmountElement); // Añadir el total al modal
    }
}

// Evento para cada botón "Agregar al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = button.getAttribute('data-price');

        // Agregar el item al carrito
        cartItems.push({ name: itemName, price: itemPrice });

        // Actualizar el modal del carrito y mostrar notificación
        updateCartModal();
        showNotification("Producto agregado exitosamente.");
    });
});

// Evento para el botón "Vaciar Carrito"
document.getElementById('clearCart').addEventListener('click', () => {
    cartItems = []; // Vaciar el carrito
    updateCartModal(); // Actualizar el modal para reflejar el cambio
});

// Actualizar el carrito cada vez que se abre el modal
document.getElementById('cartModal').addEventListener('show.bs.modal', updateCartModal);



