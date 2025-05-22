// Recuperar o inicializar el carrito
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Función para guardar en localStorage
  function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContador();
  }

  // Función para actualizar contador visual (si lo tienes en el HTML)
  function actualizarContador() {
    const contador = document.getElementById('contador-carrito');
    if (contador) {
      contador.textContent = carrito.length;
    }
  }

  // Escuchar clics en todos los botones
  document.querySelectorAll('.btn-add-cart').forEach(boton => {
    boton.addEventListener('click', () => {
      const nombre = boton.dataset.nombre;
      const precio = parseFloat(boton.dataset.precio);

      // Agregar producto al carrito
      carrito.push({ nombre, precio });
      guardarCarrito();

      // Confirmación visual temporal
      const original = boton.innerHTML;
      boton.innerHTML = '✔ Añadido';
      boton.disabled = true;
      setTimeout(() => {
        boton.innerHTML = original;
        boton.disabled = false;
      }, 1200);
    });
  });

  // Inicializar contador al cargar
  actualizarContador();

