<template>
  <div className="list-group ">
    <a
      href="/"
      className="list-group-item list-group-item-action  bg-dark  active"
      >{{ title }}</a
    >
    <Checkitem v-for="item in itens" :key="item" v-bind:name="item"></Checkitem>

    <div className="list-group-item list-group-item-action">
      <div className="input-group ">
        <input
          type="text"
          className="form-control"
          placeholder="Novo item"
          aria-label="Novo item"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
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

  props: ["title", "itens"],
};
</script>

<style>
</style>