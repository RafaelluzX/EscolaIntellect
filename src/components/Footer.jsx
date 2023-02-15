import React from 'react'

function Footer() {
  return (
    <footer className="footer-geral container-fluid d-flex justify-content-around">
    <div className="logo-footer pt-2">
      <span>intellect</span>
    </div>
    <ul className="about-platform">
      <li className="pt-2">
        <a href="#">Sobre nós</a>
      </li>
      <li className="pt-2">
        <a href="#">Trabalhe conosco</a>
      </li>
      <li className="pt-2">
        <a href="#">Sugira um curso</a>
      </li>
      <li className="pt-2">
        <a href="#">Fale conosco</a>
      </li>
    </ul>
    <ul className="community">
      <li className="pt-2">
        <a href="#">Discord intellect</a>
      </li>
      <li className="pt-2">
        <a href="#">Nosso blog</a>
      </li>
    </ul>
    <ul className="social-media pt-2">
      <div className="siga-nos">Siga-nos os bons &#128521;</div>
      <div className="icons d-sm-inline-flex">
        <li>
          <a href="#" className="fa p-2 fa-facebook"></a>
        </li>
        <li>
          <a href="#" className="fa p-2 fa-twitter"></a>
        </li>
        <li>
          <a href="#" className="fa p-2 fa-linkedin"></a>
        </li>
        <li>
          <a href="#" className="fa p-2 fa-youtube"></a>
        </li>
        <li>
          <a href="#" className="fa p-2 fa-instagram"></a>
        </li>
      </div>
    </ul>
  </footer>
  )
}

export default Footer