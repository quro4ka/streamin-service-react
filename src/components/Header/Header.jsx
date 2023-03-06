import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './Header.module.scss'
import { Button } from '../../ui/Button/Button'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [scroll, setScroll] = useState()

  const handleHeader = () => {
    if (window.scrollY > 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleHeader)
  })

  return (
    <div className={cn(styles.header, scroll && styles.header__scroll)}>
      <div className={styles.header__left}>
        <h1 className={styles.header__logo}>
          <Link to="/"> Streaming Service</Link>
        </h1>
        <h1 className={styles.header__logo_adaptive}>Streaming</h1>
      </div>
      <div className={styles.header__right}>
        <Link to="/register">
          <Button mr={20} red width={100}>
            sign up
          </Button>
        </Link>
        <Link to="/login">
          <Button transparent width={100}>
            sign in
          </Button>
        </Link>
      </div>
    </div>
  )
}
