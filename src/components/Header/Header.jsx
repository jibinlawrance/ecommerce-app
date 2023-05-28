import React, { useEffect } from 'react'
import "./Header.scss"

function Header(props) {

  return (
    <header className='header'>
      <nav className='navigation container'>
        <h2
          style={{cursor:"pointer"}}
          onClick={() => props.handleShow(false)}
        >Amacart</h2>
        <p
          style={{cursor:"pointer"}}
          onClick={() => props.handleShow(true)}
        >Cart <sup>{props.count}</sup></p>
      </nav>
    </header>
  )
}

export default Header