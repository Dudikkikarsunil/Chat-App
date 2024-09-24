import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
const firebaseConfig = {
  apiKey: 'AIzaSyBHW98gg2_imMbqWChWhIdYlz026pkhGb4',
  authDomain: 'chat-app-ps-91216.firebaseapp.com',
  projectId: 'chat-app-ps-91216',
  storageBucket: 'chat-app-ps-91216.appspot.com',
  messagingSenderId: '927708418784',
  appId: '1:927708418784:web:3f1936372ea30c22ae7685',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, 'users', user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: '',
      avator: '',
      bio: 'Hey, i am using chat app',
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, 'chats', user.uid), {
      chatData: [],
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};
export { signup, login, logout, auth, db };
