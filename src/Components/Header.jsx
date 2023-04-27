import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <nav>
        <div className="right">
        <h1>Flex Business Pro</h1>
        <p>Clean and Modern Business Theme</p>
        </div>
        <main>
            <Link to={"/"}>Home</Link>
            <Link>About Us</Link>
            <Link>Styleguide</Link>
            <Link>Blog</Link>
            <Link>Contact Us</Link>
        </main>
    </nav>
  )
}

export default Header