import React from 'react'
import '../components/Home.css';
import hero from '../images/hero-cover-1.png';
import Products from './Products.js';
function Home() {
  return (
   <div>
    <div className='home-container'>
      <div className='row'>
      <div className='col-md-6'>
            <div className='show'>
                <h5>SUMMER 2020</h5>
                <h1>NEW COLLECTION</h1>
                <h4>We know how large objects will act, but things on a small scale.</h4>
                <div className='cta'>
                    <button className='btn btn-primary'><h3>SHOP NOW</h3></button>
                </div>
                </div>
            </div>
            <div className='col-md-6'>
                <img src={hero} />
            </div>
      </div>
    </div>
     <Products/>
  </div>
  )
}

export default Home;