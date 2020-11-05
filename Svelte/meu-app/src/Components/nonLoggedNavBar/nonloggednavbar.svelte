<script>
    import { Router, Link, Route } from "svelte-routing";

    export let url = "";
</script>

<main>
    <Router url="{url}">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Multido</a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" />
                <form class="form-inline my-2 my-lg-0">
                    <ul class="navbar-nav mr-auto">
                        <router-link to="/Login">
                            <button
                                class="btn btn-light px-3 mx-3 my-sm-0"
                                type="submit">Cadastre-se</button>
                        </router-link>
                        <button
                            class="btn btn-secondary px-3 my-sm-0"
                            type="submit">Entrar</button>
                    </ul>
                </form>
            </div>
        </nav>
    </Router>
</main>
