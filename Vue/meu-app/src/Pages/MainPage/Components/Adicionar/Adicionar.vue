<template>
  <div class="list-group">
    <div class="list-group-item">
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
            v-on:click="adicionar()"
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Adicionar",
  props: {
    addLista: { type: Function },
  },
   data: () => ({
    name: '',
  }),
  methods: {
    adicionar() {
        this.addLista(this.name)
    },
  },
};
</script>

<style>
</style>