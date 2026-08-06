const eventos = [
  { nombre: "Feria del Libro de Medellín", fecha: "2026-08-10", lugar: "Plaza Mayor" },
  { nombre: "Club de lectura: novela negra", fecha: "2026-08-15", lugar: "Librería Raíz, sede Bello" },
  { nombre: "Firma de autor local", fecha: "2026-08-22", lugar: "Librería Raíz, El Poblado" }
];

const lista = document.getElementById("eventos-lista");

eventos
  .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
  .forEach(e => {
    const item = document.createElement("div");
    item.className = "evento-item";
    const fechaLegible = new Date(e.fecha).toLocaleDateString("es-CO", {
      day: "numeric", month: "long", year: "numeric"
    });
    item.innerHTML = `
      <span class="evento-fecha">${fechaLegible}</span>
      <h3>${e.nombre}</h3>
      <p>${e.lugar}</p>
    `;
    lista.appendChild(item);
  });