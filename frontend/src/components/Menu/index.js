import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu() {
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link to="/home" className="navbar-brand">Meus Projetos</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projetos</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}