import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import "./Navbar.css"

const NavBar = () => {
    return (
        <>
            <Navbar className="navBg" variant="" expand="lg">
                <Container>

                    <div className="div-img-nav">

                         <Navbar.Brand as={Link} to="/" >
                            <img id="img-nav" src="/src/assets/logo-prp.png" />
                        </Navbar.Brand>
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <div id="div-nav">
                                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            </div>

                            <div id="div-nav">
                                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                            </div>

                            <div id="div-nav">
                                <Nav.Link as={Link} to="/Registro">Registrarse</Nav.Link>
                            </div>

                        </Nav>


                    </Navbar.Collapse>



                </Container>

                <div id="id-form-nav">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="" aria-label="Search" />
                        <button class="btn btn-danger" type="submit">Buscar</button>
                    </form>

                </div>


            </Navbar>




            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}
export default NavBar