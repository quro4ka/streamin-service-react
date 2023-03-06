import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../ui/Input/Input'
import { Button } from './../../ui/Button/Button'
import styles from './Form.module.scss'
import { auth } from '../../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const Form = ({ title = '', login, register }) => {
  const auth = getAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formHandler = (e) => {
    e.preventDefault()

    if (register) {
      console.log('register')
      console.log({
        email,
        password,
      })

      createUserWithEmailAndPassword(auth, email, password)
        .then((authUser) => console.log(authUser))
        .catch((err) => alert(err.message))
    }

    if (login) {
      console.log('login')
      console.log({
        email,
        password,
      })

      signInWithEmailAndPassword(auth, email, password)
        .then((authUser) => console.log(authUser))
        .catch((err) => alert(err))
    }
  }

  return (
    <form onSubmit={formHandler} className={styles.form}>
      <Link to="/start">
        <svg className={styles.form__back} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title />
          <g data-name="Layer 2" id="Layer_2">
            <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z" />
          </g>
        </svg>
      </Link>
      <h2 className={styles.form__title}>{title}</h2>
      <div className={styles.form__field}>
        <Input email={email} setEmail={setEmail} isEmail required title="Email or phone number" />
        <Input password={password} setPassword={setPassword} isPassword required title="Password" />
        {/* {register && <Input password required title="Repeat Password" />} */}
      </div>
      <div className={styles.form__btns}>
        <Button red>{title}</Button>
      </div>
      {login ? (
        <div className={styles.other}>
          <Link className={styles.other__title} to="/register">
            Sign up now
          </Link>
        </div>
      ) : (
        <div className={styles.other}>
          <Link className={styles.other__title} to="/login">
            Sign in now
          </Link>
        </div>
      )}
    </form>
  )
}
