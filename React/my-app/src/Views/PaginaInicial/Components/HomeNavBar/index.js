import React from 'react';
import { Link } from 'react-router-dom';

function HomeNavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Multido</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                        <button className="btn btn-light px-3 mx-3 my-sm-0" type="submit">Cadastre-se</button>
                        <Link to={"./mainpage"}><button className="btn btn-secondary  px-3  my-sm-0" type="submit">Entrar</button></Link>

                        </ul>
                    </form>
                </div>
            </nav>

        </div>
    )
}
export default HomeNavBar;