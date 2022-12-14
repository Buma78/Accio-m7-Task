import React from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar() {
  const myCount = useSelector(state => state.changeNumber)
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <span className="navbar-brand fw-bold fs-4">Acciojob</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to='/' className='btn'>Home</Link>
        </li>
        <li className="nav-item">
        <Link to='/Shop' className='btn'>Shop</Link>
        </li>
        <li className="nav-item">
        <Link to='/About' className='btn'>About</Link>
        </li>
        <li className="nav-item">
        <Link to='/Blog' className='btn'>Blog</Link>
        </li>
        <li className="nav-item">
        <Link to='/Contact' className='btn'>Contact</Link>
        </li>
        <li className="nav-item">
        <Link to='/Pages' className='btn'>Pages</Link>
        </li>
      </ul>
      <div>
        <span style={{color:"#23A6F0",margin:'1px'}}>
        <i className="fa fa-user me-1"></i>Login</span>/
        <span style={{color:"#23A6F0",margin:'1px'}}>Register</span>
        <span style={{color:"#23A6F0",margin:'2px'}}>
        <i className="fa fa-search ms-2"></i></span>
        <span style={{color:"#23A6F0",margin:'3px'}}>
        <i className="fa fa-shopping-cart ms-2"></i>{myCount}</span>
        <span style={{color:"#23A6F0",margin:'3px'}}>
        <i className="fa fa-heart me-1"></i>1</span>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar