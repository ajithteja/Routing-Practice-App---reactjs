import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-bg-container">
    <div className="header-bg-container logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="logo-heading">Wave</h1>
    </div>
    <ul className="header-bg-container header-ul-container">
      <li>
        <Link to="/" className="logo-heading home">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="logo-heading home">
          About
        </Link>
      </li>
      <li>
        <Link to="contact" className="logo-heading home">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
