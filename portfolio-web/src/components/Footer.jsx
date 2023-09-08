import React from 'react';
import NavBar from './NavBar';

const Footer = () => {
  return (
    <footer class="footer-container">
  <div class="footer-contact-info">
    <p>Sophia Kinsey</p>
    <a href="mailto:sophia.kinsey@btinternet.com">sophia.kinsey@btinternet.com</a>
    <p>Greater Manchester, United Kingdom</p>
    <div class="footer-copyright">
    <p>© 2023 Sophia Kinsey</p>
  </div>
  </div>
  
<div className="footer-nav">
  <NavBar></NavBar>
</div>
  

</footer>
  )
}

export default Footer
