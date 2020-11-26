import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {

    return (
        <header className="navbar bg-primary">
            <h1>
                <i className={props.iconClass}></i>
                {' '}{props.title}
            </h1>
            <Link to="/">Inicio</Link>
            <Link to="/dimensiones">Dimensiones</Link>
        </header>
    )
}

export default Navbar
