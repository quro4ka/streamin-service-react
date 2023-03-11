import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCLLygCKW43N-I9sqbDURafw_ZTs94P0ts',
  authDomain: 'streaming-service-react.firebaseapp.com',
  projectId: 'streaming-service-react',
  storageBucket: 'streaming-service-react.appspot.com',
  messagingSenderId: '648646449894',
  appId: '1:648646449894:web:72c9a68ffe154614cdf927',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore()

export { auth, db }
