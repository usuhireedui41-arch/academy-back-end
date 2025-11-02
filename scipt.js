class TodoList {
    constructor() { this.tasks = []; }
    addTask(task) { if (task) this.tasks.push(task); }
    removeTask(task) { this.tasks = this.tasks.filter(t => t !== task); }
    showTasks() { return this.tasks.length ? this.tasks.join(", ") : "No tasks"; }
    }

    const todo = new TodoList();

    function addTask() {
    const task = document.getElementById('task').value;
    todo.addTask(task);
    document.getElementById('task').value = "";
    showTasks();
    }

    function removeTask() {
    const task = document.getElementById('task').value;
    todo.removeTask(task);
    document.getElementById('task').value = "";
    showTasks();
    }

    function showTasks() {
    document.getElementById('output').innerText = todo.showTasks();
    }