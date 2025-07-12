import { navbarComponent } from './navbar.js';
import { cerrarSesion } from './cerrarSesion.js';

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navbarContainer");
  nav.innerHTML = navbarComponent;
  cerrarSesion();

  const container = document.getElementById("carritoContainer");
  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

  if (cart.length === 0) {
    container.innerHTML = "<p>No hay productos en el carrito.</p>";
    return;
  }

  let total = 0;
  let html = `
    <ul class="list-group mb-4">
  `;

  cart.forEach((item, index) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    html += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <h5>${item.titulo}</h5>
          <p>Cantidad: ${item.cantidad}</p>
          <p>Subtotal: $${subtotal}</p>
        </div>
        <button class="btn btn-danger btn-sm" onclick="eliminar(${index})">Eliminar</button>
      </li>
    `;
  });

  html += `</ul><h4>Total: $${total}</h4>`;
  container.innerHTML = html;
});

window.eliminar = function(index) {
  const confirmar = confirm("¿Estás seguro de que querés eliminar este producto del carrito?");
  if (!confirmar) return;

  const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cartItems', JSON.stringify(cart));
  location.reload();
};
