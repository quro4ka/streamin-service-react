import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Poster } from '../../components/Poster/Poster'
import { StoryCard } from '../../components/StoryCard/StoryCard'
import { StoryCardList } from '../../components/StoryCardList/StoryCardList'
import { TabList } from '../../components/TabList/TabList'
import styles from './StartPage.module.scss'

export const StartPage = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Poster />
      <StoryCardList />
      <TabList />
      <Footer />
    </div>
  )
}
