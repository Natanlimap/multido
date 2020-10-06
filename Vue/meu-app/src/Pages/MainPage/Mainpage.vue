<template>
  <div>
    <NonLoggedNavBar></NonLoggedNavBar>
    <div>
      <div className="container-fluid p-4 testimonial-group">
        <div className="row overflow-auto">
          <div className="col-sm-3" key="{key}" id="widthScroll">
            <Checklist :title="Listas[0].Title" :itens="Listas[0].Itens" ></Checklist>
          </div>

          <div className="col-sm-3">
            <Adicionar :addLista="addLista"></Adicionar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Adicionar from './Components/Adicionar/Adicionar'
import NonLoggedNavBar from "../../components/nonLoggedNavBar/nonloggednavbar";
import Checklist from "./Components/Checklist/Checklist";
export default {
  name: "MainPage",
  data: function(){
    return{
      Listas: [
        {"Title": "Titulo 1", "Itens": ["Item 1", "item 2"]}
      ],
      addLista: function(){
        alert("Função passada pelo pai para adicionar lista")
      },
    }
  },
  components: {
    NonLoggedNavBar,
    Checklist,
    Adicionar
  },
};
</script>

<style>
.testimonial-group > .row {
  white-space: nowrap;
  flex-wrap: nowrap;
}
#widthScroll {
  margin-bottom: 33%;
}
body {
  overflow-y: hidden;
}
</style>