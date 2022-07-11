import styles from './TodoList.module.scss'
import Todos from './Todos'

const TodoList = () => {
  return (
    <main className={styles.wrap}>
      <h2 className={styles.title}>TODAY&apos;S TASKS</h2>
      <ul className={styles.todoList}>
        <Todos />
      </ul>
    </main>
  )
}

export default TodoList
