import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import logoimg from '../../assets/img/logo_color.png'
import { ReactComponent as Hamburger } from '../../assets/img/icons8-menu-48.svg'
import "./topbar1.css";

export default function TopBar1() {
  const { user, dispatch } = useContext(Context);
  //const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className="top">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <div><img src={logoimg} alt="" className="logoImg" /></div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <Link to="/" onClick={handleShowNavbar}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleShowNavbar}>About Us</Link>
              </li>
              <li>
                <Link to="/posts" onClick={handleShowNavbar}>Posts</Link>
              </li>
              <li>
                <Link to="/team" onClick={handleShowNavbar}>Teams</Link>
              </li>
              <li style={{ marginRight: '20px' }}>
                <Link to="/contact" onClick={handleShowNavbar}>Contact Us</Link>
              </li>
              {user ? (
                <li className="logoutBtn" onClick={handleLogout}>
                  LOGOUT
                </li>
              ) : (
                <li className="loginBtn">
                  <Link to="/login" onClick={handleShowNavbar}>LOGIN</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
