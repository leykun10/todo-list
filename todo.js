const todo_input =  document.querySelector('.todo-input') 
const todo_button = document.querySelector('.todo-button') 
const todo_list =   document.querySelector('.todo-list') 
const filteroption =document.querySelector(".filter-todo")

todo_button.addEventListener("click",addTodo)
todo_list.addEventListener("click",deleteCheck)

filteroption.addEventListener("click",filterTodo)
 
function deleteCheck(e){
   const item=e.target

    if(item.classList[0]==="trash-btn"){
        item.parentElement.classList.toggle("flow")
        item.parentElement.addEventListener("transitionend",function(){
            item.parentElement.remove()
        })
    }
    if(item.classList[0]==="complete-btn"){
         item.parentElement.classList.toggle("completed")
        }
}

function addTodo() {
    event.preventDefault()
    const todoDiv=document.createElement("div")
    todoDiv.classList.add("todo")
    //create li
    const newTodo=document.createElement("li")
    newTodo.innerText=todo_input.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    //check mart button
    const completedButton=document.createElement("button")
    completedButton.innerHTML = '<i class= "fa fa-check-circle"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)
    //check trash button
    const trashButton=document.createElement("button")
    trashButton.innerHTML = '<i class= "fa fa-trash"></i>'
   
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton) 
    todo_list.appendChild(todoDiv) 
    todo_input.value=""

}

function filterTodo(e){
    console.log(e.target.value)
    const todos = todo_list.childNodes;
    
    todos.forEach(function(todo1){
        console.log(todo1.classList)
        switch (e.target.value){
          case "all":
              
              break

          case "completed":
            console.log(todo1.classList.contains('completed')) 
              break;
              
        }
    })
}


