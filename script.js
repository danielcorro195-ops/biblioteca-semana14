class Libro {

    constructor(titulo, autor, anio, categoria) {

        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.categoria = categoria;
        this.disponible = true;
        this.vecesPrestado = 0;
    }
}

let libros = JSON.parse(localStorage.getItem("libros")) || [];

function guardar() {

    localStorage.setItem("libros", JSON.stringify(libros));
}

function agregarLibro() {

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const anio = document.getElementById("anio").value;
    const categoria = document.getElementById("categoria").value;

    const existe = libros.some(libro =>
        libro.titulo.toLowerCase() === titulo.toLowerCase() &&
        libro.autor.toLowerCase() === autor.toLowerCase()
    );

    if (existe) {

        alert("Libro duplicado");
        return;
    }

    libros.push(
        new Libro(titulo, autor, anio, categoria)
    );

    guardar();

    renderizar();
}

function renderizar(lista = libros) {

    const contenedor =
        document.getElementById("librosContainer");

    contenedor.innerHTML = "";

    lista.forEach((libro, index) => {

        contenedor.innerHTML += `
        <div class="col-md-4 mb-3">

            <div class="card">

                <div class="card-body">

                    <h5>${libro.titulo}</h5>

                    <p>${libro.autor}</p>

                    <p>${libro.anio}</p>

                    <p>${libro.categoria}</p>

                    <p>
                    ${libro.disponible
                        ? "✅ Disponible"
                        : "❌ Prestado"}
                    </p>

                    <button
                        class="btn btn-success btn-sm"
                        onclick="prestar(${index})"
                        data-bs-toggle="tooltip"
                        title="Prestar libro">
                        Prestar
                    </button>

                    <button
                        class="btn btn-info btn-sm"
                        data-bs-toggle="popover"
                        data-bs-content="Categoría: ${libro.categoria}">
                        Info
                    </button>

                </div>

            </div>

        </div>
        `;
    });

    inicializarBootstrap();

    generarEstadisticas();

    generarMasLeidos();

    document.getElementById("resultCount").innerText =
        `Mostrando ${lista.length} libros`;
}

function prestar(index) {

    if (libros[index].disponible) {

        libros[index].disponible = false;
        libros[index].vecesPrestado++;

        guardar();

        renderizar();
    }
}

function inicializarBootstrap() {

    document
        .querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach(el => new bootstrap.Tooltip(el));

    document
        .querySelectorAll('[data-bs-toggle="popover"]')
        .forEach(el => new bootstrap.Popover(el));
}

function aplicarFiltros() {

    const texto =
        document.getElementById("searchFilter")
            .value.toLowerCase();

    const disponibilidad =
        document.getElementById("availabilityFilter").value;

    const min =
        parseInt(document.getElementById("yearMin").value) || 0;

    const max =
        parseInt(document.getElementById("yearMax").value) || 9999;

    const filtrados = libros.filter(libro => {

        const coincideTexto =
            libro.titulo.toLowerCase().includes(texto) ||
            libro.autor.toLowerCase().includes(texto);

        let coincideEstado = true;

        if (disponibilidad === "available")
            coincideEstado = libro.disponible;

        if (disponibilidad === "borrowed")
            coincideEstado = !libro.disponible;

        const coincideAnios =
            libro.anio >= min &&
            libro.anio <= max;

        return coincideTexto &&
            coincideEstado &&
            coincideAnios;
    });

    renderizar(filtrados);
}

function limpiarFiltros() {

    document.getElementById("searchFilter").value = "";
    document.getElementById("availabilityFilter").value = "all";
    document.getElementById("yearMin").value = "";
    document.getElementById("yearMax").value = "";

    renderizar();
}

document.getElementById("searchFilter")
    .addEventListener("input", aplicarFiltros);

document.getElementById("availabilityFilter")
    .addEventListener("change", aplicarFiltros);

document.getElementById("yearMin")
    .addEventListener("input", aplicarFiltros);

document.getElementById("yearMax")
    .addEventListener("input", aplicarFiltros);

let chart;

function generarEstadisticas() {

    const disponibles =
        libros.filter(l => l.disponible).length;

    const prestados =
        libros.length - disponibles;

    if (chart) chart.destroy();

    const ctx =
        document.getElementById("estadisticasChart");

    chart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: ["Disponibles", "Prestados"],

            datasets: [{
                label: "Libros",
                data: [disponibles, prestados]
            }]
        }
    });

    document.getElementById("statsSummary").innerHTML = `
        <div class="row">

            <div class="col-md-4">
                <div class="stats-card bg-primary">
                    ${libros.length}<br>Total
                </div>
            </div>

            <div class="col-md-4">
                <div class="stats-card bg-success">
                    ${disponibles}<br>Disponibles
                </div>
            </div>

            <div class="col-md-4">
                <div class="stats-card bg-warning">
                    ${prestados}<br>Prestados
                </div>
            </div>

        </div>
    `;
}

function generarMasLeidos() {

    const top =
        [...libros]
        .sort((a, b) =>
            b.vecesPrestado - a.vecesPrestado)
        .slice(0, 5);

    let html = "<ol>";

    top.forEach(libro => {

        html += `
        <li>
        ${libro.titulo}
        (${libro.vecesPrestado} préstamos)
        </li>
        `;
    });

    html += "</ol>";

    document.getElementById("masLeidos").innerHTML =
        html;
}

function cambiarTema() {

    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "tema",
        document.body.classList.contains("dark-mode")
    );
}

if (localStorage.getItem("tema") === "true") {

    document.body.classList.add("dark-mode");
}

renderizar();