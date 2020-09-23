<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Multido</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
            <button class="btn btn-light px-3 mx-3 my-sm-0" type="submit">Cadastre-se</button>
            <button class="btn btn-secondary px-3 my-sm-0" type="submit">Entrar</button>
          </ul>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: "nonLoggedNavBar"
};
</script>

<style>
</style>