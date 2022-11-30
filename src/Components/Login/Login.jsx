import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import "./Login.css";


function Login() {
  return (
    <>
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">Plataforma para la gestion de envios de paquetes <span class="span-login">InstaYa!</span></h5>
          <form>
            <img class="mb-4" src="/src/assets/icono.png" alt="" width="72" height="57" />
            <h1 class="h3 mb-3 fw-normal">Inicio de sesion</h1>

            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              <Nav.Link id="btn-regis" as={Link} to="/Orden">Iniciar Sesion</Nav.Link>
            </button>

            <button class="w-100 btn btn-lg btn-primary" type="submit">
              <Nav.Link id="btn-regis" as={Link} to="/Registro">Registrarse</Nav.Link>
            </button>

            <p class="mt-5 mb-3 text-muted">2022 &copy;</p>
          </form>

        </div>
      </div>
      <Outlet />

    </>
  )
}

export default Login
