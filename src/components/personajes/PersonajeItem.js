import React from 'react';

const PersonajeItem = (props) => {
    const personaje = props.personaje;
    return (
        <div className="card text-center">
            <img
                src={personaje.image}
                alt={personaje.name}
                className="round-img"
                style={{ width: '60px' }}
            />
            <h3>{personaje.name}</h3>
            {/* {personaje.id} */}
            <p>Status: {personaje.status} </p>
            <p>Especie: {personaje.species}</p>
            <p>Origen: {personaje.origin.name}</p>
            {/* {personaje.location.name} */}

        </div>
    )
}


export default PersonajeItem
