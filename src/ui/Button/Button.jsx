import cn from 'classnames'
import styles from './Button.module.scss'

export const Button = ({ children, active, width }) => {
  const widthStyle = width ? { width: '100%' } : {}
  return (
    <button style={widthStyle} className={cn(styles.btn, active ? styles.btn_up : styles.btn_in)}>
      {children}
    </button>
  )
}
