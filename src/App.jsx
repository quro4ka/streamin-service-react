import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { StartPage } from './pages/StartPage/StartPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { HomePage } from './pages/HomePage/HomePage'
import { useEffect } from 'react'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { MoviePage } from './pages/MoviePage/MoviePage'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/slices/userSlice'
import { Popup } from './components/Popup/Popup'
import { useSelector } from 'react-redux'

function App() {
  const auth = getAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const popup = useSelector((state) => state.popup.popup)

  useEffect(() => {
    const authChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          }),
        )
        navigate('/')
      } else {
        navigate('/start')
      }
    })

    return authChanged
  }, [])

  return (
    <div className="App">
      {popup && <Popup />}
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
