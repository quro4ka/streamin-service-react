import cn from 'classnames'
import styles from './Button.module.scss'

export const Button = ({ children, mr, red, transparent, width }) => {
  let btnStyles = ''
  if (red) {
    btnStyles = cn(styles.btn, styles.btn_up)
  }

  if (transparent) {
    btnStyles = cn(styles.btn, styles.btn_in)
  }

  return (
    <button style={{ marginRight: mr, width: width }} className={btnStyles}>
      {children}
    </button>
  )
}
