<template>
  <div>
    <NonLoggedNavBar></NonLoggedNavBar>
    <div>
      <div class="container-fluid p-4 testimonial-group">
        <div class="row overflow-auto">
          <div
            v-for="lista in Listas"
            :key="lista"
            v-bind:name="item"
            class="col-sm-3"
            id="widthScroll"
          >
            <Checklist
              :addInLista="addInLista"
              :title="lista.Title"
              :itens="lista.Itens"
            ></Checklist>
          </div>

          <div class="col-sm-3">
            <Adicionar :addLista="addLista"></Adicionar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Adicionar from "./Components/Adicionar/Adicionar";
import NonLoggedNavBar from "../../components/nonLoggedNavBar/nonloggednavbar";
import Checklist from "./Components/Checklist/Checklist";
export default {
  name: "MainPage",
  data: function () {
    return {
      Listas: [
        { Title: "Titulo 1", Itens: ["Item 1", "item 2"] },
        { Title: "Titulo 2", Itens: ["Item 2", "item 3", "item 4"] },
      ],
    };
  },
  methods: {
    addLista(NomeNovaLista) {
      this.Listas.push({ Title: NomeNovaLista, Itens: [] });
    },

    addInLista(title, name) {
      if(name === '') return;

      for (let index = 0; index < this.Listas.length; index++) {
        if(this.Listas[index].Title === title){
          this.Listas[index].Itens.push(name);
        } 
        
      }
    },
  },
  components: {
    NonLoggedNavBar,
    Checklist,
    Adicionar,
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