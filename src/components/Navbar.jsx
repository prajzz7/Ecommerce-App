import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart as Wishlist } from 'lucide-react';

const Navbar = () => {
    const [searchHover, setSearchHover] = useState(false)
    const [searchTyping, setSearchTyping] = useState(false)
    return (
        <>
            <header className='header'>
                <div className='wrapper'>
                    <section className='left'>
                        <div className='left-wrapper'>
                            <input 
                                onMouseEnter={e=>setSearchHover(true)}
                                onMouseLeave={e=>setSearchHover(false)}
                                onFocus={e=>setSearchTyping(true)}
                                onBlur={e=>{
                                    setSearchTyping(false)
                                    }}
                                placeholder='Search' 
                                type="text" 
                                className={searchTyping?" search search-typing":"search"} />
                            <div 
                                className={searchTyping?(searchHover?"search-icon-typing search-icon-container search-field-hovered":"search-icon-typing search-icon-container ") : (searchHover?"search-icon-container search-field-hovered": "search-icon-container")}>
                                <Search className='searchIcon' />
                            </div>

                        </div>
                    </section>
                    <section className={searchTyping?"center center-hidden":"center"}>
                        <Link to='/'><h1>ECOVOGUE</h1></Link>
                    </section>
                    <section className={searchTyping?"right right-hidden":"right"}>
                        <ul>
                            <li><User className='right-icon' /></li>
                            <li><Wishlist className='right-icon' /></li>
                            <li>
                                <ShoppingCart className='right-icon' />
                                <span className='badge'>0</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </header>
            <nav className='navbar'>
                <div className='navbar-wrapper'>
                    <ul>
                        <li><Link to='/products/men'>Men</Link></li>
                        <li><Link to='products/women'>Women</Link></li>
                        <li><Link to='products/children'>Children</Link></li>
                        <li><Link to='products/accessories'>Accessories</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar