let inp_val=document.getElementById("taskInput")
let addTask=document.getElementById("addTaskButton")
let taskList=document.getElementById("taskList")

addTask.onclick = function(){

  let li = document.createElement("li")
  let chekbox=document.createElement("input")

  chekbox.type="checkbox"
  chekbox.setAttribute("id","check")
  li.innerHTML = inp_val.value
  li.setAttribute("for" , "check")
  console.log(li);
  
  if(inp_val.value==""){
    alert("please enter a task")
    return false;
  }
  taskList.appendChild(li)
  li.appendChild(chekbox)
  inp_val.value = ""
}