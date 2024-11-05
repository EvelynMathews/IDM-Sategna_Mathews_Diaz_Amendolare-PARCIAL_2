// Array de productos (ejemplo)
const productos = [
    {
      nombre: "Caja Romántica",
      descripcion: "Todo para un momento especial en pareja...",
      precio: 3500,
      stock: true,
      imagen: "./img/productos/caja-romantica.webp"
    },
    {
      nombre: "Caja Cumpleaños",
      descripcion: "¡Festejo completo en una caja!",
      precio: 4200,
      stock: true,
      imagen: "./img/productos/caja-cumpleanos.webp"
    }
    // Agrega más productos según sea necesario
  ];
  
  document.querySelectorAll('.product-detail').forEach((button) => {
    button.addEventListener('click', (event) => {
        const index = button.getAttribute('data-index');
        const selectedProduct = productos[index];
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    });
});

  