<template>
  <div>
    <nonLoggedNavBar />
    <div>
      <div>
        <div class="container p-5">
          <div class="row">
            <div class="col-sm-6 py-2">
              <h2
                class="text-light"
                id="TitleHome"
              >O Multido ajuda a organizar as suas tarefas diárias e a ter mais produtividade.</h2>
              <h5
                class="text-light py-2"
                id="SubTitleHome"
              >Com multilistas personalizadas e todolists do multido, você pode organizar e separar suas tarefas de um jeito dinâmico, flexível e fácil.</h5>
              <div class="py-4"></div>
              <div class="input-group mb-3 py-4">
                <input
                  type="text"
                  class="form-control py-4"
                  placeholder="Insira o seu melhor email"
                  aria-label="Insira o seu melhor email"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-secondary pl-5 pr-5"
                    id="ButtonCadastre-se"
                    type="button"
                  >Cadastre-se</button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <img :src="require(`@/assets/board.png`)" />
            </div>
            <div class="row">
              <div class="col-sm-6 py-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nonLoggedNavBar from "../../components/nonLoggedNavBar/nonloggednavbar";
export default {
  name: "Homepage",
  components: {
    nonLoggedNavBar,
  },
};
</script>

<style>
#TitleHome{
    font-size:   40px;
    text-align: end;
}
#SubTitleHome{
    font-size: 100;
    color: white;
    opacity: 70%;
    text-align: end;
}
</style>