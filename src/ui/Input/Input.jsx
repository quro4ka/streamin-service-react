import { useState } from 'react'
import styles from './Input.module.scss'

export const Input = ({ title = '', email, password, required }) => {
  const [value, setValue] = useState('')
  const [blur, setBlur] = useState(false)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleBlur = (e) => {
    setBlur(!blur)
  }

  return (
    <>
      <input
        className={styles.input}
        type="text"
        required={required}
        placeholder={title}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p style={{ color: 'orange' }}>
        {blur && password && value.length < 6 ? 'Пароль меньше 6 символов' : ''}
      </p>
      <p style={{ color: 'orange' }}>{blur && email && value.length < 6 ? 'Неверный email' : ''}</p>
    </>
  )
}
