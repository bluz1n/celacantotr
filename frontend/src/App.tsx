import './App.css'
import { Header } from './components/Header'
import { ProfileImg } from './components/ProfileImg'
import { Footer } from './components/Footer'
import { PostsIndex } from './components/PostsIndex'

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
