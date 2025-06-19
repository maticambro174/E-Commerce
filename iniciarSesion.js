document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        const email = form.email.value;
        const pass = form.pass.value;

        if (email && pass) {
            window.location.href = "index.html";
        } else {
            alert("Por favor complete todos los campos.");
        }
    });
});
