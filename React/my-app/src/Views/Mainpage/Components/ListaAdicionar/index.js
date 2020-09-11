import React from 'react';

export default function ListaAdicionar(props) {
    const [listName, setListName] = React.useState("");
    function addNewList(){
        props.func(listName);
    }
    return (
        <div class="list-group ">
            <div className="list-group-item">
                <div className="input-group ">
                    <input value={listName} onChange={(value)=>{setListName(value.target.value)}} type="text" className="form-control" placeholder="Novo item" aria-label="Novo item" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={addNewList} id="button-addon2">Adiconar</button>
                    </div>
                </div>
            </div>
          
        </div>
    )
}