// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/free-mode'
// import 'swiper/css/pagination'

import { Link } from 'react-router-dom'
import styles from './MovieCard.module.scss'

export const MovieCard = ({ movie }) => {
  console.log(movie)
  return (
    <Link to={`movie/${movie?.id}`}>
      <div className={styles.card__img}>
        <img
          className={styles.card__img}
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path || movie?.backdrop_path}`}
          alt="movie"
        />
      </div>
    </Link>
  )
}
