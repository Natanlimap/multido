<template>
  <div className="list-group ">
            <div className="list-group-item">
                <div className="input-group ">
                    <input  type="text" className="form-control" placeholder="Novo item" aria-label="Novo item" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button v-on:click="addLista    " className="btn btn-outline-secondary" type="button" id="button-addon2">Adicionar</button>
                    </div>
                </div>
            </div>
          
        </div>
</template>

<script>
export default {
    name: "Adicionar",
    props: ["addLista   "],
}
</script>

<style>

</style>