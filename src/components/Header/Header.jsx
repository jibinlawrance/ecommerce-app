import React, { useEffect } from 'react'
import "./Header.scss"
import icon from "../../assets/magnifying-glass-solid.svg"

function Header(props) {

  

  return (
    <header className='header'>
      <nav className='navigation container'>
        <h2
          className="brand-icon"
          onClick={() => props.handleShow(false)}
        >Amacart</h2>
        
          { !props.showCart &&
            <div className="search-input">
              <input
              type="text" 
              placeholder="Search Products"
              onChange={(e) => props.handleFilterProduct(e.target.value)} 
              value={props.filterProduct}
              />
              <img src={icon} width={15} height={15} alt="" />
            </div>
          }
          <p
            className='cart'
            onClick={() => props.handleShow(true)}
          >Cart {props.count > 0 ? <span>{props.count}</span> : ''}</p>
        
      </nav>
    </header>
  )
}

export default Header