document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.getElementById("addTaskButton");

    addTaskButton.addEventListener("click", () => {
        const title = document.getElementById("taskTitle").value.trim();
        let description = document.getElementById("taskDescription").value.trim();
        if (description === "") {
            description = null;
        }
        if (title) {
            const newTask = {
                title: title,
                description: description
            };
            fetch("http://localhost:8080/tasks", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newTask)
            })
                .then(res => res.json())
                .then(data => {
                    document.getElementById("taskTitle").value = "";
                    document.getElementById("taskDescription").value = "";

                    addTaskToList(data);
                })
        } else {
            alert("Por favor, preencha o título da sua tarefa.");
        }
    });

    function addTaskToList(task) {
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
        `;
        taskList.appendChild(taskItem);
    }
});