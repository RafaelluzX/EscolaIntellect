import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import CardExperts from "../components/CardExperts";
import php from "../images/php.jpg";
import { useEffect, useState } from "react";

function Cursos() {
  const [experts, setExperts] = useState([])

  const listExperts = () => {
    fetch("https://6437439e3e4d2b4a12e6b309.mockapi.io/api/experts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExperts(data);
      });
  };

  useEffect(() => {
    listExperts()
  }, [])

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
        <section className="cards-courses container d-flex flex-wrap gap-1 justify-content-center">
          <Card titleCurse="JavaScript" />
          <Card titleCurse="HTML" />
          <Card titleCurse="CSS" />
          <Card titleCurse="React.JS" />
          <Card titleCurse="php" />
        </section>
        <section className="experts-presentation container mt-5">
          <h2 className="title-experts-presentation">
            Conheça os experts dos cursos de programação
          </h2>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
            pessoas mais interessantis.Aenean aliquam molestie leo, vitae
            iaculis nisl.Mé faiz elementum girarzis, nisi eros vermeio.Tá
            deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
          </p>

          <div className="experts container mb-5 d-flex flex-wrap gap-1 justify-content-center">
            {experts && experts.map((expert) => (
                <div className="experts col-4" key={expert.id}>
                  <img src={expert.avatar} className="cardExperts" />
                  <h2>{expert.name}</h2>
                  <p>{expert.specialty}</p>
                </div>
              ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Cursos;
