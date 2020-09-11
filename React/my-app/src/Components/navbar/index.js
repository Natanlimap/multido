import React from 'react';
import { Link } from 'react-router-dom';

export default function MyNavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Multido</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a to="/" className="nav-link" href="#">Página inicial <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a to="/Mainpage" className="nav-link" href="#">Perfil</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Sair</button>
                    </form>
                </div>
            </nav>

        </div>
    )
}