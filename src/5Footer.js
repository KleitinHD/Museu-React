import React from "react";
import "./App.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="container-footer">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="img/logo.png" alt="Logo" id="logo2" />
          </div>
          <div class="footer-info">
            <p>Endereço: Avenida Imigrantes, 909 - Horizontina</p>
            <p>Telefone: (55) 55 99121-9977</p>
            <p>Email: museudigital@gmail.com</p>
          </div>
          <div class="footer-social">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon1">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon2">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 Museu Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
