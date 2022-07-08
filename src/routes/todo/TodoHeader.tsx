import { Menu, Search, Alert } from 'assets/svgs'
import styles from './TodoHeader.module.scss'

const TodoHeader = () => {
  return (
    <header className={styles.wrap}>
      <div className={styles.left}>
        <button type='button' aria-label='menu-icon'>
          <Menu className={styles.icon} />
        </button>
      </div>
      <div className={styles.right}>
        <button type='button' aria-label='search-icon'>
          <Search className={styles.icon} />
        </button>
        <button type='button' aria-label='alert-icon'>
          <Alert className={styles.icon} />
        </button>
      </div>
    </header>
  )
}

export default TodoHeader
