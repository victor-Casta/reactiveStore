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
              <NavLink to={"/my-orders"} className={({ isActive }) => isActive ? 'underline underline-offset-4' : ''}>My Orders</NavLink>
            </li>
            <li>
              <NavLink to={"/my-account"} className={({ isActive }) => isActive ? 'underline underline-offset-4' : ''}>My Account</NavLink>
            </li>
            <li>
              <NavLink to={"/sigin"} className={({ isActive }) => isActive ? 'underline underline-offset-4' : ''}>Sign in</NavLink>
            </li>
          </ul>
          <NavLink to={"/search"}>
            <img src={searchLogo} alt="Search" className="search" />
            </NavLink>
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
