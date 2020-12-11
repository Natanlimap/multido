<script>
    import Checkitem from './Components/Checkitem/checkitem.svelte'
    export let addInList = function(){};
    export let removeALista = function(){};
    export let removeAItem = function(){};

    export let listaObject = {};
    let novoCheckItem = "";
    
    function teste(evt){
        evt.preventDefault()
        removeALista(listaObject.title)
    }
    function removerMeuItem(item){
        removeAItem(listaObject.title, item)
    }
</script>

<main>
    <div class="list-group ">
        <a href="/" class="list-group-item list-group-item-action  bg-dark  active">
            <div class='d-flex flex-row justify-content-between'>
                {listaObject.title}
                <button type="button" on:click={teste} class="btn btn-link">X</button>
            </div>
        </a>

                {#each listaObject.checkitens as item, i}
                <Checkitem {removerMeuItem} title={item}></Checkitem>

                {/each}
        <div class="list-group-item list-group-item-action">
            <div class="input-group ">
                <input bind:value={novoCheckItem} type="text" class="form-control" placeholder="Novo item" aria-label="Novo item" aria-describedby="button-addon2" />
                <div class="input-group-append">
                    <button on:click={addInList(listaObject, novoCheckItem)} class="btn btn-outline-secondary" type="button"  id="button-addon2">Adicionar</button>
                </div>
            </div>
        </div>
    </div> 
</main>
