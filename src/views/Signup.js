import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
        <div className="logLayout">
            <form>
                <h3>Registrate</h3>

                <div className="form-group">
                    <label>Primer nombre</label>
                    <input type="text" className="form-control" placeholder="Primer nombre" />
                </div>

                <div className="form-group perfilPad ptop">
                    <label>Primer apellido</label>
                    <input type="text" className="form-control" placeholder="Primer apellido" />
                </div>

                <div className="form-group perfilPad ptop">
                    <label>Correo electronico</label>
                    <input type="email" className="form-control" placeholder="Correo electronico" />
                </div>

                <div className="form-group perfilPad ptop">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Ingresa una contraseña" />
                </div>
                
                <div className="form-group perfilPad ptop">
                    <label>Confirmar contraseña</label>
                    <input type="password" className="form-control" placeholder="Confirmar contraseña" />
                </div>
                

                <div className="perfilPad ptop">
                    <button type="submit" className="btn btn-primary btn-block">Registrame!</button>
                </div>
                
            </form>
        </div>
    );
  }
}