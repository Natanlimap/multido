import React from 'react';
import Lista from './Components/Lista';
import MyNavBar from '../../Components/navbar'
import ListaAdicionar from './Components/ListaAdicionar';
export default function Mainpage() {

    return (
        <div>
            <MyNavBar></MyNavBar>
            <div>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-sm-4">
                            <Lista></Lista>
                        </div>
                        <div className="col-sm-4">
                            <Lista></Lista>
                        </div>
                        <div className="col-sm-4">
                            <ListaAdicionar></ListaAdicionar>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}