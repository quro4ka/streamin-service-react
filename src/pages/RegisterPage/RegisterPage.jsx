import { Form } from '../../components/Form/Form'
import styles from './RegisterPage.module.scss'

export const RegisterPage = () => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.register}>
        <div className={styles.register__form}>
          <Form title="sign up" register />
        </div>
      </div>
    </>
  )
}
