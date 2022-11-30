import React, { Fragment } from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import "./Registro.css"

function Registro() {
  return (
    <>
      <div id="card-registro" class="card">
        <h4 class="mb-3">Registro de Usuario</h4>
        <hr class="my-4" />
        <form id="form-registro" class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label"> Nombre *</label>
              
              <input type="text" class="form-control" id="firstName" required /> 
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Apellido *</label>
              <input type="text" class="form-control" id="lastName"  required />
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Usuario *</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" required />
                <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email *</label>
              <input type="email" class="form-control" id="email" placeholder="nombre@example.com" />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Direccion *</label>
              <input type="text" class="form-control" id="address" placeholder="Calle 30 # 5 23" required />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">Direccion 2 <span class="text-muted">(Opcional)</span></label>
              <input type="text" class="form-control" id="address2" />
            </div>

          </div>
          </form>

          
          
          <button id='btn-registrarse' class="w-100 btn btn-lg btn-danger" type="submit">
              <Nav.Link id="btn-regis" as={Link} to="/Orden">Registrarse</Nav.Link>
            </button>
          </div>
        

        </>

        )
}


export default Registro