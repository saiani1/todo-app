import styles from './TodoCategory.module.scss'

const TodoCategory = () => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>CATEGORIES</h2>
      <div className={styles.cateWrap}>
        <div className={styles.category}>
          <p className={styles.cateLeng}>40 tasks</p>
          <h3 className={styles.cateTit}>Business</h3>
          <div className={styles.cateBar} />
        </div>
      </div>
    </div>
  )
}

export default TodoCategory
