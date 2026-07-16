const tarefas = [];

const buttonAdd = document.querySelector(".btn_add");
const addTask = document.querySelector("#add_tarefa");
const taskList = document.querySelector(".list_tarefas");

buttonAdd.addEventListener("click", novaTarefa);

function novaTarefa(event) {
    event.preventDefault();
    const tarefa = addTask.value.trim();
    if (!tarefa) {
        console.log("Digite uma tarefa!");
        return;
    }

    const novaTarefa = {
        id: Date.now(),
        texto: tarefa,
        concluida: false
    };

    tarefas.push(novaTarefa);

    criarCard(novaTarefa);

    addTask.value = "";
    addTask.focus();
}

function criarCard(tarefa) {

    const article = document.createElement("article");
    const label = document.createElement("label")
    const checkbox = document.createElement("input")

    article.database.id = tarefa.id;
    article.classList.add("cards");
    checkbox.type = "checkbox";
    checkbox.database.id = tarefa.id;
    label.textContent = tarefa.texto;

    article.appendChild(checkbox);
    article.appendChild(label);

    taskList.appendChild(article);
}

function renderizaTarefas() {

    taskList.innerHTML = "";

    tarefas.forEach(function (tarefa) {
        criarCard(tarefa);
    });
}