import cn from 'classnames'

import styles from './StoryCard.module.scss'
import storyCard1 from './../../assets/story_card_1.png'

export const StoryCard = ({ title = '', text = '', img = '', index }) => {
  const cardStyle = cn(styles.card, index % 2 === 0 ? '' : styles.card__reverse)
  return (
    <div className={styles.wrapper}>
      <div className={cardStyle}>
        <div className={styles.card__content}>
          <h1 className={styles.card__content_title}>{title}.</h1>
          <p className={styles.card__content_text}>{text}.</p>
        </div>
        <div className={styles.card__img}>
          <img className={styles.img} src={img} alt="storyCard1" />
        </div>
      </div>
    </div>
  )
}
