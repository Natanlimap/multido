import React, { useState, useEffect, useCallback } from 'react';
import Lista from './Components/Lista';
import MyNavBar from '../../Components/navbar'
import ListaAdicionar from './Components/ListaAdicionar';
import "./index.css"

export default function Mainpage() {
    const [ListasVector, SetListaVector] = useState({
        "teste 1": ["123", "234"],
    }); 
    function addOnList(newItem, key){
        let newList = {};

        for(let i =0; i < Object.keys(ListasVector).length;i++){
            let key = Object.keys(ListasVector)[i];
            newList[key] = ListasVector[key];
        }
        
        let arr = newList[key];
        arr.push(newItem);
        newList[key] = arr;
        return newList;
    }


    function addAList(newListName){
        var newList = {};
        
        for(let i =0; i < Object.keys(ListasVector).length;i++){
            let key = Object.keys(ListasVector)[i];
            newList[key] = ListasVector[key];
        }

        newList[newListName] = [];
        SetListaVector(newList);
    }


    return (
        <div>
            <MyNavBar></MyNavBar>
            <div>
                <div className="container-fluid p-4 testimonial-group" >
                    <div className="row overflow-auto" >
                        {Object.keys(ListasVector).map((key)=>{
                            return (
                                <div className="col-sm-3" key={key} id="widthScroll">
                                    <Lista title={key} itens= {ListasVector[key]} vector={ListasVector} setList={SetListaVector} addList={addOnList}></Lista>
                                </div>
                            )
                        })}
                        
                        <div className="col-sm-3">
                            <ListaAdicionar func={addAList}></ListaAdicionar>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}