// Array de productos (ejemplo)
const productos = [
    {
      nombre: "Caja Romántica",
      descripcion: "Todo para un momento especial en pareja...",
      precio: 3500,
      stock: true,
      imagen: "./img/productos/caja-romantica.webp",
      fechaEntrega:"2 días despues de la compra",
      colores: ["#FF0000", "#FFC0CB", "#800080"], // Colores en hexadecimal
      id: 0,
    },
    {
      nombre: "Caja Cumpleaños",
      descripcion: "¡Festejo completo en una caja!",
      precio: 4200,
      stock: true,
      imagen: "./img/productos/caja-cumpleaños.webp",
      fechaEntrega:"2 días despues de la compra",
      id: 1,
    }
    // Agrega más productos según sea necesario
  ];
  
  document.querySelectorAll('.product-detail').forEach((button) => {
    button.addEventListener('click', (event) => {
        const id = button.getAttribute('data-id');
        const selectedProduct = productos.find(p => id == p.id);
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    });
});

  