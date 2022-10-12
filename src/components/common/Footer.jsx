import React from 'react'
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import Logo from '../../assets/owner.png'


const Footer = () => {
  return (
    <div>
      <footer class="footer_wrapper">
      <div class="footer">
        <div class="footer_primary">
          <div class="footer_logo">
            {/* <img src={Logo} alt="logo" /> */}
          </div>
          <div class="social_media">
            <FaFacebookF/>
            <FaTwitter/>
            <FaLinkedinIn/>
            <FaYoutube/>
          </div>
        </div>
        <div class="footer_secondary">
          <div class="footer_more">
            <h1>More MySite</h1>
            <a href="">Media</a>
            <a href="">Events</a>
            <a href="">Program</a>
            <a href="">Newsletter</a>
            <a href="">Deals</a>
          </div>
          <div class="footer_about">
            <h1>About MySite</h1>
            <a href="">Partner with us</a>
            <a href="">Terms and Conditions</a>
            <a href="">Cookie Statement</a>
            <a href="">Privacy Statement</a>
            <a href="">Editorial Policy</a>
          </div>
        </div>

      </div>

    </footer>
    </div>
  )
}

export default Footer