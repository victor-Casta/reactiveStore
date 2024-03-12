import { Navbar } from "./Navbar"
import banner from '../assets/images/banner.jpg'
import '../css/Header.css'

function Header() {
  return (
    <header className="Header">
      <Navbar />
      <div className="banner-container">
        <img src={banner} alt="banner" />
        <div className="content__banner">
          <p className="title">Furniture styles</p>
          <button>Buy now</button>
        </div>
      </div>
    </header>
  )
}

export { Header }