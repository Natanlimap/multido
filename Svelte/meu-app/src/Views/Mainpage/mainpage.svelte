<script>
    import { Col, Container, Row } from "sveltestrap";
    import Lista from "./Components/Lista/lista.svelte";
    import Nonloggednavbar from "../../Components/NonLoggedNavBar/nonloggednavbar.svelte";
    import ListaAdicionar from "./Components/AdicionarLista/adicionarlista.svelte";

    let listas = [
        { title: "Lista 1", checkitens: [1, 2, 3] },
        { title: "Lista 2", checkitens: [4, 2, 7] },
        { title: "Lista 3", checkitens: [9, 2, 2] }
    ];

    function addAList(){
        alert("Adicione tei a lista")
    }
    function addInList(){
        alert("Adicionei a lista")
    }

</script>

<style>
</style>

<main>
    <div>
        <div>
            <div class="container-fluid p-4 testimonial-group">
                <div class="row overflow-auto">
                    {#each listas as lista, i}
                        <div class="col-sm-3" id="widthScroll">
                            <Lista title={lista.title} checkitens={lista.checkitens} />
                        </div>
                    {/each}
                
                    <div class="col-sm-3">
                        <ListaAdicionar addAList={addAList} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<!-- 
 <div>
        <MyNavBar></MyNavBar>
        <div>
            <div className="container-fluid p-4 testimonial-group" >
                <div className="row overflow-auto" >
          
                            <div className="col-sm-3"  id="widthScroll">
                                <h1>teste</h1>
                                <Lista></Lista>
                                <Lista title={key} itens= {ListasDeListas[key]} vector={ListasDeListas} setList={SetListaDeLista} addList={addOnList}></Lista>
                            </div>
                    
                    <div className="col-sm-3">
                        <ListaAdicionar func={addAList}></ListaAdicionar>
                    </div>
                </div>
            </div>
        </div>

    </div> -->
