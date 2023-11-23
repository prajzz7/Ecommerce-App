import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart as Wishlist } from 'lucide-react';

const Navbar = () => {
    return (
        <>
            <header className='header'>
                <div className='wrapper'>
                    <section className='left'>
                        <div className='left-wrapper'>
                            <input placeholder='Search' type="search" className="search" />
                            <Search className='searchIcon' />
                        </div>
                    </section>
                    <section className="center">
                        <Link to='/'><h1>ECOVOGUE</h1></Link>
                    </section>
                    <section className="right">
                        <ul>
                            <li><User className='right-icon'/></li>
                            <li><Wishlist className='right-icon'/></li>
                            <li>
                                <ShoppingCart className='right-icon'/>
                                <span className='badge'>0</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </header>
            <nav className='navbar'>
                <ul>
                    <li><Link to='/products/men'>Men</Link></li>
                    <li><Link to='products/women'>Women</Link></li>
                    <li><Link to='products/children'>Children</Link></li>
                    <li><Link to='products/accessories'>Accessories</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar