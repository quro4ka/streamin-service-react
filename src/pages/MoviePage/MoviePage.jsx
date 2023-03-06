import styles from './MoviePage.module.scss'
import { Header } from './../../components/Header/Header'
import img from './../../assets/poster-3.jpg'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from './../../api/axios'
import { API_KEY } from '../../api/requests'

export const MoviePage = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      console.log(`/movie/${id}?api_key=${API_KEY}`)
      const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`)
      setMovie(response.data)
      console.log(response.data)
      setIsLoading(false)
    }

    fetchMovie()
  }, [])

  return (
    <>
      <Header />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.movie}>
            <div className={styles.movie__left}>
              <img
                className={styles.movie__img}
                src={`https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                }`}
                alt={img}
              />
            </div>
            <div className={styles.movie__right}>
              <h1 className={styles.movie__title}>{movie.title || 'no name'}</h1>
              <p className={styles.movie__date}>{movie.release_date}</p>
              <p className={styles.movie__country}>{movie.country || 'no country'}</p>
              <p className={styles.movie__lang}>{movie.original_language}</p>
              <p className={styles.movie__desc}>{movie.overview}</p>
              <div className={styles.movie__rate}>8.8</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
