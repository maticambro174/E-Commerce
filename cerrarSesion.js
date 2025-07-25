export function cerrarSesion() {
  const logoutBtn = document.getElementById("btnLogout");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("userData");
      window.location.href = "iniciarSesion.html";
    });
  }
}
