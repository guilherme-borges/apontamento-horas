import React from 'react'
import { Link } from 'react-router-dom';

export default function Menu() {
    return (

        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Meus Projetos</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/projects">Projetos</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}