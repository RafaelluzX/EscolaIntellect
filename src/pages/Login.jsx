import React from 'react'

function Login() {

    const [name, setName] = useState("")
    const [users, setUsers] = useState([])
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const createUser = ()=> {
        console.log(name, email, password)
        fetch("http://localhost:3000/create",{
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
    }

    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div id="first">
            <div className="myform form ">
              <div className="logo mb-3">
                <div className="col-md-12 text-center">
                  <h1>intellect</h1>
                </div>
              </div>
              <form action="" method="post" name="login">
                <h2 className="text-center pb-3">Entre</h2>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="col-md-12 text-center pt-3">
                  <button
                    type="submit"
                    className=" btn btn-block mybtn btn-primary tx-tfm"
                  >
                    Login
                  </button>
                </div>
                <div className="col-md-12 text-center">
                  <div className="login-or">
                    <hr className="hr-or" />
                    <span className="span-or">ou</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div id="second">
            <div className="myform form ">
              <div className="logo mb-3">
                <div className="col-md-12 text-center">
                  <h2>Registre-se</h2>
                </div>
              </div>
              <form action="#" name="registration">
                <div className="form-group">
                  <label for="exampleInputEmail1">Nome</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email-new-user"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Senha</label>
                  <input
                    type="password"
                    name="password"
                    id="password-new-user"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="col-md-12 text-center mb-3"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
