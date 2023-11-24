import React from 'react'
import "./Footer.scss"
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <section className="footer-heading">Categories</section>
          <ul className="footer-list">
            <li className='footer-list-item'>Men</li>
            <li className='footer-list-item'>Women</li>
            <li className='footer-list-item'>Children</li>
            <li className='footer-list-item'>Accessories</li>
            <li className='footer-list-item'>Shoes</li>
            <li className='footer-list-item'>Bags</li>
          </ul>
        </div>
        <div className="center1">
          <section className="footer-heading">Get Help</section>
          <ul className="footer-list">
            <li className='footer-list-item'>Payment Options</li>
            <li className='footer-list-item'>Contact</li>
            <li className='footer-list-item'>FAQ's</li>
          </ul>
        </div>
        <div className="center2">
          <section className="footer-heading">About Us</section>
          <ul className="footer-list">
            <li className='footer-list-item'>News</li>
            <li className='footer-list-item'>Our Goal</li>
            <li className='footer-list-item'>Sustainability</li>
          </ul>
        </div>
        <div className="right">
          <ul className='social-icons'>
            <li><Instagram className='icon' /></li>
            <li><Facebook className='icon' /></li>
            <li><Youtube className='icon' /></li>
            <li><Twitter className='icon' /></li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span>EcoVogue © Copyright 2023. All Rights reserved.</span>
        </div>
        <div className="right">
          <div className="bottom-right-content">Terms of Sale</div>
          <div className="bottom-right-content">Terms of Use</div>
          <div className="bottom-right-content">EcoVogue Privacy Policy</div>

        </div>
      </div>
    </div>
  )
}

export default Footer