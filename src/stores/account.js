import { defineStore } from 'pinia'
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '@/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const provider = new GoogleAuthProvider()

export const useAccountStore = defineStore('account', {
    state: () => ({
        isLoggedIn: false,
        isAdmin: false,
        user: {},
        profile: {}
    }),
    actions: {
        async checkAuth() {
            return new Promise((resolve) => {
                onAuthStateChanged(auth,async (user) => {
                    if (user) {
                        // User is signed in, see docs for a list of available properties
                        // https://firebase.google.com/docs/reference/js/auth.user
                        this.user = user

                        const docRef = doc(db, 'users', user.uid)
                        const docSnap = await getDoc(docRef)

                        if (docSnap.exists()) {
                            this.profile = docSnap.data()
                        }
                        else {
                            const newUser = {
                                name: user.displayName,
                                role: 'member',
                                status: 'active',
                                updateAt: new Date()
                            }
                            await setDoc(docRef, newUser)
                            this.profile = newUser
                        }
                        //edit later
                        if (this.profile.role === 'admin') {
                            this.isAdmin = true
                        }
                        this.isLoggedIn = true
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                })
            })
        },
        async signInwWithGoogle() {
            try {
                const result = await signInWithPopup(auth, provider)
                this.isLoggedIn = true
                this.user = result.user
            } catch (error) {
                console.log('error', error)
            }
        },
        async signInAdmin(email, password) {
            try {
                const result = await signInWithEmailAndPassword(auth, email, password)
                this.isLoggedIn = true
                this.user = result.user
                if (this.profile.role === 'admin') {
                    this.isAdmin = true
                }
            } catch (error) {
                switch (error.code) {
                    case 'auth/invalid-email':
                        throw new Error('Invalid email')
                    case 'auth/wrong-password':
                        throw new Error('Invalid password')
                    default:
                        throw new Error('Login invalid')
                }
            }
        },
        async logout() {
            this.isLoggedIn = false
            this.isAdmin = false
            await signOut(auth)
        }
    }
})