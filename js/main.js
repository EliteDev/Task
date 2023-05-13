const inputTask = document.getElementById("task");
const formulario = document.getElementById("formulario");
const botonesEliminar = document.querySelectorAll(".fa-trash");
const listaTareas = document.getElementById("list");
const descriptionInput = document.getElementById('description');


let tasks = [];

if(!localStorage.getItem('tasks')) {
  localStorage.setItem('tasks', '[]');
} else {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  renderTasks(tasks);
}

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const taskTittle = document.getElementById("task").value;
  const descriptionInput = document.getElementById('description').value;

  let task = {
    tittle: taskTittle,
    description: descriptionInput,
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(tasks);
});

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTasks = tasks.filter(function(task) {
    return task.tittle.toLowerCase().includes(searchTerm) || task.description.toLowerCase().includes(searchTerm);
  });
  renderTasks(filteredTasks);
});

function renderTasks(tasks) {
  listaTareas.innerHTML = "";
  tasks.forEach(function(task) {
    const nuevoElemento = document.createElement("li");
    const tittleTask = document.createElement('h3');
    const tittleDescription = document.createElement('p');
    const icon = document.createElement('i');
    icon.classList = 'fa-solid fa-trash'

    tittleTask.innerText = task.tittle;
    tittleDescription.innerText = task.description;

    nuevoElemento.append(tittleTask);
    nuevoElemento.append(tittleDescription);
    nuevoElemento.append(icon);

    listaTareas.append(nuevoElemento);

  });
}

listaTareas.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash')) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
  }
});


