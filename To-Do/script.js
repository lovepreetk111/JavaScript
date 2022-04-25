const inputBox = document.getElementById('inputBox')

inputBox.addEventListener('keydown', (event) => {
    if (event.code === 'Enter')
        addTask();
})
//console.dir(inputBox)

function Task(value) {
    this.taskName = value;
}

function addTask() {
    const inputValue = inputBox.value;
    const unorderListEL = document.getElementById('list');
    unorderListEL.append(createListItem(inputValue));
    inputBox.value = "";
}

function createListItem(value){
    const item = document.createElement('li');
    item.innerText = value;
    const span = document.createElement('span');
    span.innerHTML = '&times;';
    span.onclick = removeListItem
    item.append(span);
    return item;
}

function removeListItem(event){
    const unorderListEL = document.getElementById('list')
    unorderListEL.removeChild(event.target.parentNode);
}
