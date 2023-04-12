import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="container d-flex flex-column">
        <div
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#multiCollapseLogin"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Já tenho conta
        </div>
        <div className="container">
          <div className="collapse multi-collapse" id="multiCollapseLogin">
            <div className="container m-5">
            <form className="container col-sm-6 col-lg-5 d-flex flex-column">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailLogin"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordLogin"
                />
              </div>
              <button type="submit" className="btn btn-primary ">
                Entrar
              </button>
            </form>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseCriarConta"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Criar conta
        </button>
        <div className="container">
          <div className="collapse multi-collapse" id="multiCollapseCriarConta">
          <div className="container m-5">
            <form className="container col-sm-6 col-lg-5 d-flex flex-column">
              <div className="mb-3">
              <label for="fullName" className="form-label">
                  Nome completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  aria-describedby="Nome"
                />
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailCriarConta"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordCriarConta"
                />
              </div>
              <button type="submit" className="btn btn-primary ">
                Começar
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
