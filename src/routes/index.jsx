import styles from './routes.module.scss'

import TodoApp from './todo/index'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <TodoApp />
    </div>
  )
}

export default App
