import { useRecoil } from 'hooks/state'
import { menuClick } from 'recoil/todo'

import { LeftArrow, Templates, Category, Analytics, Setting } from 'assets/svgs'
import styles from './gnb.module.scss'

const GNB = () => {
  const [, setMenuClicked] = useRecoil(menuClick)

  const menuCloseHandler = () => {
    setMenuClicked((prev) => !prev)
  }

  return (
    <nav className={styles.wrap}>
      <button type='button' className={styles.closeBtn} aria-label='close' onClick={menuCloseHandler}>
        <LeftArrow className={styles.icon} />
      </button>
      <div className={styles.profileWrap} />
      <h2 className={styles.title}>
        Rit <br />
        Choi
      </h2>
      <ul className={styles.navWrap}>
        <li>
          <button type='button'>
            <Templates className={styles.icon} />
            Templates
          </button>
        </li>
        <li>
          <button type='button'>
            <Category className={styles.icon} />
            Categories
          </button>
        </li>
        <li>
          <button type='button'>
            <Analytics className={styles.icon} />
            Analytics
          </button>
        </li>
        <li>
          <button type='button'>
            <Setting className={styles.icon} />
            Setting
          </button>
        </li>
      </ul>
      <p className={styles.copyright}>
        <span>Good</span>
        <br />
        Consistency
      </p>
    </nav>
  )
}

export default GNB
