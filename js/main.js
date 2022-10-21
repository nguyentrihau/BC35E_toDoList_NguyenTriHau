import { TaskList } from "../models/taskList.js";
import { myTask } from "../models/ToDo.js";


let taskList = new TaskList;
let domID = (id) => document.getElementById(id);


domID("addItem").onclick = (e)=>{
    e.preventDefault();
    let newTask = domID("newTask").value;
    if(newTask.trim() == ""){
        alert("Please enter a task to do")
        return;
    };
    let task = new myTask(newTask,"inProgress"); 
    taskList.addTask(task);
    console.log(task.description);
    taskList.renderTaskToDo("todo");
    taskList.luuStorage();
    domID("newTask").value = "";
    // let a = taskList.filterTaskProgress();
    // console.log(a);
}
window.removeTask = (task) => {
    taskList.deleteTask(task);
    console.log(task);
    taskList.renderTaskToDo("todo");
    taskList.renderTaskComplete("completed")
    taskList.luuStorage();
    // taskList.layStorage();
}
window.completeTask = (task) => {
    taskList.addDescription(task);
    taskList.filterTaskProgress(task);
    taskList.filterTaskComp(task);
    taskList.luuStorage();
    taskList.layStorage();
    taskList.renderTaskComplete("completed");
    taskList.renderTaskToDo("todo");

}
window.returnTask = (task) => {
    taskList.addDescriptionDoing(task);
    taskList.filterTaskProgress(task);
    taskList.filterTaskComp(task);
    taskList.luuStorage();
    taskList.layStorage();
    taskList.renderTaskComplete("completed");
    taskList.renderTaskToDo("todo");
}

domID("two").onclick = () => {
    taskList.sortUp();
    taskList.luuStorage();
    taskList.layStorage();
    taskList.renderTaskComplete("completed");
    taskList.renderTaskToDo("todo");
}
domID("three").onclick = () => {
    taskList.sortDown();
    taskList.luuStorage();
    taskList.layStorage();
    taskList.renderTaskComplete("completed");
    taskList.renderTaskToDo("todo");
}

window.onload = function(){
    taskList.layStorage();
    taskList.renderTaskToDo("todo");
    taskList.renderTaskComplete("completed");

}


    
