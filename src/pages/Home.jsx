import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import d from "../images/d.jpg";
import idiomas from "../images/idiomas.jpg";
import medio from "../images/en-medio.jpg";
import p from "../images/p.jpg";
import ux from "../images/ux.jpg";
import gestao from "../images/gestao.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/cursos.css";
import "../styles/css_pg-inicial.css";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="presentation-className-courses container mt-4">
          <h2 className="title-presentation">Um novo modo de aprender</h2>
          <p className="description-section">
            Mais do que uma plataforma de ensino, na Intellect você aprende e se
            desenvolve na prática, no seu ritmo e ao lado de grandes
            profissionais. Aqui você pode aprender um novo idioma, a programar,
            aprender conteúdos do ensino médio para se preparar para o Enem, e
            muito mais.{" "}
          </p>
        </section>
        <section className="cards-className-courses container d-flex flex-wrap">
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <img src={idiomas} className="card-img" alt="" />
              <div className="card-body card-img-overlay d-flex flex-column justify-content-center">
                <h5 className="card-title">Idiomas</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/idiomas" className="card-link align-self-center">
                  <button className="buttons-home">Acessar</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <img src={p} className="card-img" alt="" />
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                <h5 className="card-title">Programação</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/programacao" className="card-link align-self-center">
                  <button className="buttons-home">Acessar</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <img src={d} className="card-img" alt="" />
              <div className="card-body card-img-overlay d-flex flex-column justify-content-center">
                <h5 className="card-title">Data Science</h5>
                <p className="card-text">
                  Trabalhe com dados. Aprofunde seu conhecimento nas principais
                  ferramentas de uma pessoa data
                </p>
                <Link to="/datascience" className="card-link align-self-center">
                  <button className="buttons-home">Acessar</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <img src={ux} className="card-img" alt="" />
              <div className="card-body card-img-overlay d-flex flex-column justify-content-center">
                <h5 className="card-title">UX & Design</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/uxdesign" className="card-link align-self-center">
                  <button className="buttons-home">Acessar</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <img src={medio} className="card-img" alt="" />
              <div className="card-body card-img-overlay d-flex flex-column justify-content-center">
                <h5 className="card-title">Aula de Reforço</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/reforco" className="card-link align-self-center">
                  <button className="buttons-home">Acessar</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
              <img src={gestao} className="card-img" alt="" />
              <div className="card-body card-img-overlay d-flex flex-column justify-content-center ">
                <h5 className="card-title">Gestão</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/gestao" className="card-link align-self-center">
                  <button className="buttons-home">Acessar</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="about-us container mt-5">
        <h2 className="title-about">Sobre nós</h2>
        <p className="p-about">
          Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo
          num tendi nada.Posuere libero varius. Nullam a nisl ut ante blandit
          hendrerit. Aenean sit amet nisi.Casamentiss faiz malandris se
          pirulitá.Interessantiss quisso pudia ce receita de bolis, mais bolis
          eu num gostis. Praesent vel viverra nisi. Mauris aliquet nunc non
          turpis scelerisque, eget. Paisis, filhis, espiritis santis.Não sou
          faixa preta cumpadi, sou preto inteiris, inteiris.Sapien in monti
          palavris qui num significa nadis i pareci latim.
        </p>
        <p className="p-about">
          Delegadis gente finis, bibendum egestas augue arcu ut est.Suco de
          cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
          fermentis.A ordem dos tratores não altera o pão duris.Posuere libero
          varius. Per aumento de cachacis, eu reclamis.Não sou faixa preta
          cumpadi, sou preto inteiris, inteiris.A ordem dos tratores não altera
          o pão duris. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet
          nisi.
        </p>
        <p className="p-about">
          Aenean aliquam molestie leo, vitae iaculis nisl.Per aumento de
          cachacis, eu reclamis.Não sou faixa preta cumpadi, sou preto inteiris,
          inteiris.A ordem dos tratores não altera o pão duris.
        </p>
        <div className="ratio ratio-16x9">
          <iframe
            className="video-about-us"
            src="https://www.youtube.com/embed/E_JFBmC0tpM"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className="free-trial container mt-5 mb-5">
        <h2 className="title-ftrial">
          Ainda está com dúvida se temos o que você precisa?
        </h2>
        <p>
          {" "}
          Não só temos o que você precisa, como deixamos você testar toda nossa
          plataforma de modo totalmente gratuito por 7 dias. Está esperando o
          que? <a href="#">Clique aqui</a> e teste agora mesmo.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Home;
