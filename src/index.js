document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const task = document.getElementById('new-task-description');
  const form = document.getElementById('create-task-form');
  const list = document.getElementById('tasks')

  function logSubmit(event) { 
    event.preventDefault();
    let li = document.createElement("li");
    tasks.appendChild(li);
    li.innerHTML = task.value; 
    form.reset();
  }

  form.addEventListener('submit', logSubmit);
});
