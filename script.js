let tarefas = [];

const buttonAdd = document.querySelector(".btn_add");
const addTask = document.querySelector("#add_tarefa");
const taskList = document.querySelector(".list_tarefas");
const buttonDelete = document.querySelector(".btn_delete");

buttonAdd.addEventListener("click", novaTarefa);
buttonDelete.addEventListener("click", excluirTarefas);

function novaTarefa(event) {
    event.preventDefault();
    const tarefa = addTask.value.trim();
    if (!tarefa) {
        alert("Digite uma tarefa!");
        addTask.focus();
        return;
    } 
    
    if (tarefa.length > 30) {
        alert(`Limite de 30 caracteres excedido!\nVocê digitou ${tarefa.length} caracteres.`);
        addTask.focus();
        return;
    }

    const novaTarefa = {
        id: Date.now(),
        texto: tarefa,
        concluida: false
    };

    tarefas.push(novaTarefa);

    renderizaTarefas();

    addTask.value = "";
    addTask.focus();
}

function criarCard(tarefa) {

    const article = document.createElement("article");
    const label = document.createElement("label")
    const checkbox = document.createElement("input")

    article.dataset.id = tarefa.id;
    article.classList.add("cards");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.concluida;
    checkbox.dataset.id = tarefa.id;
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

function excluirTarefas(event) {
    event.preventDefault();

    const checkboxesMarcados = document.querySelectorAll("input:checked");

    checkboxesMarcados.forEach(function(checkbox) {
        const id = Number(checkbox.dataset.id);

        tarefas = tarefas.filter(function (tarefa) {
            return tarefa.id !== id;
        });
    });

    renderizaTarefas();
    
}