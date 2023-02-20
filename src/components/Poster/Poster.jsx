import styles from './Poster.module.scss'

export const Poster = () => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.poster}>
        <div className={styles.content}>
          <h1 className={styles.content__title}>Unlimited films, TV programmes and more.</h1>
          <p className={styles.content__text}>Watch anywhere. Cancel at any time.</p>
        </div>
      </div>
    </>
  )
}
