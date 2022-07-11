import cx from 'classnames'
import { useRecoil } from 'hooks/state'
import { modalClick, menuClick } from 'recoil/todo'

import TodoHeader from './TodoHeader'
import TodoCategory from './TodoCategory'
import TodoList from './TodoList'

import styles from './TodoApp.module.scss'
import Modal from 'components/Modal'
import GNB from 'routes/_shared/GNB/index'

const TodoApp = () => {
  const [modalClicked, setModalClicked] = useRecoil(modalClick)
  const [menuClicked] = useRecoil(menuClick)

  const modalClickHandler = () => {
    setModalClicked((prev) => !prev)
  }

  return (
    <div className={styles.wrap}>
      <TodoHeader />
      <h1 className={styles.title}>What&apos;s up, Rit!</h1>
      <TodoCategory />
      <TodoList />
      <button type='button' className={styles.add} aria-label='add' onClick={modalClickHandler} />
      {modalClicked && <Modal />}
      {menuClicked && <GNB />}
    </div>
  )
}

export default TodoApp
