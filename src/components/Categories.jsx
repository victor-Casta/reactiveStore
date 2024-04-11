import Wireless from '../assets/images/airpods.png'
import Shoes from '../assets/images/nike.png'
import Clothe from '../assets/images/clothe.png'
import Furniture from '../assets/images/sillon.png'
import Consoles from '../assets/images/mando.png'
import Device from '../assets/images/watch.png'
import '../css/Categories.css'

function Categories() {
  return (
    <section className="Categories">
      <div className="Categories__container">
        <div className="left-content">
          <div className='left-content__container'>
            <a className="left-content__wireless">
              <img src={Wireless} alt="wireless" />
              <p className="left-content__wireless-text">Wireless</p>
            </a>
            <a className="left-content__shoes">
              <img src={Shoes} alt="wireless" />
              <p className="left-content__wireless-text">shoes</p>
            </a>
          </div>
          <div className="left-content__principal-product">
            <div className="principal-product__clothes">
              <img src={Clothe} alt="clothes image" />
              <p className="left-content__wireless-Tile">New Styles</p>
              <p className="left-content__wireless-subTile">FASHION</p>
              <p className='product-title'>clothes</p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
        <div className="rigth-content">
          <div className="left-content__principal-product">
            <div className="principal-product__clothes">
              <img src={Furniture} alt="clothes image" />
              <p className="left-content__wireless-Tile">New Styles</p>
              <p className="left-content__wireless-subTile">HOME</p>
              <p className='product-title'>clothes</p>
              <button>Learn more</button>
            </div>
          </div>
          <div className='right-content__container'>
            <a className="right-content__consoles">
              <img src={Consoles} alt="Consoles" />
              <p className="left-content__wireless-text">Wireless</p>
            </a>
            <a className="left-content__shoes">
              <img src={Device} alt="wireless" />
              <p className="left-content__wireless-text">shoes</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Categories }