import React, { useState, useEffect } from 'react';
import Lista from './Components/Lista';
import MyNavBar from '../../Components/navbar'
import ListaAdicionar from './Components/ListaAdicionar';
import "./index.css"

export default function Mainpage() {
    const [ListasVector, SetListaVector] = useState([
        ["Nome da lista1",["Item1", "Item2", "Item3"]],
        ["Nome da lista2",["Item4", "Item5", "Item6"]],
        ["Nome da lista1",["Item1", "Item2", "Item3"]],
        ["Nome da lista2",["Item4", "Item5", "Item6"]],        ["Nome da lista1",["Item1", "Item2", "Item3"]],
        ["Nome da lista2",["Item4", "Item5", "Item6"]],        ["Nome da lista1",["Item1", "Item2", "Item3"]],
        ["Nome da lista2",["Item4", "Item5", "Item6"]],        ["Nome da lista1",["Item1", "Item2", "Item3"]],
        ["Nome da lista2",["Item4", "Item5", "Item6"]],

        ["Nome da lista1",["Item1", "Item2", "Item3"]],
        ["Nome da lista2",["Item4", "Item5", "Item6"]],        ["Nome da lista1",["Item1", "Item2", "Item3"]],
        ["Nome da lista2",["Item4", "Item5", "Item6"]],        ["Nome da lista1",["Item1", "Item2", "Item3"]],
        ["Nome da lista2",["Item4", "Item5", "Item6"]],        ["Nome da lista1",["Item1", "Item2", "Item3"]],
        ["Nome da lista2",["Item4", "Item5", "Item6"]],

    ]); 
    function addOnList(newItem, index){
        var newList = [["teste", ["123"]], ["teste", ["123"]]];
        newList[index][1].push(newItem)
        SetListaVector(newList);
    }



    
    function addAList(newListName){
 /*        var newList = ListasVector;
        var newArr = [];
        newList.push([newListName, newArr]);
        SetListaVector(newList); */

    }


    return (
        <div>
            <MyNavBar></MyNavBar>
            <div>
                <div className="container-fluid p-4 testimonial-group" >
                    <div className="row overflow-auto" >
                        {ListasVector.map((currentList, index)=>{
                            return (
                                <div className="col-sm-3" id= "widthScroll" >
                                    <Lista title= {currentList[0]} itens= {currentList[1]} func={addOnList} index={index}></Lista>
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