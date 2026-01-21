const params = new URLSearchParams(window.location.search);

        const nombre = params.get("nombre");
        const telefono = params.get("tel");
        const mail = params.get("mail")
        const iniciales = params.get("ini");
        const direccion = params.get("dir");

        if (nombre && telefono) {
            document.querySelector("h2").textContent = nombre;
            document.querySelector(".circulo-inicial").textContent = iniciales;
            document.getElementById("tel").textContent = telefono;
            document.getElementById("mail").textContent = mail;
            document.getElementById("dir").textContent = direccion;
        }