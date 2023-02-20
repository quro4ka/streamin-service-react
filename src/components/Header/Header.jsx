import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './Header.module.scss'
import { Button } from '../../ui/Button/Button'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <h1 className={styles.header__logo}>Streaming Service</h1>
      </div>
      <div className={styles.header__right}>
        <Link to="/register">
          <Button active>sign up</Button>
        </Link>
        <Link to="/login">
          <Button>sign in</Button>
        </Link>
      </div>
    </div>
  )
}
