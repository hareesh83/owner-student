import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="footer_wrapper">
      <div class="footer">
        <div class="footer_primary">
          <div class="footer_logo">
            <h1>Logo</h1>
          </div>
          <div class="social_media">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-youtube"></i>
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