<script>
    import { Col, Container, Row } from "sveltestrap";
    import Lista from "./Components/Lista/lista.svelte";
    import Nonloggednavbar from "../../Components/LoggedNavBar/loggednavbar.svelte";
    import AdicionarLista from "./Components/Lista/lista.svelte";
    import Adicionarlista from "./Components/AdicionarLista/adicionarlista.svelte";
    import Loggednavbar from "../../Components/LoggedNavBar/loggednavbar.svelte";

    let listas = [
        { title: "Lista 1", checkitens: [1, 2, 3] },
        { title: "Lista 2", checkitens: [4, 2, 7] },
    ];

    function addAList(title) {
        listas[listas.length] = { title: title, checkitens: [] };
    }
    function removeAItem(title, elemento) {
        if (title === "") return;
        for (let index = 0; index < listas.length; index++) {
            if (listas[index].title === title) {

                let arr = listas[index].checkitens;
                const arrayIndex = arr.indexOf(elemento);
                if (arrayIndex > -1) {
                    arr.splice(arrayIndex, 1);
                }
                listas[index].Itens = arr;
            }
        }
    }
    function removeALista(title) {
        var newlista = [...listas];
        for (let index = 0; index < listas.length; index++) {
            if (listas[index].title === title) {
                newlista.splice(index, 1);
            }
        }
        listas = newlista;
    }
    function addInList(lista, novoElemento) {
        let index = listas.indexOf(lista);
        let novaLista = listas[index];
        novaLista.checkitens[novaLista.checkitens.length] = novoElemento;
        listas[index] = novaLista;
    }
</script>

<style>
</style>

<main>
    <div>
        <Loggednavbar />
        <div>
            <div class="container-fluid p-4 testimonial-group">
                <div class="row overflow-auto">
                    {#each listas as lista, i}
                        <div class="col-sm-3" id="widthScroll">
                            <Lista
                                {removeAItem}
                                {addInList}
                                {removeALista}
                                listaObject={lista} />
                        </div>
                    {/each}

                    <div class="col-sm-3">
                        <Adicionarlista {addAList} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
