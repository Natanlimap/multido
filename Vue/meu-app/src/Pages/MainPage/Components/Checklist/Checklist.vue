<template>
  <div class="list-group">
    <div href="#" class="list-group-item list-group-item-action bg-dark active">
      <div class="row">
        <div class="col-sm-8">
          {{ title }}
        </div>
        <div class="col-sm-2">
          <div class="btn-group dropleft">
            <a
              type="button"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Excluir lista</a>
              <a class="dropdown-item" href="#">Excluir concluidos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Checkitem v-for="item in itens" :key="item" v-bind:name="item"></Checkitem>

    <div class="list-group-item list-group-item-action">
      <div class="input-group">
        <input
          v-model="name"
          type="text"
          class="form-control"
          placeholder="Novo item"
          aria-label="Novo item"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            v-on:click="adicionar"
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Adiconar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Checkitem from "../Checkitem/checkitem";
export default {
  name: "Checklist",
  components: {
    Checkitem,
  },
  methods: {
    adicionar() {
      this.addInLista(this.title, this.name);
    },
  },
  data: () => ({
    name: "",
  }),

  props: ["title", "itens", "addInLista"],
};
</script>

<style>
</style>