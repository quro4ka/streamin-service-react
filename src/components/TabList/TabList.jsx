import { Tab } from '../Tab/Tab'
import { dataTabs } from './dataTabs'
import styles from './TabList.module.scss'

export const TabList = () => {
  return (
    <ul className={styles.list}>
      <h1 className={styles.list__title}>Frequently Asked Questions</h1>

      {dataTabs.map((tab, index) => (
        <Tab key={index} index={index} {...tab} />
      ))}
    </ul>
  )
}
