<script>
    export let addAList = function(){};
    let novaLista = "";

</script>

<main>
    <div class="list-group ">
        <div class="list-group-item">
            <div class="input-group ">
                <input bind:value={novaLista}  type="text" class="form-control" placeholder="Novo item" aria-label="Novo item" aria-describedby="button-addon2" />
                <div class="input-group-append">
                    <button on:click={addAList(novaLista)} class="btn btn-outline-secondary" type="button"  id="button-addon2">Adicionar</button>
                </div>
            </div>
        </div>
      
    </div>
</main>