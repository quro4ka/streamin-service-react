import cn from 'classnames'

import { Link } from 'react-router-dom'
import styles from './MovieCard.module.scss'
import { useEffect, useRef, useState } from 'react'

export const MovieCard = ({ movie }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef(null)

  const onLoadedImage = () => {
    setIsLoaded(true)
  }

  useEffect(() => {
    imageRef?.current?.addEventListener('load', onLoadedImage)
  }, [])

  return (
    <Link to={`movie/${movie?.id}`}>
      <div className={styles.card}>
        <img
          ref={imageRef}
          className={isLoaded ? cn(styles.card__img, styles.card__imgLoaded) : styles.card__img}
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path || movie?.backdrop_path}`}
          alt="movie"
        />
      </div>
    </Link>
  )
}
