import { useState } from 'react'
import styles from './Input.module.scss'

export const Input = ({
  title = '',
  email,
  setEmail,
  password,
  setPassword,
  isEmail,
  isPassword,
  required,
}) => {
  const [blur, setBlur] = useState(false)

  const handleChange = (e) => {
    if (isEmail) {
      setEmail(e.target.value)
      // console.log(e.target.value)
    }
    if (isPassword) {
      setPassword(e.target.value)
      // console.log(e.target.value)
    }
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
        value={isEmail ? email : password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <p style={{ color: 'orange' }}>
        {blur && isPassword && password.length < 6 ? 'Пароль меньше 6 символов' : ''}
      </p>
      <p style={{ color: 'orange' }}>
        {blur && isEmail && email.length < 6 ? 'Неверный email' : ''}
      </p>
    </>
  )
}
