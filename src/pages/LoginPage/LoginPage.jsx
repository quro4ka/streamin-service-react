import { Form } from '../../components/Form/Form'
import styles from './LoginPage.module.scss'

export const LoginPage = () => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.login}>
        <div className={styles.login__form}>
          <Form title="sign in" login />
        </div>
      </div>
    </>
  )
}
