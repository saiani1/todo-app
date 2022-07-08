import { Xmark, Calendar, Folder, Flag, Dark, UpArrow } from 'assets/svgs'
import styles from './Modal.module.scss'

const Modal = () => {
  return (
    <form className={styles.modalWrap}>
      <div className={styles.closeBtnWrap}>
        <button type='button' className={styles.closeBtn} aria-label='close'>
          <Xmark className={styles.icon} />
        </button>
      </div>
      <input type='text' placeholder='Enter new task' />
      <div className={styles.essentialBtnWrap}>
        <div className={styles.calendarBtn}>
          <Calendar className={styles.icon} />
          <input type='date' data-placeholder='Today' />
        </div>
        <input type='radio' />
      </div>
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
        <li>
          <button type='button' aria-label='folder'>
            <Dark className={styles.icon} />
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
