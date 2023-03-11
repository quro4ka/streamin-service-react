export const API_KEY = '8476c324df0b2f4202fc08c9e680f585'

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=213`,
  fetchKidsPopular: `/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
  fetchMovie: `/movie/550?api_key=${API_KEY}`,
}
