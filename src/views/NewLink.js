import React, { Component } from 'react';

export default class NewLink extends Component {
  render() {
    return (
        <div className="logLayout">
            <form>
                <h3>Generar link</h3>

                <div className="form-group ptop">
                    <label>Correo electronico</label>
                    <input type="email" className="form-control" placeholder="ejemplo@gmail.com" />
                </div>

                <div className="form-group ptop">
                    <label>Nombre completo</label>
                    <input type="text" className="form-control" placeholder="Juanito Perez"/>
                </div>

                <div className="ptop">
                    <button type="submit" className="btn btn-primary btn-block">Compartir</button>
                </div>
            </form>
        </div>
    );
  }
}