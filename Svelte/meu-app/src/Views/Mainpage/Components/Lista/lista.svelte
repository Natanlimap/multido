<script>
    import Checkitem from './Components/Checkitem/checkitem.svelte'

    export let title = "Titulo da lista"
    export let checkitens = [1, 2, 3];

</script>

<main>
    <div class="list-group ">
        <a href="/" class="list-group-item list-group-item-action  bg-dark  active">{title}</a>

                {#each checkitens as item, i}
                <Checkitem title={item}></Checkitem>

                {/each}
        <div class="list-group-item list-group-item-action">
            <div class="input-group ">
                <input  type="text" class="form-control" placeholder="Novo item" aria-label="Novo item" aria-describedby="button-addon2" />
                <div class="input-group-append">
                    <button on:click={alert("teste")} class="btn btn-outline-secondary" type="button"  id="button-addon2">Adicsdddonar</button>
                </div>d
            </div>
        </div>
    </div> 
</main>
