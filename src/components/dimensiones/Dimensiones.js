import React from 'react';
import Spinner from '../layout/Spinner';
import DimensionItem from '../dimensiones/DimensionItem';

const Dimensiones = ({ dimensiones, loading }) => {

    // let dimensionesArr = [];
    // personajes.forEach(personaje => {
    //     if (dimensionesArr.indexOf(personaje.location.name) === -1) {
    //         dimensionesArr.push(personaje.location.name);

    //     }
    // })
    // console.log(dimensionesArr);

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="grid-3">
                {dimensiones.map(dimension => (
                    <DimensionItem dimension={dimension} />
                ))}
            </div>
        )
    }
}

export default Dimensiones
