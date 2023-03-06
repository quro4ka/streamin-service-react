import { useEffect, useState } from 'react'
import { requests } from '../../api/requests'
import styles from './HomePage.module.scss'
import { useNavigate } from 'react-router-dom'
import { PopularCard } from './../../components/PopularСard/PopularCard'
import { MovieCardList } from '../../components/MovieCardList/MovieCardList'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const HomePage = () => {
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()

  return (
    <div>
      <PopularCard />
      <MovieCardList title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <MovieCardList title="Trending" fetchUrl={requests.fetchTrending} />
    </div>
  )
}
