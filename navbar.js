const url = './';
const user = JSON.parse(sessionStorage.getItem("userData"));
const saludo = user ? `<span class="navbar-text ms-3">Hola, ${user.nombre || user.email}</span>` : "";

const navElements = [
  { title: 'Página Principal', link: `${url}index.html` },
  { title: 'Tu Tienda', link: `${url}tienda.html` },
  { title: 'Iniciar Sesión', link: `${url}iniciarSesion.html` },
  { title: 'Crear Cuenta', link: `${url}crearCuenta.html` },
];

const categorias = [
  { title: 'Camisas', link: `${url}camisas.html` },
  { title: 'Pantalones', link: `${url}pantalones.html` },
  { title: 'Zapatillas', link: `${url}zapatillas.html` },
];

export const navbarComponent = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tienda de Matias</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        ${navElements.map(item => `
          <li class="nav-item">
            <a class="nav-link" href="${item.link}">${item.title}</a>
          </li>`).join('')}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
          <ul class="dropdown-menu">
            ${categorias.map(cat => `
              <li><a class="dropdown-item" href="${cat.link}">${cat.title}</a></li>`).join('')}
          </ul>
        </li>
      </ul>
      <div class="d-flex align-items-center ms-auto gap-3">
        ${saludo}
        <button id="btnLogout" class="btn btn-danger">Cerrar Sesión</button>
      </div>
    </div>
  </div>
</nav>
`;
