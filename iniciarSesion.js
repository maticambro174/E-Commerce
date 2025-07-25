document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.email.value.trim().toLowerCase();
    const pass = form.pass.value;

    if (!email || !pass) {
      alert("Por favor complete todos los campos.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email && u.pass === pass);

    if (user) {
      sessionStorage.setItem('userData', JSON.stringify(user));
      window.location.href = "index.html";
    } else {
      alert("Email o contraseña incorrectos.");
    }
  });
});
