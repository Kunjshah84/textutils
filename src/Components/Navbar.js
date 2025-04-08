import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// import About from './About'


export default function Navbar(props) {

  // In order to go through the about section:
  // const [showComponentB, setShowComponentB] = useState(false);

  // const handleClick = () => {
  //   setShowComponentB(true);
  // };
 
  return (
    <div>
        {/* &lt;&gt; */}
  <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className={`navbar-brand text-${props.mode === 'light' ? '#212529' : 'light'}`} to="/" >
       { props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className={`nav-link text-${props.mode === 'light' ? '#212529' : 'light'}` } to="/">
            Home
          </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">
              {props.about}
            </Link>
          </li>
        </ul>
        <form className="d-flex mx-2" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}

// If at the end we are not going to set the value of the prop then the react will through the error:

Navbar.defaultProps = {
    title: 'Set title Here',
    about: 'About' 
  };
// Ano matalab agar bhlthi koi prop missing che a component ne call karta to a a defult prop ne use karshe:
