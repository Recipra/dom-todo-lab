const form = document.querySelector('form')
const todoItem = document.getElementById('todo-item')
const addButton = document.getElementById('submit-button')
const resetButton = document.getElementById('reset-button')
const todoList = document.getElementById('todo-list')

form.addEventListener('submit', event => {
  event.preventDefault()
})

addButton.addEventListener('click', event => {
  const li = document.createElement('li')
  li.textContent = todoItem.value
  if (todoItem.value.length === 0) return
  else {
    todoList.appendChild(li)
    todoItem.value = ''
  }
})

resetButton.addEventListener('click', function() {
  todoItem.value = ''
  todoList.textContent = ''
})

todoList.addEventListener('click', onClick)

function onClick(event) {
  event.target.hidden = true
  console.log(event)
}
