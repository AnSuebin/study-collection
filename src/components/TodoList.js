import React from 'react'
import TodoListItems from './TodoListItem'
import './TodoList.css'

const TodoList = () => {
  return (
    <div className="TodoList">
      <TodoListItems />
      <TodoListItems />
      <TodoListItems />
    </div>
  )
}

export default TodoList
