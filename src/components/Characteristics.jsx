import securityIcon from '../assets/icons/security.svg'
import headphonesIcon from '../assets/icons/headphones.svg'
import cardIcon from '../assets/icons/card.svg'
import '../css/Characteristics.css'
function Characteristics() {
 return (
  <div className="Characteristics">
   <div className="content-container">
    <img src={securityIcon} alt='icon security' />
    <div className="text-container">
     <h3>Secure Information</h3>
     <p>Totally reliable platform</p>
    </div>
   </div>
   <div className="content-container">
    <img src={headphonesIcon} alt='icon headphones' />
    <div className="text-container">
     <h3>Online support 24/7</h3>
     <p>Support everyday</p>
    </div>
   </div>
   <div className="content-container">
    <img src={cardIcon} alt='icon card' />
    <div className="text-container">
     <h3>Secure payment</h3>
     <p>Secure and fast buy process</p>
    </div>
   </div>
  </div>
 )
}

export { Characteristics }