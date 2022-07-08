import TodoHeader from './TodoHeader'
import TodoCategory from './TodoCategory'
import TodoList from './TodoList'

import styles from './TodoApp.module.scss'
import GNB from 'routes/_shared/GNB'
import Modal from 'components/Modal'

const TodoApp = () => {
  return (
    <div className={styles.wrap}>
      <GNB />
      <TodoHeader />
      <h1 className={styles.title}>What&apos;s up, Rit!</h1>
      <TodoCategory />
      <TodoList />
      <button type='button' className={styles.add} aria-label='add' />
    </div>
  )
}

export default TodoApp
