import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { StartPage } from './pages/StartPage/StartPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { HomePage } from './pages/HomePage/HomePage'
import { useEffect } from 'react'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { MoviePage } from './pages/MoviePage/MoviePage'

function App() {
  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const authChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        navigate('/')
      } else {
        navigate('/start')
      }
    })

    return authChanged
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
