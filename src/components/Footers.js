import React from 'react';
import Saveresponses from './Saveresponses.js';
import { Link } from 'react-router-dom';
import './Footers.css';
function Footers() {
  return (
    <div className='desktop-footer-6'>
        <div className='container'style={{marginTop:"50px"}}>
            <div className='row'style={{justifyContent:"space-between"}}>
                <div className='col-md-3'>
                    <h1 className='display-6 fw-bolder'>
                        AccioJob
                    </h1>
                </div>
                <div className='col-md-3'>
                  <span style={{color:"#23A6F0",margin:'10px'}}><i className="fa fa-facebook"></i></span>
                   
                   <span style={{color:"#23A6F0",margin:'10px'}}><i className="fa fa-instagram"></i></span>
                   
                   <span style={{color:"#23A6F0",margin:'10px'}}> <i className="fa fa-twitter"></i></span>
                  
                </div>
            </div>
        </div>
        <hr/>
        <div className='container'style={{marginTop:"50px"}}>
            <div className='row'>
                <div className='col-md-2'>
                    <h5>Company Info</h5>
                    <div>
                        <div> About us</div>
                        <div> Career</div>
                        <div> We are hiring</div>
                        <div> Blog</div>
                    </div>
                </div>
                <div className='col-md-2'>
                    <h5>Legal </h5>
                    <div>
                        <div> About us</div>
                        <div> career</div>
                        <div> We are hiring</div>
                        <div> Blog</div>
                    </div>
                </div>
                <div className='col-md-2'>
                    <h5>Features</h5>
                    <div>
                        <div> Buisness Marketing</div>
                        <div> User Analytics</div>
                        <div> Live chat</div>
                        <div> Unlimited support</div>
                    </div>
                </div>
                <div className='col-md-2'>
                    <h5>Resources</h5>
                    <div>
                        <div> IOS & Android</div>
                        <div> Watch a demo</div>
                        <div> customers</div>
                        <div> API</div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <h5>Get in touch</h5>
                    <Saveresponses/>
                </div>
            </div>
        </div>
        <div className='container'style={{marginTop:"70px"}}>
            <div className='row'>
                <div className='col-md-7'>Made With &#x1F496;at AccioJob</div>
            </div>
        </div>
    </div>
  )
}

export default Footers