import { useRef } from 'react'

import { useRecoil } from 'hooks/state'
import { modalClick, todoContentValue } from 'recoil/todo'

import { Xmark, Calendar, Folder, Flag, UpArrow } from 'assets/svgs'
import styles from './Modal.module.scss'

const Modal = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [, setModalClicked] = useRecoil(modalClick)
  const [, setTodoContent] = useRecoil(todoContentValue)

  const modalCloseHandler = () => {
    setModalClicked((prev) => !prev)
  }

  const modalSubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const enteredValue = inputRef.current?.value
    if (enteredValue !== undefined) setTodoContent(enteredValue)
    setModalClicked(false)
  }

  return (
    <form className={styles.modalWrap} onSubmit={modalSubmitHandler} noValidate>
      <div className={styles.closeBtnWrap}>
        <button type='button' className={styles.closeBtn} aria-label='close' onClick={modalCloseHandler}>
          <Xmark className={styles.icon} />
        </button>
      </div>
      <input type='text' placeholder='Enter new task' ref={inputRef} />
      <button type='button' className={styles.calendarBtn}>
        <Calendar className={styles.icon} />
        <input type='date' data-placeholder='Today' required />
      </button>
      <ul className={styles.optionBtnWrap}>
        <li>
          <button type='button' aria-label='folder'>
            <Folder className={styles.icon} />
          </button>
        </li>
        <li>
          <button type='button' aria-label='folder'>
            <Flag className={styles.icon} />
          </button>
        </li>
      </ul>
      <div className={styles.btnWrap}>
        <button type='submit' className={styles.submitBtn}>
          New task
          <UpArrow className={styles.icon} />
        </button>
      </div>
    </form>
  )
}

export default Modal
