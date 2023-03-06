import axios from './../../api/axios'
import { useEffect, useState } from 'react'
import { requests } from '../../api/requests'
import { Button } from './../../ui/Button/Button'
import styles from './PopularCard.module.scss'
import { Link } from 'react-router-dom'

export const PopularCard = () => {
  const [popularMovie, setPopularMovie] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTrending)
      setPopularMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)],
      )
      setLoading(true)
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
          }}>
          <div className={styles.card__header}>
            <h1 className={styles.card__header_logo}>Streaming Service</h1>
            <Link to="/profile" className={styles.card__header_user}>
              <svg
                enableBackground="new 0 0 50 50"
                height="50px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 50 50"
                width="50px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect height="50" width="50" />
                <path
                  d="M30.933,32.528  c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21C19.367,37.238,7.546,35.916,7,45h38  C44.455,35.916,32.685,37.238,30.933,32.528z"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </div>
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
            <p className={styles.card__content_text}>{popularMovie?.overview}</p>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  )
}
