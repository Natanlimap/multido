<template>
    <div class="list-group-item big-checkbox ">
         <input :checked="false" v-on:click="meExcluir()" class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
         <a href="/" key={key}>{{name}}</a>
    </div>
</template>
<script>
export default {
    name: "Checkitem",
    props: {
        name: String,
        excluir: { type: Function },
    },  
    methods: {
    meExcluir() {
        this.excluir(this.name)
    },
  },
};
</script>

<style>
</style>