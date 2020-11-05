<script>
    import Checkitem from './Components/Checkitem/checkitem.svelte'
    export let addInList = function(){};
    export let listaObject = {};
    let novoCheckItem = "";
</script>

<main>
    <div class="list-group ">
        <a href="/" class="list-group-item list-group-item-action  bg-dark  active">{listaObject.title}</a>

                {#each listaObject.checkitens as item, i}
                <Checkitem title={item}></Checkitem>

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
