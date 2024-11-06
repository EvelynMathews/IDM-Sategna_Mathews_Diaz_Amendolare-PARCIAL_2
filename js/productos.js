// Array de productos (ejemplo)
const productos = [
    {
        nombre: "Caja Romántica",
        descripcion: "Todo para un momento especial en pareja: chocolates gourmet, una vela aromática de vainilla, una botella de vino o espumante, pétalos de flores secas y una tarjeta en blanco para personalizar.",
        precio: 3500,
        stock: true,
        imagen: "./img/productos/caja-romantica.webp",
        fechaEntrega: "2 días despues de la compra",
        colores: ["#FF0000", "#FFC0CB", "#800080"],
        id: 0,
    },
    {
        nombre: "Caja Cumpleaños",
        descripcion: "¡Festejo completo en una caja! Incluye caramelos surtidos, un mini banner de “Feliz Cumple”, una taza con diseño colorido, un set de velitas para deseos y una mini botella de sidra.",
        precio: 4200,
        stock: true,
        imagen: "./img/productos/caja-cumpleaños.webp",
        fechaEntrega: "2 días despues de la compra",
        colores: ["#FFD700", "#FF69B4", "#1E90FF"],
        id: 1,
    },
    {
        nombre: "Caja Relax",
        descripcion: "Para desconectar y relajarse en casa. Trae una vela aromática de lavanda, té de hierbas, una taza de cerámica, un set de sales de baño y una agenda para llevar el registro de momentos zen.",
        precio: 3800,
        stock: true,
        imagen: "./img/productos/caja-relax.webp",
        fechaEntrega: "2 días despues de la compra",
        colores: ["#ADD8E6", "#B0C4DE", "#D8BFD8"],
        id: 2,
    },
    {
        nombre: "Caja de Café o Té Lover",
        descripcion: "Perfecta para los fanáticos del café o té. Viene con una taza de cerámica pintada a mano, una bolsita de caramelos o mini chocolates, una variedad de saquitos de té o café y una bandejita de madera para servir.",
        precio: 4500,
        stock: true,
        imagen: "./img/productos/caja-de-cafe.webp",
        fechaEntrega: "2 días despues de la compra",
        colores: ["#6B4226", "#D2B48C", "#8B4513"],
        id: 3,
    },
    {
        nombre: "Caja Picnic",
        descripcion: "¡Ideal para una escapada al aire libre! Incluye una mini bandeja, un mantel a cuadros, una botella de jugo natural, galletitas y chocolates. También trae servilletas de tela y una tarjeta con ideas para un picnic perfecto.",
        precio: 4000,
        stock: true,
        imagen: "./img/productos/caja-picnic.webp",
        fechaEntrega: "2 días despues de la compra",
        colores: ["#32CD32", "#FFD700", "#FF6347"],
        id: 4,
    },
    {
        nombre: "Caja Bienestar y Cuidado Personal",
        descripcion: "Todo lo necesario para un mimo personal. Incluye una vela aromática, una crema de manos con fragancia suave, un set de té de hierbas, flores secas, y una libreta para reflexionar y escribir.",
        precio: 3600,
        stock: true,
        imagen: "./img/productos/caja-bienestar.webp",
        fechaEntrega: "2 días despues de la compra",
        colores: ["#FFB6C1", "#FFFACD", "#E6E6FA"],
        id: 5,
    },
    {
        nombre: "Caja Retro Gamer",
        descripcion: "Para amantes de lo retro y gamers. Contiene snacks clásicos como caramelos y chocolates, una taza personalizada de videojuegos y un llavero de control retro.",
        precio: 4300,
        stock: true,
        imagen: "./img/productos/caja-retro-gamer.webp",
        fechaEntrega: "2 días despues de la compra",
        colores: ["#2E8B57", "#708090", "#000000"],
        id: 6,
    },
    {
        nombre: "Caja Para Viajeros",
        descripcion: "Ideal para quienes aman recorrer el mundo. Incluye un cuaderno de viaje, una botellita de licor o vino mini, una mini brújula de decoración y caramelos de sabores exóticos.",
        precio: 4700,
        stock: true,
        imagen: "./img/productos/caja-para-viajeros.webp",
        fechaEntrega: "2 días despues de la compra",
        colores: ["#4682B4", "#8B0000", "#FFD700"],
        id: 7,
    },
    {
        nombre: "Caja Energía y Motivación",
        descripcion: "Para quienes buscan energía y positivismo. Trae una agenda motivacional, caramelos de menta, una botellita de jugo energizante, y un set de stickers inspiradores.",
        precio: 3900,
        stock: true,
        imagen: "./img/productos/caja-energia.webp",
        fechaEntrega: "2 días despues de la compra",
        colores: ["#FF4500", "#FF8C00", "#FFFF00"],
        id: 8,
    },
    {
        nombre: "Caja de Flores y Aromas",
        descripcion: "Una caja llena de encanto floral. Contiene un ramo de flores secas, una vela aromática de jazmín, un set de jabones artesanales y un pequeño florero de cerámica.",
        precio: 3400,
        stock: true,
        imagen: "./img/productos/caja-de-flores.webp",
        fechaEntrega: "2 días despues de la compra",
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

  