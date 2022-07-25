import React from 'react'
import { GrAddCircle } from 'react-icons/gr'
import './TodoInsert.css'

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할일을 입력하세요" />
      <button type="submit">
        <GrAddCircle />
      </button>
    </form>
  )
}

export default TodoInsert
