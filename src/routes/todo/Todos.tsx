import { useState } from 'react'

import styles from './Todos.module.scss'
import { Check, Modify, Delete } from 'assets/svgs'

const Todos = () => {
  const [editClicked, setEditClicked] = useState(false)

  const editBtnClickHandler = () => {
    setEditClicked((prev) => !prev)
  }

  return (
    <li className={styles.todo}>
      <div className={styles.left}>
        <input type='checkbox' id='check' />
        <label htmlFor='check'>
          <Check className={styles.check} />
        </label>
        <p>밖에 나가서 만보를 걷는다</p>
      </div>
      {editClicked ? (
        <div className={styles.activeEdit}>
          <button type='button'>
            <Modify className={styles.icon} />
          </button>
          <button type='button'>
            <Delete className={styles.icon} />
          </button>
          <button type='button' className={styles.cancelBtn} onClick={editBtnClickHandler}>
            CANCEL
          </button>
        </div>
      ) : (
        <button type='button' className={styles.editBtn} onClick={editBtnClickHandler}>
          EDIT
        </button>
      )}
    </li>
  )
}

export default Todos
