import React ,{useEffect,useState}from 'react';
import star from '../images/Group 1.png';
import {useDispatch} from 'react-redux'
import {Increment} from '../action/index.js'
import './Products.css'
function Products() {
    const dispatch = useDispatch();
    const [data , setData]= useState([]);
    let apidata = [];
    const accept = () => {
        return fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json")
              .then((response) => response.json())
              .then((datas) => {
                for(const item in datas){
                    apidata.push({
                        productId:datas[item].id,
                        productImage:datas[item].productImage,
                        newPrice:datas[item].newPrice,
                        oldPrice:datas[item].oldPrice,
                        productName:datas[item].productName
                    });
                }
                setData(apidata)});
      }
    
      useEffect(() => {
        accept();
      },)
  return (
    <div className='container'style={{height:"200px"}}>
       <div className='row'>
        <div className='col-3 md-5'>
             <h1 className='display-6 fw-bolder'>
                Products
             </h1>
        </div>
       </div>
    
       <div className='prod-container'>
        {
        
                data.map(product => {
                    return (
                        <div className='card-container'>
                            <div className='card'>
                                <img src={product.productImage} className='prod-pic' alt='Product-pic' />
                                <div className='card-body'>
                                    <p className='prod-name'>
                                        {product.productName}
                                    </p>
                                    <div className='rating'>
                                        <img src={star} className='star' alt='rating' />

                                        <div className='price'>
                                            <span className='old-price'>
                                                {product.oldPrice}/-
                                            </span>
                                            
                                            <span className='new-price'>
                                                {product.newPrice}/-
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => dispatch(Increment())}><h3>ADD TO CART</h3></button>
                            </div>
                        </div>
                    )
                })
            
        }
    </div>
    </div>
    )}

export default Products