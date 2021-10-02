// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="navbar-mobile-view-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <button type="button" className="nav-logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-logout-logo-img"
          />
        </button>
      </div>
      <div className="nav-content nav-bar-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">Products</li>
          <li className="nav-item">Cart</li>
        </ul>
        <button className="logout-button" type="button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-mobile-list">
        <li className="nav-menu-mobile-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
            alt="nav home"
            className="nav-bar-mobile-img"
          />
        </li>
        <li className="nav-menu-mobile-item">
          <img
            className="nav-bar-mobile-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
            alt="nav products"
          />
        </li>
        <li className="nav-menu-mobile-item">
          <img
            className="nav-bar-mobile-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
            alt="nav cart"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
