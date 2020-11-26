import React, { useState } from 'react'

const Search = (props) => {
    const [searchText, setSearchText] = useState('');
    const [searchTextBySpec, setSearchTextBySpec] = useState('');
    const onChangeName = e => setSearchText(e.target.value);
    const onChangeSpec = e => setSearchTextBySpec(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        props.searchByName(searchText);
        props.searchBySpec(searchTextBySpec);
        setSearchText('');
        setSearchTextBySpec('');
    };


    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Busca personajes por nombre"
                    value={searchText}
                    onChange={onChangeName}
                />

                <input
                    type="text"
                    name="text"
                    placeholder="Busca personajes por especie, ej: human, alien, creature..."
                    value={searchTextBySpec}
                    onChange={onChangeSpec}
                />
                <input
                    type="submit"
                    value="Vamos"
                    className="btn btn-dark btn-block"
                />
            </form>
            {props.showClear && <button className="btn btn-light btn-block" onClick={props.clearChars}>Limpiar</button>}

        </div>
    )
}

export default Search
