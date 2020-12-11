import React, { useState, useEffect, useCallback } from 'react';
import Lista from './Components/Lista';
import MyNavBar from '../../Components/navbar'
import ListaAdicionar from './Components/ListaAdicionar';
import "./index.css"
import { AuthLogin } from '../../Services/auth';
import GetLista, {getItens, GetListas} from '../../Store/firestore';

export default function Mainpage() {
    const [ListasDeListas, SetListaDeLista] = useState({
        "Atividades FMC2": ["Lista de exercicio 1", "Trabalho"],
        "Atividades TEES1": ["Desenvolver projeto react", "Desenvolver projeto Svelte", "Desenvolver projeto "],
    }); 
    const [read, setRead] = useState(false);

    async function getItensFromFirestore(){
        getItens(ListasDeListas).then(function(value){
            SetListaDeLista(value);
        })
    }

    if(!read){
        getItensFromFirestore();
        setRead(true);
    }

    function addOnList(newItem, key){
        let newList = {...ListasDeListas};

        let arr = newList[key];
        arr.push(newItem);
        newList[key] = arr;
        return newList;
    }
    function removeItem(Item, key){
        let newList = {...ListasDeListas};
        let arr = newList[key];
        const index = arr.indexOf(Item)
        if(index > -1){
            arr.splice(index, 1)
        }
        newList[key] = arr;
        return newList;
    }
    
    function addAList(newListName){
        var newList = {...ListasDeListas};
        newList[newListName] = [];
        
        SetListaDeLista(newList);
    }
    function removeALista(ListName){
        var newList = {...ListasDeListas};
        delete newList[ListName]        
        SetListaDeLista(newList);
    }

    return (
        <div>
            <MyNavBar></MyNavBar>
            <div>
                <div className="container-fluid p-4 testimonial-group" >
                    <div className="row overflow-auto" >
                        {Object.keys(ListasDeListas).map((key)=>{
                            return (
                                <div className="col-sm-3" key={key} id="widthScroll">
                                    <Lista title={key} itens= {ListasDeListas[key]} vector={ListasDeListas} setList={SetListaDeLista} removeALista={removeALista} addList={addOnList} removeItem={removeItem}></Lista>
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