export const cardComponent = (product) => {
  return `
    <div class="col">
      <div class="card h-100">
        <img src="${product.imagen}" class="card-img-top" alt="${product.titulo}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.titulo}</h5>
          <p class="card-text">${product.descripcion}</p>
          <p class="fw-bold text-success">Precio: $${product.precio}</p>
          <div class="mt-auto d-flex align-items-center gap-2">
            <button class="btn btn-sm btn-outline-danger" onclick="decrement('${product.id}')">-</button>
            <span id="qty-${product.id}">0</span>
            <button class="btn btn-sm btn-outline-primary" onclick="increment('${product.id}')">+</button>
          </div>
        </div>
      </div>
    </div>
  `;
};
