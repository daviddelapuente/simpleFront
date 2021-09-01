import React, { Component } from 'react';
import Header from '../components/texts/Header';
import SimpleText from '../components/texts/SimpleText';

export default class Home extends Component {
  render() {
    return (
        <div className="perfilLayout">
            <div style={{width:"800px"}}>
              <Header text={"Bienvenido a CurrencyBird link invitation desde Amplify"}/>
              <SimpleText text={"Está es una app de prueba creada por Dania de la Puente. Aca podras registrar usuarios, generar links de invitación y ademas podras ver un ranking de los usuarios con más invitaciones"} />
              <Header text={"¿Como registrar?"}/>
              <SimpleText text={"Si quieres ingresar tus propios usuarios para probar la app. Debes hacer click en 'Registrar' en la barra de navegación, rellenar el formulario y listo."}/>
              <Header text={"¿Como invitar?"}/>
              <SimpleText text={"Para generar un link de invitación debes hacer click en 'Invitar' en la barra de navegación. Colocar el mail y nombre de un usuario y listo! Podras generar un link para ese usuario"}/>
              <Header text={"¿Como ver las invitaciones de los usuarios?"}/>
              <SimpleText text={"Haz click en 'Ver invitaciones' en la barra de navegación, y se mostraran todas las invitaciones efectivas que han hecho los usuarios. Ordenadas de mayor a menor numero de invitaciones."}/>
            </div>
        </div>
    );
  }
}