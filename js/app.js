const todoItem = document.getElementById('todo-item')
const addButton = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')

addButton.addEventListener('click', event => {
  const li = document.createElement('li')
  li.textContent = todoItem.value
  todoList.appendChild(li)
  todoItem.value = ''
})