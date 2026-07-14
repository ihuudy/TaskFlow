console.log("TaskFlow iniciado!");

const button = document.querySelector(".btn");
const addTask = document.querySelector("#add_tarefa");

button.addEventListener("click", function novaTarefa() {
    console.log("tarefa adicionada");
    event.preventDefault();
});

console.log(button);
console.log(addTask);