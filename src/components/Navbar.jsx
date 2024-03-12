import logo from "../assets/icons/logo.svg";
import searchLogo from "../assets/icons/Search.svg";
import BuyCarLogo from "../assets/icons/Buy-car.svg";
import BurguerMenu from "../assets/icons/burguer-menu.svg"
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="Navbar">
        <div className="logo-container">
          <a href="">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <div className="options">
          <ul>
            <li><a href="">My Orders</a></li>
            <li><a href="">My Acount</a></li>
            <li><a href="">Sign in</a></li>
          </ul>
          <a href="">
            <img src={searchLogo} alt="Search" className="search" />
          </a>
          <a href="">
            <img src={BuyCarLogo} alt="Shop car" className="shop-car" />
          </a>
          <a href="" className="burguer-menu-container">
          <img src={BurguerMenu} alt="menu" className="burguer-menu" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
