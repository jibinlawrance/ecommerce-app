import React, { useEffect } from 'react'
import "./Dashboard.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../../assets/placeholder.png";

function Dashboard({products, addToCart, cart}) {
    
    const checkAdded = (product_id) => {
        for(let i=0; i<cart.length; i++){
            if(cart[i].id == product_id){
                return true
            }
        }
    }

    return (
    <div className='container product-card-wrap'>
        {
            products.map((product,productIndex) => {
                return (
                    <div
                        key={productIndex}
                        className='product-card'    
                    >
                        <div className="product-card__thumbnail-wrap">
                            <LazyLoadImage 
                                src={product.thumbnail}
                                width={408}
                                height={229}
                                placeholderSrc={PlaceholderImage}
                                alt={product.title}
                                className='product-card__thumbnail'
                            />
                            {/* <img 
                                src={product.thumbnail}
                                alt={product.title} 
                                className='product-card__thumbnail'
                            /> */}
                        </div>
                        <div className="product-card__desc">
                            <p>{product.title} | {product.category}</p>
                            <p>{product.description}</p>
                            <p>Rs. {product.price}</p>
                            { checkAdded(product.id) ? 
                            
                            <button
                                className="product-card__desc-btn disabled"
                            >Added to cart
                            </button> 

                            : <button
                                className="product-card__desc-btn"
                                onClick={() => addToCart(product)}
                            >Add to cart
                            </button> }
                            
                        </div>
                    </div>
                )
            })
        }
    </div>
    )
}

export default Dashboard