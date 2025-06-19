import { navbarComponent } from './navbar.js';
import { cerrarSesion } from './cerrarSesion.js';
import { cardComponent } from './cardComponent.js';

const cardContainer = document.getElementById('cardContainer');

const products = [
  {
    id: 'camisa1',
    titulo: 'Camisas',
    descripcion: 'Camisas frescas, cómodas y con diseños modernos.',
    precio: 2500,
    imagen: 'https://static.vecteezy.com/system/resources/previews/012/628/185/original/pack-of-color-t-shirts-on-transparent-background-free-png.png'
  },
  {
    id: 'pantalon1',
    titulo: 'Pantalones',
    descripcion: 'Pantalones casuales para todo tipo de ocasión.',
    precio: 3500,
    imagen: 'https://estaticos-cdn.sport.es/clip/657b54ac-90fd-42fe-9b86-8529e59d7803_alta-libre-aspect-ratio_default_0.jpg'
  },
  {
    id: 'zapatilla1',
    titulo: 'Zapatillas',
    descripcion: 'Zapatillas deportivas cómodas y con gran estilo.',
    precio: 5200,
    imagen: 'https://www.shutterstock.com/shutterstock/photos/1272576460/display_1500/stock-vector-vector-fitness-sneakers-shoes-for-training-running-shoe-vector-illustration-sport-shoes-set-1272576460.jpg'
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const cards = products.map(p => cardComponent(p)).join('');
  cardContainer.innerHTML = cards;
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



window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('navbarContainer');
    if (container) {
        container.innerHTML = navbarComponent;
        cerrarSesion();
    }
});