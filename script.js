/* ======================================
   BIBLIOTECA CBTis No. 5
   INVENTARIO CON BOTÓN DE GUARDADO
====================================== */

const librosIniciales = [
    // Estante 1
    { estante: 1, materia: "Matemáticas", titulo: "Álgebra y Geometría", autor: "CONAMAT", cantidad: 5, obs: "Disponible" },
    { estante: 1, materia: "Matemáticas", titulo: "Cálculo Diferencial e Integral", autor: "Louis Leithold", cantidad: 4, obs: "Buen estado" },
    { estante: 1, materia: "Matemáticas", titulo: "Trigonometría y Geometría Analítica", autor: "Earl W. Swokowski", cantidad: 3, obs: "Consulta" },
    { estante: 1, materia: "Matemáticas", titulo: "Probabilidad y Estadística", autor: "William Mendenhall", cantidad: 4, obs: "Disponible" },
    { estante: 1, materia: "Matemáticas", titulo: "Matemáticas Financieras", autor: "Alfredo Díaz Mata", cantidad: 3, obs: "Reciente" },
    { estante: 1, materia: "Matemáticas", titulo: "Aritmética", autor: "Aurelio Baldor", cantidad: 6, obs: "Alta demanda" },
    { estante: 1, materia: "Matemáticas", titulo: "Álgebra de Baldor", autor: "Aurelio Baldor", cantidad: 8, obs: "Clásico" },
    { estante: 1, materia: "Matemáticas", titulo: "Geometría y Trigonometría", autor: "Arturo Aguilar Márquez", cantidad: 5, obs: "Disponible" },

    // Estante 2
    { estante: 2, materia: "Química", titulo: "Química I y II", autor: "Victor Manuel Ramírez", cantidad: 4, obs: "Tronco común" },
    { estante: 2, materia: "Química", titulo: "Química General", autor: "Raymond Chang", cantidad: 3, obs: "Avanzado" },
    { estante: 2, materia: "Biología", titulo: "Biología Celular y Molecular", autor: "Gerald Karp", cantidad: 3, obs: "Disponible" },
    { estante: 2, materia: "Biología", titulo: "Biología Moderna", autor: "Helena Curtis", cantidad: 5, obs: "Buen estado" },
    { estante: 2, materia: "Física", titulo: "Física Conceptual", autor: "Paul G. Hewitt", cantidad: 4, obs: "Recomendado" },
    { estante: 2, materia: "Física", titulo: "Física para la Ciencia y la Tecnología", autor: "Paul A. Tipler", cantidad: 3, obs: "Consulta" },
    { estante: 2, materia: "Ecología", titulo: "Ecología y Medio Ambiente", autor: "G. Tyler Miller", cantidad: 4, obs: "Disponible" },
    { estante: 2, materia: "Salud", titulo: "Anatomía y Fisiología Humana", autor: "Gerard J. Tortora", cantidad: 2, obs: "Frágil" },

    // Estante 3
    { estante: 3, materia: "Programación", titulo: "Desarrollo Web con HTML y CSS", autor: "Jon Duckett", cantidad: 3, obs: "Especialidad" },
    { estante: 3, materia: "Programación", titulo: "Programación Orientada a Objetos", autor: "Luis Joyanes Aguilar", cantidad: 3, obs: "Disponible" },
    { estante: 3, materia: "Programación", titulo: "JavaScript: Guía Definitiva", autor: "David Flanagan", cantidad: 3, obs: "Nuevo" },
    { estante: 3, materia: "Programación", titulo: "PHP y MySQL para Principiantes", autor: "Jon Duckett", cantidad: 2, obs: "Disponible" },
    { estante: 3, materia: "Bases de Datos", titulo: "Fundamentos de Sistemas de Bases de Datos", autor: "Ramez Elmasri", cantidad: 4, obs: "Excelente" },
    { estante: 3, materia: "Redes", titulo: "Redes de Computadoras", autor: "Andrew S. Tanenbaum", cantidad: 2, obs: "Técnico" },
    { estante: 3, materia: "Programación", titulo: "Estructuras de Datos en C++", autor: "Luis Joyanes", cantidad: 5, obs: "Disponible" },
    { estante: 3, materia: "Sistemas", titulo: "Sistemas Operativos Conceptos", autor: "Abraham Silberschatz", cantidad: 3, obs: "Estándar" },

    // Estante 4
    { estante: 4, materia: "Historia", titulo: "Historia de México", autor: "Juan Brom", cantidad: 5, obs: "Tronco común" },
    { estante: 4, materia: "Economía", titulo: "Economía con Aplicaciones a Latinoamérica", autor: "Paul A. Samuelson", cantidad: 3, obs: "Disponible" },
    { estante: 4, materia: "Sociología", titulo: "Sociología", autor: "John J. Macionis", cantidad: 3, obs: "Buen estado" },
    { estante: 4, materia: "Filosofía", titulo: "Filosofía I y II", autor: "Eduardo García Máynez", cantidad: 4, obs: "Disponible" },
    { estante: 4, materia: "Ética", titulo: "Ética y Valores 1 y 2", autor: "Diana Esther Garza", cantidad: 6, obs: "Alta demanda" },
    { estante: 4, materia: "Metodología", titulo: "Metodología de la Investigación", autor: "Roberto Hernández Sampieri", cantidad: 5, obs: "Imprescindible" },
    { estante: 4, materia: "Sociología", titulo: "Estructura Socioeconómica de México", autor: "José Silvestre Méndez", cantidad: 4, obs: "Disponible" },
    { estante: 4, materia: "Psicología", titulo: "Psicología General", autor: "Herrera Zepeda", cantidad: 3, obs: "Buen estado" },

    // Estante 5
    { estante: 5, materia: "Contabilidad", titulo: "Contabilidad Básica", autor: "Cristóbal del Río", cantidad: 6, obs: "Especialidad" },
    { estante: 5, materia: "Administración", titulo: "Administración: Una Perspectiva Global", autor: "Harold Koontz", cantidad: 3, obs: "Disponible" },
    { estante: 5, materia: "Contabilidad", titulo: "Contabilidad Financiera", autor: "Gerardo Guajardo Cantú", cantidad: 4, obs: "Actualizado" },
    { estante: 5, materia: "Administración", titulo: "Fundamentos de Marketing", autor: "William J. Stanton", cantidad: 3, obs: "Disponible" },
    { estante: 5, materia: "Derecho", titulo: "Derecho Mercantil", autor: "Carlos Felipe Dávalos", cantidad: 3, obs: "Jurídica" },
    { estante: 5, materia: "Administración", titulo: "Administración de Recursos Humanos", autor: "Idalberto Chiavenato", cantidad: 4, obs: "Disponible" },
    { estante: 5, materia: "Contabilidad", titulo: "Auditoría de Estados Financieros", autor: "Franklin Reyes Ramírez", cantidad: 2, obs: "Limitado" },
    { estante: 5, materia: "Finanzas", titulo: "Principios de Finanzas Corporativas", autor: "Richard A. Brealey", cantidad: 2, obs: "Avanzado" },

    // Estante 6
    { estante: 6, materia: "Literatura", titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", cantidad: 2, obs: "Clásico" },
    { estante: 6, materia: "Literatura", titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", cantidad: 3, obs: "Conmemorativa" },
    { estante: 6, materia: "Literatura", titulo: "Pedro Páramo", autor: "Juan Rulfo", cantidad: 4, obs: "Disponible" },
    { estante: 6, materia: "Literatura", titulo: "Aura", autor: "Carlos Fuentes", cantidad: 5, obs: "Buen estado" },
    { estante: 6, materia: "Lengua", titulo: "Taller de Lectura y Redacción I y II", autor: "María Antonieta Acosta", cantidad: 6, obs: "Alta demanda" },
    { estante: 6, materia: "Lengua", titulo: "Nueva Gramática de la Lengua Española", autor: "RAE", cantidad: 3, obs: "Consulta" },
    { estante: 6, materia: "Literatura", titulo: "La Metamorfosis", autor: "Franz Kafka", cantidad: 4, obs: "Disponible" },
    { estante: 6, materia: "Literatura", titulo: "Poesía Selecta Hispanoamericana", autor: "Varios Autores", cantidad: 3, obs: "Antología" }
];

// Variable temporal para manejar el inventario antes de presionar guardar
let inventarioActual = [];

function obtenerInventario() {
    let guardado = localStorage.getItem("inventario_biblioteca_cbtis5");
    if (!guardado) {
        localStorage.setItem("inventario_biblioteca_cbtis5", JSON.stringify(librosIniciales));
        return JSON.parse(JSON.stringify(librosIniciales));
    }
    return JSON.parse(guardado);
}

// Inicializar inventario en memoria
inventarioActual = obtenerInventario();

function renderizarInventario(lista) {
    for (let i = 1; i <= 6; i++) {
        let estanteDiv = document.querySelector(`.grupo-estante[data-estante-id="${i}"] .catalogo-grid`);
        if (estanteDiv) estanteDiv.innerHTML = "";
    }

    lista.forEach((libro, index) => {
        let estanteDiv = document.querySelector(`.grupo-estante[data-estante-id="${libro.estante}"] .catalogo-grid`);
        if (!estanteDiv) return;

        let tarjeta = document.createElement("article");
        tarjeta.className = "libro";
        tarjeta.dataset.index = index;
        tarjeta.dataset.titulo = normalizarTexto(libro.materia + " " + libro.titulo + " " + libro.autor);

        let spanCat = document.createElement("span");
        spanCat.className = "categoria";
        spanCat.textContent = libro.materia;

        let h4 = document.createElement("h4");
        h4.textContent = libro.titulo;

        let p = document.createElement("p");
        p.textContent = `Autor: ${libro.autor} · Cant. ${libro.cantidad} (${libro.obs})`;

        let divBotones = document.createElement("div");
        divBotones.className = "botones-tarjeta";

        let btnEditar = document.createElement("button");
        btnEditar.type = "button";
        btnEditar.className = "btn-editar";
        btnEditar.textContent = "✏️ Modificar";
        btnEditar.onclick = function() { editarLibro(index); };

        let btnEliminar = document.createElement("button");
        btnEliminar.type = "button";
        btnEliminar.className = "btn-eliminar";
        btnEliminar.textContent = "🗑️ Eliminar";
        btnEliminar.onclick = function() { eliminarLibro(index); };

        divBotones.appendChild(btnEditar);
        divBotones.appendChild(btnEliminar);

        tarjeta.appendChild(spanCat);
        tarjeta.appendChild(h4);
        tarjeta.appendChild(p);
        tarjeta.appendChild(divBotones);

        estanteDiv.appendChild(tarjeta);
    });

    buscarLibros();
}

// Botón de Guardar Cambios definitivo
const btnGuardarCambios = document.getElementById("btn-guardar-cambios");
const panelGuardar = document.getElementById("panel-guardar-cambios");

if (btnGuardarCambios) {
    btnGuardarCambios.addEventListener("click", function() {
        localStorage.setItem("inventario_biblioteca_cbtis5", JSON.stringify(inventarioActual));
        panelGuardar.classList.add("oculto");
        alert("¡Cambios guardados correctamente! Al volver a abrir la página ya no aparecerán los libros eliminados.");
    });
}

function marcarCambiosPendientes() {
    if (panelGuardar) {
        panelGuardar.classList.remove("oculto");
    }
}

// Buscador
const buscador = document.getElementById("buscar-libro");
const mensajeBusqueda = document.getElementById("mensaje-busqueda");

function normalizarTexto(texto) {
    return String(texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function buscarLibros() {
    if (!buscador) return;
    const consulta = normalizarTexto(buscador.value);
    const libros = document.querySelectorAll("#catalogo .libro");
    const estantes = document.querySelectorAll("#catalogo .grupo-estante");
    let encontrados = 0;

    libros.forEach(function(libro) {
        const titulo = libro.dataset.titulo || "";
        const coincide = titulo.includes(consulta);
        libro.hidden = !coincide;
        if (coincide) encontrados++;
    });

    estantes.forEach(function(estante) {
        const visibles = estante.querySelectorAll(".libro:not([hidden])");
        estante.hidden = visibles.length === 0;
    });

    if (consulta === "") {
        mensajeBusqueda.textContent = "Explora las materias organizadas en los seis estantes.";
    } else if (encontrados === 0) {
        mensajeBusqueda.textContent = "No se encontraron resultados. Intenta con otra palabra.";
    } else {
        mensajeBusqueda.textContent = "Se encontraron " + encontrados + " libros relacionados con tu búsqueda.";
    }
}

if (buscador) {
    buscador.addEventListener("input", buscarLibros);
}

// Eliminar libro temporalmente hasta dar clic en Guardar
function eliminarLibro(index) {
    if (confirm("¿Deseas quitar este libro? Recuerda hacer clic en 'Guardar cambios' para que sea permanente.")) {
        inventarioActual.splice(index, 1);
        renderizarInventario(inventarioActual);
        marcarCambiosPendientes();
    }
}

function editarLibro(index) {
    let libro = inventarioActual[index];

    let nuevoTitulo = prompt("Modifica el título del libro:", libro.titulo);
    if (nuevoTitulo === null) return;

    let nuevaMateria = prompt("Modifica la materia:", libro.materia);
    if (nuevaMateria === null) return;

    let nuevoAutor = prompt("Modifica el autor:", libro.autor);
    if (nuevoAutor === null) return;

    let nuevaCantidad = prompt("Modifica la cantidad:", libro.cantidad);
    if (nuevaCantidad === null) return;

    let nuevaObs = prompt("Modifica las observaciones:", libro.obs);
    if (nuevaObs === null) return;

    inventarioActual[index] = {
        estante: libro.estante,
        materia: nuevaMateria.trim(),
        titulo: nuevoTitulo.trim(),
        autor: nuevoAutor.trim(),
        cantidad: Number(nuevaCantidad) || 1,
        obs: nuevaObs.trim()
    };

    renderizarInventario(inventarioActual);
    marcarCambiosPendientes();
    alert("¡Modificación aplicada! No olvides hacer clic en 'Guardar cambios'.");
}

const btnRestaurar = document.getElementById("btn-restaurar");
if (btnRestaurar) {
    btnRestaurar.addEventListener("click", function() {
        if (confirm("¿Deseas restaurar la lista inicial completa?")) {
            localStorage.setItem("inventario_biblioteca_cbtis5", JSON.stringify(librosIniciales));
            inventarioActual = obtenerInventario();
            renderizarInventario(inventarioActual);
            if (panelGuardar) panelGuardar.classList.add("oculto");
            alert("Inventario restaurado con éxito.");
        }
    });
}

// Agregar nuevo libro
const formAgregar = document.getElementById("form-agregar-libro");

if (formAgregar) {
    formAgregar.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const numEstante = Number(document.getElementById("nuevo-estante").value);
        const materia = document.getElementById("nueva-materia").value.trim();
        const titulo = document.getElementById("nuevo-titulo").value.trim();
        const autor = document.getElementById("nuevo-autor").value.trim();
        const cantidad = Number(document.getElementById("nueva-cantidad").value);

        if (numEstante < 1 || numEstante > 6) {
            alert("El número de estante debe ser entre 1 y 6.");
            return;
        }

        inventarioActual.push({
            estante: numEstante,
            materia: materia,
            titulo: titulo,
            autor: autor,
            cantidad: cantidad,
            obs: "Nuevo ingreso"
        });

        renderizarInventario(inventarioActual);
        marcarCambiosPendientes();
        alert("¡Libro agregado! No olvides hacer clic en 'Guardar cambios'.");
        formAgregar.reset();
    });
}

// Conexión con Excel
const archivoExcel = document.getElementById("archivo-excel");
const estadoExcel = document.getElementById("estado-excel");

function normalizarEncabezado(texto) {
    return normalizarTexto(texto).replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");
}

function obtenerDato(fila, nombres) {
    const clave = Object.keys(fila).find(function(encabezado) {
        return nombres.includes(normalizarEncabezado(encabezado));
    });
    return clave ? fila[clave] : "";
}

if (archivoExcel) {
    archivoExcel.addEventListener("change", function(evento) {
        const archivo = evento.target.files[0];
        if (!archivo) return;

        if (typeof XLSX === "undefined") {
            estadoExcel.textContent = "Error: no se pudo cargar la biblioteca de Excel.";
            return;
        }

        estadoExcel.textContent = "Leyendo el archivo Excel...";
        const lector = new FileReader();

        lector.onload = function(e) {
            try {
                const datos = new Uint8Array(e.target.result);
                const libroExcel = XLSX.read(datos, { type: "array" });
                const nombreHoja = libroExcel.SheetNames[0];
                const hoja = libroExcel.Sheets[nombreHoja];
                const registros = XLSX.utils.sheet_to_json(hoja, { defval: "" });

                if (registros.length === 0) {
                    estadoExcel.textContent = "El archivo Excel no contiene registros.";
                    return;
                }

                let nuevoInventario = [];
                let omitidos = 0;

                registros.forEach(function(fila) {
                    const numeroEstante = Number(obtenerDato(fila, ["estante"]));
                    const materia = String(obtenerDato(fila, ["materia", "materiaocategoria", "clasificacion"])).trim();
                    const titulo = String(obtenerDato(fila, ["titulo", "titulodellibro", "libro"])).trim();
                    const autor = String(obtenerDato(fila, ["autor"])).trim();
                    const cantidad = obtenerDato(fila, ["cantidad", "ejemplares"]);
                    const observaciones = String(obtenerDato(fila, ["observaciones"])).trim();

                    if (!Number.isInteger(numeroEstante) || numeroEstante < 1 || numeroEstante > 6) {
                        omitidos++;
                        return;
                    }

                    if (!materia && !titulo) {
                        omitidos++;
                        return;
                    }

                    nuevoInventario.push({
                        estante: numeroEstante,
                        materia: materia || "Sin clasificación",
                        titulo: titulo || materia,
                        autor: autor || "Desconocido",
                        cantidad: cantidad !== "" ? Number(cantidad) : 1,
                        obs: observaciones || "Importado de Excel"
                    });
                });

                inventarioActual = nuevoInventario;
                renderizarInventario(inventarioActual);
                marcarCambiosPendientes();
                estadoExcel.textContent = "¡Excel leído! Haz clic en 'Guardar cambios' para fijar los " + nuevoInventario.length + " libros.";
            } catch (error) {
                console.error("Error al leer el archivo Excel:", error);
                estadoExcel.textContent = "No se pudo leer el archivo. Revisa su formato.";
            }
        };

        lector.readAsArrayBuffer(archivo);
    });
}

// Menú móvil y formulario
const botonMenu = document.getElementById("menu-boton");
const menu = document.getElementById("menu");

if (botonMenu && menu) {
    botonMenu.addEventListener("click", function() {
        const abierto = menu.classList.toggle("menu-abierto");
        botonMenu.setAttribute("aria-expanded", abierto);
        botonMenu.textContent = abierto ? "✕" : "☰";
    });

    menu.querySelectorAll("a").forEach(function(enlace) {
        enlace.addEventListener("click", function() {
            menu.classList.remove("menu-abierto");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.textContent = "☰";
        });
    });
}

const formulario = document.getElementById("formulario-contacto");
const resultado = document.getElementById("resultado-contacto");

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();
        const nombre = document.getElementById("nombre-contacto").value.trim();
        const correo = document.getElementById("correo-contacto").value.trim();
        const tema = document.getElementById("tema-contacto").value;
        const mensaje = document.getElementById("mensaje-contacto").value.trim();

        if (!nombre || !correo || !tema || !mensaje) {
            resultado.textContent = "Completa todos los campos antes de continuar.";
            resultado.style.color = "#b42335";
            return;
        }

        resultado.textContent = "¡Gracias, " + nombre + "! Los datos se validaron correctamente.";
        resultado.style.color = "#16794b";
        formulario.reset();
    });
}

// Carga inicial
renderizarInventario(inventarioActual);