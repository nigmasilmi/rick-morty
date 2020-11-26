import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonajeItem from '../personajes/PersonajeItem';
import Spinner from '../layout/Spinner';

const DimensionItem = ({ dimension }) => {

    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchChars = async () => {
            setLoading(true);
            const res = await axios.get('https://rickandmortyapi.com/api/character/');
            setChars(res.data.results);
            setLoading(false);
        };
        fetchChars();
    }, [])

    const charsHere = chars.filter(c => c.location.name === dimension);

    return (
        <div className="dimension">
            {loading ? <Spinner /> :
                <div>
                    <h2 className="dimension-title">{dimension}</h2>
                    {charsHere.map(chere => (
                        <div className="dimension__container">
                            <PersonajeItem key={chere.id} personaje={chere} />
                        </div>
                    ))}
                </div>
            }

        </div >

    )
}

export default DimensionItem
