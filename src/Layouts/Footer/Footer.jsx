import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div class="div-footer">
        <div class="div-footer-text">
          <footer>
            Desarrollado por Equipo 09 NRC 2243 - Mision Tic 2022 | Uninorte ©
          </footer>
        </div>

        <div class="div-img-norte">
          <img class="img-norte" src="/src/assets/uninorte-logo.png" alt="" />
          <img class="img-insta" src="/src/assets/logo-prp.png" alt="" />
          <img class="img-tic" src="/src/assets/misiontic-logo.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
