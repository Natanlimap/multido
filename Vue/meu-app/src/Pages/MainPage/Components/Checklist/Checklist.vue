<template>
  <div class="list-group">
    <a href="/" class="list-group-item list-group-item-action bg-dark active">{{
      title
    }}</a>
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