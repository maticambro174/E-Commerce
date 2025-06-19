export function cerrarSesion() {
    const logoutBtn = document.getElementById("btnLogout");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            window.location.href = "iniciarSesion.html";
        });
    }
}
