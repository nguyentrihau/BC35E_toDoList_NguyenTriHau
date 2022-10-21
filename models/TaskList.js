export class TaskList {
    arrToDo = [];

    //them cong viec
    addTask(task) {
        this.arrToDo.push(task);
    };
    //luu va xuat storage
    luuStorage() {
        let sArrToDo = JSON.stringify(this.arrToDo);
        localStorage.setItem('ArrToDo', sArrToDo);
    };
    layStorage() {
        if (localStorage.getItem('ArrToDo')) {
            this.arrToDo = JSON.parse(localStorage.getItem('ArrToDo'))
        }
    };
    //inProgress
    //loc cong viec dang lam
    filterTaskProgress() {
        return this.arrToDo.filter((task) => {
            if (task.description === "inProgress") {
                return true;
            };
            return false;
        });
    };
    //lay du lieu in ra man hinh
    renderTaskToDo(id) {
        let html = this.filterTaskProgress().reduce((content, prod) => {
            return content += `
            <li class="d-flex">
                <p>${prod.id}</p>
                <div class="buttons">
                    <span class="far fa-trash-alt remove" onclick="removeTask('${prod.id}')"></span>
                    <span class="fas fa-check-circle complete" onclick="completeTask('${prod.id}')"></span>
                </div>
            </li>   
        `
        }, "")
        document.getElementById(id).innerHTML = html;
    }
    //tim vi tri va xoa
    timIndex(task) {
        let index = -1;
        this.arrToDo.forEach((prod, i) => {
            if (prod.id === task) {
                index = i;
            }
        });
        return index;    
    };
    deleteTask(task){
        let index = this.timIndex(task);
        console.log(index);
        if (index !== -1) {
            this.arrToDo.splice(index, 1);
        };
    }
    // deleteTask(task){
    //     let index = this.arrToDo.findIndex(prod => prod.id === task);
    //     this.arrToDo.splice(index,1);
    // }

    //complete
    //them trang thai khi bam vao icon danh dau
    addDescriptionDoing(task) {
        this.arrToDo.forEach((prod) => {
            if (prod.id === task) {
                prod.description = "inProgress";
            }
        })
    };
    addDescription(task) {
        this.arrToDo.forEach((prod) => {
            if (prod.id === task) {
                prod.description = "complete";
            }
        })
    };
    //loc trang thai complete
    filterTaskComp() {
        return this.arrToDo.filter((task) => {
            if (task.description === "complete") {
                return true;
            };
            return false;
        });
    };
    //lay du lieu in ra man hinh
    renderTaskComplete(id) {
        let html = this.filterTaskComp().reduce((content, prod) => {
            content += `
            <li class="d-flex">
                <p>${prod.id}</p>
                <div class="buttons">
                    <span class="far fa-trash-alt remove" onclick="removeTask('${prod.id}')"></span>
                    <span class="fas fa-check-circle complete" style="color:blue;" onclick="returnTask('${prod.id}')"></span>
                </div>
            </li>   
        `
            return content;
        }, "");
        document.getElementById(id).innerHTML = html;
    }

    sortUp() {
        this.arrToDo.sort((task1, task2) => {
        return task1.id - task2.id;
        });
    }

    sortDown() {
        this.sortUp();
        this.arrToDo.reverse();
    }
};
