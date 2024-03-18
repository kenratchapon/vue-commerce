import { initializeApp } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAuth,connectAuthEmulator } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCtEJ7gpNjbQCkDbeV1GQwHom5OUoUgMhE",
    authDomain: "vue-commerce-manoshop.firebaseapp.com",
    databaseURL: "https://vue-commerce-manoshop-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vue-commerce-manoshop",
    storageBucket: "vue-commerce-manoshop.appspot.com",
    messagingSenderId: "562908220085",
    appId: "1:562908220085:web:6c3fc3aa4d7e4ceeebccfc"
  }

  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)
  connectFirestoreEmulator(db, '127.0.0.1', 8080)

  const auth = getAuth(app)
  connectAuthEmulator(auth, "http://127.0.0.1:9099")

  export {
    db,
    auth
  }