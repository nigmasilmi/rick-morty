import React from 'react'

const Navbar = (props) => {

    return (
        <header className="navbar bg-primary">
            <h1>
                <i className={props.iconClass}></i>
                {' '}{props.title}
            </h1>
        </header>
    )
}

export default Navbar
