import axios from './../../api/axios'
import { useEffect, useState, useRef } from 'react'
import { requests } from '../../api/requests'
import { Button } from './../../ui/Button/Button'
import { Header } from './../Header/Header'
import { Link } from 'react-router-dom'
import { PopularCardLoader } from './PopularCardSkeleton'
import { truncateText } from '../../utils/truncateText'
import styles from './PopularCard.module.scss'
import { useSelector } from 'react-redux'

export const PopularCard = () => {
  const [popularMovie, setPopularMovie] = useState([])
  const [loading, setLoading] = useState(false)
  const { email } = useSelector((state) => state.user.user)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false)
        const request = await axios.get(requests.fetchTrending)
        setPopularMovie(
          request.data?.results[Math.floor(Math.random() * request.data.results.length - 1)],
        )
        setLoading(true)
      } catch (error) {
        console.log('error')
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {loading ? (
        <div
          className={styles.card}
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${popularMovie?.backdrop_path}')`,
            opacity: 1,
          }}>
          {email && <Header />}
          <div className={styles.card__content}>
            <h1 className={styles.card__content_title}>
              {popularMovie?.name || popularMovie?.title || popularMovie?.original_name}
            </h1>
            <div className={styles.card__content_btns}>
              <Button red mr={20} width={100}>
                Play
              </Button>
              <Button red width={100}>
                My list
              </Button>
            </div>
            <p className={styles.card__content_text}>{truncateText(popularMovie?.overview, 150)}</p>
          </div>
        </div>
      ) : (
        <div className={styles.card}>
          <PopularCardLoader />
        </div>
      )}
    </>
  )
}
