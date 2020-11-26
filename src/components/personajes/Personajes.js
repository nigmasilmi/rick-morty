import React from 'react'
import PersonajeItem from './PersonajeItem'
import Spinner from '../layout/Spinner';

const Personajes = ({ personajes, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="grid-3">
                {personajes.map(personaje => (
                    <PersonajeItem key={personaje.id} personaje={personaje} />
                ))}
            </div>
        )
    }
}



export default Personajes
