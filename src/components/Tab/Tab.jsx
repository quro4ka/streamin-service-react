import { useState } from 'react'
import cn from 'classnames'
import styles from './Tab.module.scss'

export const Tab = ({ title, text, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  let openStyle = isOpen ? { marginBottom: 2 } : {}

  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log(index)
  }

  return (
    <>
      <li onClick={handleClick} className={styles.item} style={openStyle}>
        <h2 className={styles.item__text}>{title}</h2>
        <svg
          className={cn(styles.item__icon, 'active')}
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <g>
            <path d="M384,265H264v119h-17V265H128v-17h119V128h17v120h120V265z" />
          </g>
        </svg>
      </li>

      <div className={cn(styles.drop, isOpen ? styles.drop_active : '')}>
        <span>{text}</span>
      </div>
    </>
  )
}
