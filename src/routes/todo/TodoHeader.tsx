import { useRecoil } from 'hooks/state'
import { menuClick } from 'recoil/todo'

import { Menu, Search, Dark } from 'assets/svgs'
import styles from './TodoHeader.module.scss'

const TodoHeader = () => {
  const [, setMenuClicked] = useRecoil(menuClick)

  const menuClickHandler = () => {
    setMenuClicked((prev) => !prev)
  }

  return (
    <header className={styles.wrap}>
      <div className={styles.left}>
        <button type='button' aria-label='menu icon' onClick={menuClickHandler}>
          <Menu className={styles.icon} />
        </button>
      </div>
      <div className={styles.right}>
        <button type='button' aria-label='search icon'>
          <Search className={styles.icon} />
        </button>
        <button type='button' aria-label='dark mode icon'>
          <Dark className={styles.icon} />
        </button>
      </div>
    </header>
  )
}

export default TodoHeader
