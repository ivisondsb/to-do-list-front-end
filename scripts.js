document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.getElementById("addTaskButton");

    addTaskButton.addEventListener("click", () => {
        const title = document.getElementById("taskTitle").value.trim();
        let description = document.getElementById("taskDescription").value.trim();
        if (description === "") {
            description = null;
        }
        if (title) {
            console.log(`Tarefa Adicionada!\n\nTarefa: ${title}\nDescrição: ${description}`);
        } else {
            alert("Por favor, preencha o título da sua tarefa.");
        }
    });
});