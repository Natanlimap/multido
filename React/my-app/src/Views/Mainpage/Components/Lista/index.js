import React from 'react';

export default function Lista(props) {
    const [item, setItem] = React.useState("");
    const [lista, setLista] = React.useState(props.itens)

    function addItem(){
        props.setList(props.addList(item, props.title));
    }
    

    return (
        <div class="list-group ">
            <a href="/" className="list-group-item list-group-item-action  bg-dark  active">{props.title}</a>

            {lista.map((element, key) => {
                            return (    
                               <a href="/" key={key} className="list-group-item list-group-item-action">{element}</a>
                            )
            })}

            
            <div className="list-group-item list-group-item-action">
                <div className="input-group ">
                    <input value={item} onChange={(value)=>{setItem(value.target.value)}} type="text" className="form-control" placeholder="Novo item" aria-label="Novo item" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addItem}>Adiconar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}