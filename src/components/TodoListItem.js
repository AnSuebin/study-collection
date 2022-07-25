import React from 'react'
import { VscChromeMaximize } from 'react-icons/vsc'
import { BsXLg } from 'react-icons/bs'
import './TodoListItem.css'

const TodoListItems = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <VscChromeMaximize />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <BsXLg />
      </div>
    </div>
  )
}
export default TodoListItems
