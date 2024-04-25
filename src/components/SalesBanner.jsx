import '../css/SalesBanner.css'
function SalesBanner(props) {
 return(
  <section className="SalesBanner">
   <div className="SalesBanner__titles">
    <p>{props.discount}</p>
    <h2>{props.titleProduct}</h2>
    <p>{props.endDiscount}</p>
   </div>
   <div className="SalesBanner__image">
    <img src={props.img} />
   </div>
   <div className="SalesBanner__content">
    <p>Limit edition</p>
    <h3>SUMMER SALE</h3>
    <p className='product_description'>{props.description}</p>
    <button>Buy now</button>
   </div>
  </section>
 )
}

export { SalesBanner }