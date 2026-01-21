let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const inputTarea = document.getElementById("taskInput");
const inputPrioridad = document.getElementById("priorityInput");
const listaTareas = document.getElementById("taskList");
const botonAgregar = document.getElementById("addTask");

botonAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    if (inputTarea.value.trim() === "") return;

    const tarea = {
        id: Date.now(),
        texto: inputTarea.value,
        prioridad: inputPrioridad.value
    };

    tareas.push(tarea);
    inputTarea.value = "";
    guardarYRenderizar();
}

function renderizarTareas() {
    listaTareas.innerHTML = "";

    // Ordenar por prioridad
    tareas.sort((a, b) => a.prioridad - b.prioridad);

    tareas.forEach(tarea => {
        const li = document.createElement("li");

        li.className =
            tarea.prioridad == 1 ? "alta" :
            tarea.prioridad == 2 ? "media" : "baja";

        li.innerHTML = `
            <span>${tarea.texto}</span>
            <div>
                <button onclick="editarTarea(${tarea.id})">Editar ✏️</button>
                <button onclick="eliminarTarea(${tarea.id})">Eliminar 🗑️</button>
            </div>
        `;

        listaTareas.appendChild(li);
    });
}

function editarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    const nuevoTexto = prompt("Editar tarea", tarea.texto);

    if (nuevoTexto) {
        tarea.texto = nuevoTexto;
        guardarYRenderizar();
    }
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    guardarYRenderizar();
}

function guardarYRenderizar() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    renderizarTareas();
}

renderizarTareas();
