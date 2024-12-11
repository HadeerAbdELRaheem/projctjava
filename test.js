

function addTask() {
    const taskValue = document.getElementById("list").value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = taskValue;
    taskInput.readOnly = true;
    
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.onclick = function () {
         
        taskInput.style.background = "green"; 
    };

  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        taskDiv.remove(); 
    };

 
    taskDiv.appendChild(taskInput);
    taskDiv.appendChild(doneButton);
    taskDiv.appendChild(deleteButton);

   
    const tasksContainer = document.getElementById("tasksContainer");
    tasksContainer.appendChild(taskDiv);

    
    document.getElementById("list").value = "";
}


let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send("");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let res = JSON.parse(xhr.response);
    let tableBody = document.getElementById("res");
    tableBody.innerHTML = "";
    for (let i = 0; i < res.length; i++) {
      let row = document.createElement("tr");

      let titleCell = document.createElement("td");
      titleCell.innerText = res[i]["title"];
      row.appendChild(titleCell);

      let bodyCell = document.createElement("td");
      bodyCell.innerText = res[i]["body"];
      row.appendChild(bodyCell);

      tableBody.appendChild(row);
    }
  }
};



function GetDataBYID() {
    let inp = document.getElementById("databyid").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + inp);
    xhr.send("");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let res = JSON.parse(xhr.response);
        let tableBody = document.getElementById("res1");
        tableBody.innerHTML = "";
        let row = document.createElement("tr");
        let titleCell = document.createElement("td");
        titleCell.innerText = res.title;
        row.appendChild(titleCell);

        let bodyCell = document.createElement("td");
        bodyCell.innerText = res.body;
        row.appendChild(bodyCell);

        tableBody.appendChild(row);
      }
    };
  }


