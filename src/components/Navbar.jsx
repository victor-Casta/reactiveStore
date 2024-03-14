import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import searchLogo from "../assets/icons/Search.svg";
import BuyCarLogo from "../assets/icons/Buy-car.svg";
import BurguerMenu from "../assets/icons/burguer-menu.svg";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="Navbar">
        <div className="logo-container">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </div>
        <div className="options">
          <ul>
            <li>
              <NavLink
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to={"/my-account"}>My Acount</NavLink>
            </li>
            <li>
              <NavLink to={"/sigin"}>Sign in</NavLink>
            </li>
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
