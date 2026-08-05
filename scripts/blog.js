const reseñas = [
  {
    titulo: "Cien años de soledad",
    autor: "Reseña por Laura R.",
    fecha: "2026-07-20",
    resumen: "Una nueva mirada al clásico de García Márquez..."
  },
  {
    titulo: "Recomendados de julio",
    autor: "Equipo Raíz",
    fecha: "2026-07-15",
    resumen: "Cinco libros independientes que no te puedes perder..."
  }
];

const contenedor = document.getElementById("blog-lista");

reseñas.forEach(r => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "blog-tarjeta";
  tarjeta.innerHTML = `
    <h3>${r.titulo}</h3>
    <p class="blog-meta">${r.autor} · ${r.fecha}</p>
    <p>${r.resumen}</p>
  `;
  contenedor.appendChild(tarjeta);
});