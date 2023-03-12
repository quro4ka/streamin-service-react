import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { useEffect, useState } from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import styles from './MovieCardList.module.scss'
import { breakPoints } from './breakpoints'
import axios from './../../api/axios'
import { CardLoader } from '../MovieCard/MovieCardSkeleton'

export const MovieCardList = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      setLoading(false)
    }

    fetchMovies()
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
        {loading
          ? Array(9)
              .fill(0)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.fakeData}>
                    <CardLoader />
                  </div>
                </SwiperSlide>
              ))
          : movies?.map((movie, index) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}
