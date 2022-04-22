/* Create a function to assign the task */
//document.getElementById('data').autofocus;
function Task(name){
    this.taskName = name;
    /* this.markComplete = function() {
        console.log(`${this.taskName} is Completed`);
    } */
}

/* create a const array to push all the object value in it */
const taskList = [];

/* function is created to fetch the data from the user and
store it in a variable and then push it in an array */
function taskAdd(){
    const taskValue = document.querySelector('#data').value;
    const task = new Task(taskValue);
    taskList.push(task);
     //console.dir(Task(taskList))
    const olEl = document.querySelector('#list');
     // console.log(olEl);
    var closebtn = document.createTextNode("\u00D7");
    olEl.append(createListItem(taskValue));
    //olEl.append(closebtn);
    console.log(closebtn);
    //console.log(taskList);
    document.querySelector('#data').value="";
}
    
/* This functon is used to create a liste and to link the 
remove function and enter function */
function createListItem(value){
    const item = document.createElement('li');
    item.innerText = value;
    const iconEl = document.createElement('span');
    //item.addEventListener('click',remove);
    iconEl.innerHTML = "&#x2715;"
    item.addEventListener('click',enterKeyPressed);
    iconEl.addEventListener('click',remove);
    item.append(iconEl);
    return item;
}


/* This function is used to remove the data from the list */
function remove(value){
    console.log('item click',value);
    const olEl = document.querySelector('#list');
    const index = [...olEl.children].findIndex(function(item){
        //console.log(item.textContent);
        //console.log(value.target.textContent);
        return item.textContent === value.target.textContent;
    });
    olEl.removeChild(value.target);
    console.log("olel"+olEl)
    taskList.splice(index,1);
    console.log(taskList);
}


/* This function is used, when we use enter key it will consider done */
function enterKeyPressed(event){
    if (event.keyCode == 13) {
        console.log("Enter key is pressed");
        taskAdd();
        return true;
     } else {
        return false;
     }

    //console.dir(enterKeyPressed)
}

