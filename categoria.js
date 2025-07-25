// categoria.js
import { navbarComponent } from './navbar.js';
import { cerrarSesion } from './cerrarSesion.js';
import { cardComponent } from './cardComponent.js';

const obtenerCategoria = () => {
  const nombre = window.location.pathname;
  if (nombre.includes("camisas")) return "Camisas";
  if (nombre.includes("pantalones")) return "Pantalones";
  if (nombre.includes("zapatillas")) return "Zapatillas";
  return null;
};

window.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById("navbarContainer");
  nav.innerHTML = navbarComponent;
  cerrarSesion();

  const categoria = obtenerCategoria();
  const contenedor = document.createElement("div");
  contenedor.className = "row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-5 mx-2";
  document.body.appendChild(contenedor);

  if (!categoria) {
    contenedor.innerHTML = "<p>Categoría no reconocida.</p>";
    return;
  }

  fetch("./productos.json")
    .then(res => res.json())
    .then(productos => {
      const filtrados = productos.filter(p => p.categoria === categoria);
      contenedor.innerHTML = filtrados.map(p => cardComponent(p)).join("");
    })
    .catch(err => {
      console.error("Error al cargar productos:", err);
      contenedor.innerHTML = "<p>Error al cargar productos.</p>";
    });
});

window.increment = function (id) {
  const qty = document.getElementById(`qty-${id}`);
  qty.textContent = parseInt(qty.textContent) + 1;
};

window.decrement = function (id) {
  const qty = document.getElementById(`qty-${id}`);
  const value = parseInt(qty.textContent);
  if (value > 0) {
    qty.textContent = value - 1;
  }
};

window.añadirCarrito = function (productoId) {
  const user = sessionStorage.getItem("userData");
  if (!user) {
    alert("Debes iniciar sesión para agregar productos al carrito.");
    window.location.href = "iniciarSesion.html";
    return;
  }

  fetch('./productos.json')
    .then(res => res.json())
    .then(productos => {
      const producto = productos.find(p => p.id === productoId);
      const cantidad = parseInt(document.getElementById(`qty-${productoId}`).textContent);

      if (!cantidad || cantidad < 1) {
        alert("Selecciona una cantidad mayor a 0");
        return;
      }

      const carrito = JSON.parse(localStorage.getItem('cartItems')) || [];
      const index = carrito.findIndex(item => item.id === productoId);

      if (index !== -1) {
        carrito[index].cantidad += cantidad;
      } else {
        carrito.push({
          id: producto.id,
          titulo: producto.titulo,
          precio: producto.precio,
          cantidad: cantidad
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(carrito));
      mostrarSnackbar("Producto añadido al carrito.");    })
    .catch(err => console.error("Error al agregar al carrito", err));
};

function mostrarSnackbar(mensaje = "Producto añadido al carrito.") {
  const toastEl = document.getElementById('addToast');
  if (!toastEl) return;

  toastEl.querySelector('.toast-body').textContent = mensaje;

  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}
