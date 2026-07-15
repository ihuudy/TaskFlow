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

    criarCard(tarefa);
    tarefas.push(tarefa);
}

function criarCard(tarefa) {

        const article = document.createElement("article");
        const label = document.createElement("label")
        const checkbox = document.createElement("input")

        article.classList.add("cards");
        checkbox.type = "checkbox";
        label.textContent = tarefa;

        article.appendChild(checkbox);
        article.appendChild(label);

        taskList.appendChild(article);

        addTask.value = "";
        addTask.focus();
        console.log(tarefas);

}