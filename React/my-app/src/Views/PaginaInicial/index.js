import React, { useState, useEffect } from 'react';
import HomeNavBar from './Components/HomeNavBar';
import "./index.css"
import Image from "./"
export default function HomePage() {


    return (
        <div>
            <HomeNavBar></HomeNavBar>
            <div>
                <div className="container p-5" >
                    <div className="row " >
                        <div className="col-sm-6 py-2">
                            <h2 className="text-light" id="TitleHome">O Multido ajuda a organizar as suas tarefas diárias e a ter mais produtividade.</h2>
                            <h5 className="text-light py-2" id="SubTitleHome"> Com multilistas personalizadas e todolists do multido, você pode organizar e separar suas tarefas de um jeito dinâmico, flexível e fácil.</h5>
                            <div className="py-4"></div>
                            <div className="input-group mb-3 py-4">
                                <input type="text" className="form-control  py-4" placeholder="Insira o seu melhor email" aria-label="Insira o seu melhor email" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary pl-5  pr-5" id="ButtonCadastre-se" type="button">Cadastre-se</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">

                            <img src={process.env.PUBLIC_URL + '/board.png'} />                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 py-2">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}