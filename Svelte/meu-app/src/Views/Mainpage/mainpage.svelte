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

    function addAList() {
        listas[listas.length] = { title: "teste", checkitens: [] };
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
        <Loggednavbar></Loggednavbar>  
        <div>
            <div class="container-fluid p-4 testimonial-group">
                <div class="row overflow-auto">
                    {#each listas as lista, i}
                        <div class="col-sm-3" id="widthScroll">
                            <Lista {addInList} listaObject={lista} />
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
