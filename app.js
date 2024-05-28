


function addToList (event) {
event.preventDefault();
let inputTask = document.querySelector(".input-text-element");

let toDoList = document.querySelector(".to-do-list");
let cardElement = document.createElement('div');
cardElement.classList.add('card')

toDoList.appendChild(cardElement)

let cardContents = document.createElement('div');
cardContents.classList.add('p-2', 'd-flex', 'justify-content-between');
cardElement.appendChild(cardContents);

let newTask = document.createElement('div');
newTask.innerHTML = `◦ ${inputTask.value}`
cardContents.appendChild(newTask);

let taskIcons = document.createElement('div');
taskIcons.classList.add('task-icons')
cardContents.appendChild(taskIcons)

let tickButton = document.createElement('button');
taskIcons.appendChild(tickButton)

let tickIcon = document.createElement('i');
tickIcon.classList.add('fa-solid', 'fa-check');
tickButton.appendChild(tickIcon);

let deleteButton = document.createElement('button')
taskIcons.appendChild(deleteButton);

let deleteIcon = document.createElement('i');
deleteIcon.classList.add('fa-solid', 'fa-trash');
deleteButton.appendChild(deleteIcon)


}




let form = document.querySelector(".form");
form.addEventListener( "submit", addToList);

