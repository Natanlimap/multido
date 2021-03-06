import React from 'react';

export default function Lista(props) {
    const [item, setItem] = React.useState("");
    let lista = props.itens;
    function addItem() {

        props.setList(props.addList(item, props.title));
    }
    function removeItem(element){
        props.setList(props.removeItem(element, props.title))
        
    }
    function removeLista(evt){
        evt.preventDefault()
        props.removeALista(props.title)
    }
        return (
        <div className="list-group ">
            <a className="list-group-item  bg-dark  active">
                <div className='d-flex flex-row justify-content-between'>
                    {props.title}
                    <a href='/' onClick={removeLista}>X</a>
                </div>
            </a>

            {lista.map((element, key) => {
                return (
                    <div className="list-group-item big-checkbox ">
                        <input checked={false} onClick={()=>{removeItem(element)}} class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <a href="/" key={key}>{element}</a>

                    </div>
                )
            })}


            <div className="list-group-item list-group-item-action">
                <div className="input-group ">
                    <input value={item} onChange={(value) => { setItem(value.target.value) }} type="text" className="form-control" placeholder="Novo item" aria-label="Novo item" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addItem}>Adiconar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}