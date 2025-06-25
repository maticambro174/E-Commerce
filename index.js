import { navbarComponent } from './navbar.js';
import { cerrarSesion } from './cerrarSesion.js';
import { cardComponent } from './cardComponent.js';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('navbarContainer');
  if (container) {
    container.innerHTML = navbarComponent;
    cerrarSesion();
  }

  const cardContainer = document.getElementById('cardContainer');
  if (cardContainer) {
    fetch('./productos.json')
      .then(res => res.json())
      .then(productos => {
        const categorias = ['Camisas', 'Pantalones', 'Zapatillas'];
        let html = '';

        categorias.forEach(categoria => {
          const productosCategoria = productos
            .filter(p => p.categoria === categoria)
            .slice(0, 3);

          html += `<h2>${categoria}</h2><div class="row row-cols-1 row-cols-md-1 g-4 mb-5">`;
          html += productosCategoria.map(p => cardComponent(p)).join('');
          html += '</div>';
        });

        cardContainer.innerHTML = html;
      })
      .catch(err => {
        console.error('Error cargando productos:', err);
        cardContainer.innerHTML = '<p>Error al cargar productos.</p>';
      });
  }
});

window.increment = function(id) {
  const qty = document.getElementById(`qty-${id}`);
  qty.textContent = parseInt(qty.textContent) + 1;
};

window.decrement = function(id) {
  const qty = document.getElementById(`qty-${id}`);
  const value = parseInt(qty.textContent);
  if (value > 0) {
    qty.textContent = value - 1;
  }
};
