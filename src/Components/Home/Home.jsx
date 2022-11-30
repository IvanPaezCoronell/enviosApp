import React, { Fragment } from "react";
import "./Home.css";
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

function Home() {
  return (
    <Fragment>
      <div class="div-section-01">
        <h4>Beneficio de PRP Plataform</h4>
        <h5>
          La plataforma para la gestion de paquetes es un sistema por medio del
          cual los usuarios pueden programar la recogida de paquetes para su
          futuro envio.{" "}
        </h5>
        <h5>
          <span>Click Aqui</span> para mas informacion.
        </h5>
      </div>

      <div class="div-section-02">
        <div class="div-img">
          <img id="img-home" src="/src/assets/icon-home.jpg" />
          <div class="div-p">
            <p>Plataforma para la gestion de paquetes.</p>
            <p class="p-sub">Universidad del Norte</p>

            <div class="div-button">
              <button type="button" class="btn btn-warning btn-lg">
                <Nav.Link as={Link} to="/Login">INGRESAR</Nav.Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
