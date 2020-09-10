import React from 'react';

export default function Lista(props) {
    return (
        <div class="list-group ">
            <a href="/" className="list-group-item list-group-item-action active">Nome da lista</a>
            <a href="/" className="list-group-item list-group-item-action">Item 2</a>
            <a href="/" className="list-group-item list-group-item-action">Item 3</a>
            <a href="/" className="list-group-item list-group-item-action">Item 4</a>
            
            <div className="list-group-item list-group-item-action">
                <div className="input-group ">
                    <input type="text" className="form-control" placeholder="Novo item" aria-label="Novo item" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Adiconar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}