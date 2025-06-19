export function cerrarSesion() {
    const logoutBtn = document.getElementById("btnLogout");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            // localStorage.clear(); // si querés limpiar datos
            window.location.href = "iniciarSesion.html";
        });
    }
}
