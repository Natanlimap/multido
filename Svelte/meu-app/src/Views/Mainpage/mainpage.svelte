<script>
    import { Col, Container, Row } from 'sveltestrap';
import Lista from './Components/Lista/lista.svelte'
import Nonloggednavbar from '../../Components/NonLoggedNavBar/nonloggednavbar.svelte';
import ListaAdicionar from './Components/AdicionarLista/adicionarlista.svelte'
</script>

<main>
    <div>
        <Nonloggednavbar></Nonloggednavbar>
        <div>
            <div class="container-fluid p-4 testimonial-group" >
                <div class="row overflow-auto" >
                
                            <div class="col-sm-3"id="widthScroll">
                                <Lista></Lista>
                            </div>
                    
                    
                    <div class="col-sm-3">
                        <ListaAdicionar></ListaAdicionar>
                    </div>
                </div>
            </div>
        </div>

    </div>
</main>

<style>

</style>
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