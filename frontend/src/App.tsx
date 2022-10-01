import './App.css'
import axios from 'axios';
import { Header } from './components/Header';
import { ProfileImg } from './components/ProfileImg';
import { Footer } from './components/Footer';
import { PostsIndex } from './components/PostsIndex';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
 return (
  <div>
    <ProfileImg />
    <Header />
    <PostsIndex />
    <Footer />
  </div>
 )
}

export default App
