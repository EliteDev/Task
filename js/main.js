// obtén el formulario y la lista de tareas pendientes
const formulario = document.getElementById("formulario");
const botonesEliminar = document.querySelectorAll(".fa-trash");
const listaTareas = document.getElementById("list");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nuevaTarea = document.getElementById("task").value;


  const nuevoElemento = document.createElement("li");
  nuevoElemento.innerHTML = `
    <i class="fa-regular fa-circle"></i>
    <p>${nuevaTarea}</p>
    <i class="fa-solid fa-trash"></i>
  `;

  listaTareas.appendChild(nuevoElemento);
  document.getElementById("task").value = "";
});

listaTareas.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash')) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
  }
});