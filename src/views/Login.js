import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
        <div className="logLayout">
            <form>
                <h3>Iniciar sesión</h3>

                <div className="form-group">
                    <label>Correo electronico</label>
                    <input type="email" className="form-control" placeholder="ejemplo@gmail.com" />
                </div>

                <div className="form-group ptop">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Tu contraseña"/>
                </div>

                <div className="ptop">
                    <button type="submit" className="btn btn-primary btn-block">login</button>
                </div>
            </form>
        </div>
    );
  }
}