// ------------------------------
// Inicializar carrito
// ------------------------------
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// ------------------------------
// Guardar carrito
// ------------------------------
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContador();
}

// ------------------------------
// Contador visual
// ------------------------------
function actualizarContador() {
  const contador = document.getElementById('contador-carrito');
  if (contador) {
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contador.textContent = totalItems;
  }
}

// ------------------------------
// Añadir producto
// ------------------------------
document.querySelectorAll('.btn-add-cart').forEach(boton => {
  boton.addEventListener('click', () => {
    const nombre = boton.dataset.nombre;
    const precio = parseFloat(boton.dataset.precio);

    const existente = carrito.find(p => p.nombre === nombre);
    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push({ nombre, precio, cantidad: 1 });
    }

    guardarCarrito();

    // Efecto visual
    const original = boton.innerHTML;
    boton.innerHTML = '✔ Añadido';
    boton.disabled = true;
    setTimeout(() => {
      boton.innerHTML = original;
      boton.disabled = false;
    }, 1200);
  });
});

// ------------------------------
// Mostrar carrito
// ------------------------------
function renderizarCarrito() {
  const contenedor = document.getElementById('lista-carrito');
  const total = document.getElementById('total-carrito');
  if (!contenedor || !total) return;

  contenedor.innerHTML = '';
  let totalPrecio = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p class="text-muted">Tu carrito está vacío.</p>';
    total.textContent = '0';
    return;
  }

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    const div = document.createElement('div');
    div.className = 'producto-item';
    div.innerHTML = `
      <div>
        <strong>${producto.nombre}</strong><br>
        Cantidad: ${producto.cantidad} x $${producto.precio.toLocaleString()}
      </div>
      <div>
        <span>$${subtotal.toLocaleString()}</span>
        <button class="btn btn-sm btn-danger ms-2" data-index="${index}">Eliminar</button>
      </div>
    `;
    contenedor.appendChild(div);
    totalPrecio += subtotal;
  });

  total.textContent = totalPrecio.toLocaleString();

  // Botón eliminar
  document.querySelectorAll('[data-index]').forEach(boton => {
    boton.addEventListener('click', () => {
      const index = parseInt(boton.dataset.index);
      carrito.splice(index, 1);
      guardarCarrito();
      renderizarCarrito();
    });
  });
}

// ------------------------------
// Finalizar compra
// ------------------------------
const btnFinalizar = document.getElementById('finalizarCompra');
if (btnFinalizar) {
  btnFinalizar.addEventListener('click', () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    const confirmacion = confirm("¿Deseas finalizar tu compra?");
    if (confirmacion) {
      carrito = [];
      guardarCarrito();
      renderizarCarrito();
      alert("¡Gracias por tu compra!");
    }
  });
}

// ------------------------------
// Smooth scroll
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ------------------------------
// Al cargar
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
  actualizarContador();
  renderizarCarrito();
});
