// Navegación con desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
 document.getElementById('boton-tema').addEventListener('click', () => {
      const html = document.documentElement;
      html.dataset.tema = html.dataset.tema === 'claro' ? 'oscuro' : 'claro';
    });
    
document.addEventListener("DOMContentLoaded", function () {
      const botonMenu = document.getElementById("boton-menu");
      const nav = document.querySelector("nav");

      botonMenu.addEventListener("click", () => {
        nav.classList.toggle("abierto");
      });
    });
  // Seleccionamos el formulario y los campos de las contraseñas
  const formRegistro = document.getElementById('form-registro');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const errorMessage = document.getElementById('error-message');

  // Función que valida si las contraseñas son iguales
  formRegistro.addEventListener('submit', function(event) {
    // Limpiar mensaje de error previo
    errorMessage.textContent = '';

    // Comprobar si las contraseñas coinciden
    if (password.value !== confirmPassword.value) {
      // Prevenir el envío del formulario
      event.preventDefault();

      // Mostrar mensaje de error
      errorMessage.textContent = 'Las contraseñas no coinciden. Por favor, intenta nuevamente.';
      errorMessage.style.color = '#ff4d4d'; // Rojo para resaltar el error

      // Opcional: Resaltar los campos de las contraseñas
      password.style.borderColor = '#ff4d4d';
      confirmPassword.style.borderColor = '#ff4d4d';
    } else {
      // Si las contraseñas son iguales, quitar los estilos de error
      password.style.borderColor = '#ccc';
      confirmPassword.style.borderColor = '#ccc';
    }
  });