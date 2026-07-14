const buttonAdd = document.querySelector(".btn_add");
const addTask = document.querySelector("#add_tarefa");
const taskList = document.querySelector(".list_tarefas");

buttonAdd.addEventListener("click", function novaTarefa(event) {
    event.preventDefault();
    const tarefa = addTask.value.trim();
    if (!tarefa) {
        console.log("Digite uma tarefa!");
    } else {
        const article = document.createElement("article");
        const label = document.createElement("label")
        const checkbox = document.createElement("input")

        article.classList.add("cards");
        label.textContent = tarefa;
        checkbox.type = "checkbox";

        article.appendChild(checkbox);
        article.appendChild(label);
        taskList.appendChild(article);
        console.log(article);
        
    }
});