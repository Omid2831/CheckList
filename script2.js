function addTask() {
  const txt = document.getElementById("txt");
  const taskList = document.getElementById("TaskList");
  if (txt.value == "") {
    alert("Please enter a task..");
    return;
  }
  const li = document.createElement("li");
  li.textContent = txt.value;
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  txt.value = "";
}
