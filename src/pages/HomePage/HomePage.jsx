import { requests } from '../../api/requests'
import { PopularCard } from './../../components/PopularСard/PopularCard'
import { MovieCardList } from '../../components/MovieCardList/MovieCardList'
import { Popup } from '../../components/Popup/Popup'
import { useSelector } from 'react-redux'
import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <div>
      <PopularCard />
      <MovieCardList title="Netflix Originals" fetchUrl={requests.fetchTrending} />
      <MovieCardList title="Trending" fetchUrl={requests.fetchNetflixOriginals} />
      <MovieCardList title="Kids Popular" fetchUrl={requests.fetchKidsPopular} />
    </div>
  )
}
