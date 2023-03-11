import styles from './MoviePage.module.scss'
import { Header } from './../../components/Header/Header'
import img from './../../assets/poster-3.jpg'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from './../../api/axios'
import { truncateText } from '../../utils/truncateText'
import { API_KEY } from '../../api/requests'

export const MoviePage = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [windowInnerWith, setWindowInnerWith] = useState(null)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        console.log(`/movie/${id}?api_key=${API_KEY}`)
        const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`)
        setMovie(response.data)
        console.log(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log('Ошибка получения Movie page')
      }
    }

    fetchMovie()
  }, [])

  useEffect(() => {
    setWindowInnerWith(window.innerWidth)
    console.log(windowInnerWith)
  }, [windowInnerWith, window])

  // console.log(movie.backdrop_path, movie.poster_path)

  return (
    <>
      <Header />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.main}>
          <div className={styles.wrapper}>
            <div className={styles.movie}>
              <div className={styles.movie__left}>
                <img
                  className={styles.movie__img}
                  src={`https://image.tmdb.org/t/p/original/${
                    windowInnerWith < 600
                      ? movie.poster_path || movie.backdrop_path
                      : movie.backdrop_path || movie.poster_path
                  }`}
                  alt={'Movie img'}
                />
              </div>
              <div className={styles.movie__right}>
                <h1 className={styles.movie__title}>{movie.title || 'no name'}</h1>
                <p className={styles.movie__date}>{movie.release_date}</p>
                <div className={styles.movie__country}>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87c-34.63 0-77.87 8.003-137.2 32.05V24C48 10.75 37.25 0 24 0S0 10.75 0 24v464C0 501.3 10.75 512 24 512s24-10.75 24-24v-104c53.59-23.86 96.02-31.81 132.8-31.81c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0zM464 319.8c-30.31 10.82-58.08 16.1-84.6 16.1c-30.8 0-58.31-7-87.44-14.41c-32.01-8.141-68.29-17.37-111.1-17.37c-42.35 0-85.99 9.09-132.8 27.73V84.14l18.03-7.301c47.39-19.2 86.38-28.54 119.2-28.54c28.24 .0039 49.12 6.711 73.31 14.48c25.38 8.148 54.13 17.39 90.58 17.39c35.43 0 72.24-8.496 114.9-26.61V319.8z" />
                  </svg>
                  <p>{movie.country || 'no country'}</p>
                </div>
                <div className={styles.movie__lang}>
                  <svg id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.342.317A2.983,2.983,0,0,0,14.2.6L5.667,7H4a3,3,0,0,0-3,3v4a3,3,0,0,0,3,3H5.667L14.2,23.4A3,3,0,0,0,19,21V16a4,4,0,0,0,0-8V3A2.984,2.984,0,0,0,17.342.317ZM3,14V10A1,1,0,0,1,4,9H5v6H4A1,1,0,0,1,3,14Zm14,7a1,1,0,0,1-1.6.8L7,15.5v-7l8.4-6.3A1,1,0,0,1,17,3V21Zm4-9a2,2,0,0,1-2,2V10A2,2,0,0,1,21,12Z" />
                  </svg>
                  <p>{movie.original_language}</p>
                </div>
                <div className={styles.movie__desc}>
                  <p>{truncateText(movie.overview, 500)}</p>
                </div>
                <div className={styles.movie__rate}>
                  <div className={styles.movie__rate_value}>{movie.popularity || '-'}</div>
                  <div className={styles.movie__rate_evaluate}>Оценить</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
