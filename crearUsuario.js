// crearUsuario.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.txtNombre.value.trim();
    const apellido = form.txtApellido.value.trim();
    const email = form.txtEmail.value.trim().toLowerCase();
    const pass = form.txtPass.value;
    const fecha = form.date.value;

    if (!nombre || !apellido || !email || !pass || !fecha) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevoUsuario = { nombre, apellido, email, pass, fecha };

    const usuarios = JSON.parse(localStorage.getItem("users")) || [];

    if (usuarios.some(user => user.email === email)) {
      alert("Este email ya está registrado.");
      return;
    }

    usuarios.push(nuevoUsuario);
    localStorage.setItem("users", JSON.stringify(usuarios));

    alert("Cuenta creada exitosamente.");
    window.location.href = "iniciarSesion.html";
  });
});
