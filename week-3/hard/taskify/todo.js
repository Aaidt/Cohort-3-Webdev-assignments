function deleteTask(index){
    const element = document.querySelector("#task-" + index); 
    element.parentNode.removeChild(element);
}

let ctr = 1;
function addTask(){
    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", "task-" + ctr);
    const content = document.getElementById("input").value;
    newDivEl.innerHTML = "<div>" +content+ "</div><button onclick = 'deleteList("+ctr+")'>Delete</button> "
    ctr += 1;
    document.getElementById("list").appendChild(newDivEl);
}

function deleteList(asd){
    const item = document.getElementById(asd);
    item.parentNode.removeChild(item);
}
