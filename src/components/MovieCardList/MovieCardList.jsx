import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { useEffect, useState } from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import { dataMovie } from './dataMovie'
import styles from './MovieCardList.module.scss'
import axios from './../../api/axios'
import { breakPoints } from './breakpoints'

export const MovieCardList = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        slidesPerView={9}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakPoints}
        modules={[FreeMode, Pagination]}
        className={styles.list}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          movies?.map((movie, index) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  )
}
