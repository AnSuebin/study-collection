import { useState, useEffect } from 'react'
import styles from './App.module.css'

function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDOs] = useState([])

  const onChange = (event) => {
    setToDo(event.target.value)
    console.log(toDo)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === '') {
      return
    }
    setToDo('')
    setToDOs((currentArray) => [toDo, ...currentArray])
  }
  const CleanToDo = () => {}

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>todos</h1>
      <div className={styles.toDoContainer}>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.inputAndButton}>
            <input
              className={styles.input}
              onChange={onChange}
              value={toDo}
              type="text"
              placeholder="해야할 일을 입력해 주세요"
            ></input>
            <button className={styles.pushBtn}>+</button>
          </div>

          <ul className={styles.todolist}>
            {toDos.map((toDos, index) => (
              <li value={index} key={index}>
                <div className={styles.checkbox}></div>
                {toDos}
                <button
                  onClick={CleanToDo}
                  key={index}
                  className={styles.todoCleanBtn}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </form>
        <div className={styles.footer}>
          <h3 className={styles.itemsLeft}>{toDos.length} items left</h3>
          <div className={styles.buttonContainer}>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <button className={styles.buttonClear}>Clear Completed</button>
        </div>
      </div>
    </div>
  )
}

export default App
