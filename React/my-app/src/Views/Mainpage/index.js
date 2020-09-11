import React, { useState, useEffect } from 'react';
import Lista from './Components/Lista';
import MyNavBar from '../../Components/navbar'
import ListaAdicionar from './Components/ListaAdicionar';


export default function Mainpage() {
    const [ListasVector, SetListaVector] = useState([
        ["Nome da lista1",["Item1", "Item2", "Item3"]],
        ["Nome da lista2",["Item4", "Item5", "Item6"]],

    ]); 
    function addOnList( newItem, index){
        var newList = ListasVector;

        newList[index][1].push(newItem)
        SetListaVector(newList);
    }
    function addAList(newListName){
        var newList = ListasVector;
        var newArr = [];
        newList.push([newListName, newArr]);
        SetListaVector(newList);

    }


    return (
        <div>
            <MyNavBar></MyNavBar>
            <div>
                <div className="container p-4">
                    <div className="row">
                        {ListasVector.map((currentList, index)=>{
                            return (
                                <div className="col-sm-4">
                                    <Lista title= {ListasVector[index][0]} itens= {ListasVector[index][1]} func={addOnList} index={index}></Lista>
                                </div>
                            )
                        })}
                        
                        <div className="col-sm-4">
                            <ListaAdicionar func={addAList}></ListaAdicionar>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}