// ================= LOGIN =================
function login() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!emailInput || !passwordInput) return;

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
        alert("Completa todos los campos");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("usuario", email.split("@")[0]);
    localStorage.setItem(
        "fecha",
        new Date().toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long"
        })
    );

    window.location.href = "index/contacto.html";
}

// ================= PERFIL =================
document.addEventListener("DOMContentLoaded", () => {
    if (!document.getElementById("correo")) return;

    const email = localStorage.getItem("email");
    const usuario = localStorage.getItem("usuario");
    const fecha = localStorage.getItem("fecha");

    if (!email) {
        alert("No has iniciado sesión");
        window.location.href = "../index.html";
        return;
    }

    document.getElementById("correo").textContent = email;
    document.getElementById("usuario").textContent = usuario;
    document.getElementById("nombre-usuario").textContent = usuario;
    document.getElementById("nombre-completo").textContent = usuario;
    document.getElementById("fecha").textContent = fecha;

    document.getElementById("iniciales").textContent =
        usuario.substring(0, 2).toUpperCase();
});
