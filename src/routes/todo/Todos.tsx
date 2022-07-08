import styles from './Todos.module.scss'

const Todos = () => {
  return (
    <li className={styles.todo}>
      <button type='button' aria-label='check' />
      <p>밥 먹기</p>
    </li>
  )
}

export default Todos
