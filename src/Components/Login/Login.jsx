import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import "./Login.css";


function Login() {
  return (
    <>
      <div id="card-container" class="card mb-3">
        <div class="card-body">
          <p class="card-title">Bienvenido a la plataforma de envios de paquetes <span class="span-login">InstaYa!</span>, para poder acceder a la plataforma debe iniciar sesion.</p>
          <img id="img-login" src="/src/assets/icono.png"/>

          <form>
            {/* <img class="mb-4" src="/src/assets/icono.png" alt="" width="72" height="57" /> */}
            <h4 id="id-h4-login" class="h3 mb-3 fw-normal">Inicio de sesion</h4>
            

            <div id="div-form-login" class="form-floating">
              <input type="email" class="form-control" id="input-login" placeholder="name@example.com" />
              <label id="label-login" for="floatingInput">Email</label>
            </div>
            <div id="div-form-login" class="form-floating">
              <input type="password" class="form-control" id="input-login" placeholder="Password" />
              <label id="label-login" for="floatingPassword">Password</label>
            </div>

            <div id="input-login-label" class="checkbox mb-3">
              <label>
                <input  type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button id="btn-login-ini" class="w-100 btn btn-lg btn-danger" type="submit">
              <Nav.Link id="btn-regis" as={Link} to="/Orden">Iniciar Sesion</Nav.Link>
            </button>

            <button id="btn-login-regis" class="w-100 btn btn-lg btn-danger" type="submit">
              <Nav.Link id="btn-regis" as={Link} to="/Registro">Registrarse</Nav.Link>
            </button>

            <p id="p-login" class="mt-5 mb-3 text-muted">2022 &copy;</p>
            
          </form>

        </div>
      </div>
      <Outlet />

    </>
  )
}

export default Login
