import React from 'react'
import { Link } from 'react-router-dom';
import user from "../images/user.jpg";

function Navbar() {
  return (
    <header>
        <nav className="navbar navbar-dark navbar-expand-lg">
          <div className="container">
            <Link to="/" className="navbar-brand logo">intellect</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-0 ps-lg-5">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Meu Progresso
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Meus cursos
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Certificados
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mx-lg-5" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="search-button btn btn-outline-success"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
              <div className="col-2 dropdown text-end my-3 my-lg-0">
                <a
                  href="#"
                  className=" link-light text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={user}
                    alt="Foto de perfil de Fulano"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                  <span className="user-name ps-3" id="user-name">Usuário</span>
                </a>
                <ul className="dropdown-menu text-small">
                  <li>
                    <a className="dropdown-item" href="#">
                      Perfil
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/login" className="dropdown-item">Sair</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Navbar