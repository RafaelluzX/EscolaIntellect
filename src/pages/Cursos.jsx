import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";

function Cursos() {
  return (
    <>
      <Navbar />
      <div>
        <section className="presentation-class-courses container mt-4">
          <h2 className="title-presentation">Quer aprender a programar?</h2>
          <p className="description-section">
            Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito
            paradis? Toma um mé que o mundo vai girarzis!Não sou faixa preta
            cumpadi, sou preto inteiris, inteiris.Praesent malesuada urna nisi,
            quis volutpat erat hendrerit non. Nam vulputate dapibus.A ordem dos
            tratores não altera o pão duris.{" "}
          </p>
        </section>
        <section className="cards-courses container d-flex flex-wrap">
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link align-self-center">
                  Acessar
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">CSS</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link align-self-center">
                  Acessar
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Javascript</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="pagina-cursos/cursos-programacao.html"
                  className="card-link align-self-center"
                >
                  Acessar
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Python</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link align-self-center">
                  Acessar
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">PHP</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link align-self-center">
                  Acessar
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cursos;
