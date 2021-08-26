import React, {useEffect, useState } from 'react';
import Invitation
from './Invitation';
import axios from 'axios'

const Invitations =() =>{
    const [items, setItems] = useState([]);
    const [isAvailable, setAvailable] = useState(false);

    useEffect(() => {
      axios.get('http://localhost:3001/users')
      .then(({ data }) => {
        const itemsAux=[]
        for (const [index, value] of data.entries()) {
          itemsAux.push(<Invitation key={index} name={value["username"]} total={value["linkcount"]} balance={value["linkcount"]*5000}/>)
        }
        setItems(itemsAux);
        setAvailable(true);
        
      })
      .catch((error) =>{ console.log("error")})
      
    }, []);


    return (
        <>
            {isAvailable ? (null):(<p>Cargando datos...</p>)}
            {items}

        </>
    );
  
}

export default Invitations