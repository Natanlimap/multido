<script>
    import Nonloggednavbar from "../../Components/nonLoggedNavBar/nonloggednavbar.svelte";
    let email = "";
    let senha = "";

    function login(){
        alert(email + " "+ senha);
    }
</script>

<style>
    a {
        text-decoration: none !important;
    }

    .myform {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        padding: 1rem;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 1.1rem;
        outline: 0;
        max-width: 500px;
    }
</style>

<div>
    <Nonloggednavbar />
    <div class="container py-5">
        <div class="row py-5">
            <div class="col-md-5 mx-auto py-5">
                <div id="first">
                    <div class="myform form ">
                        <div class="logo mb-3">
                            <div class="col-md-12 text-center">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email </label>
                            <input
                                bind:value={email}
                                type="email"
                                name="email"
                                class="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Senha</label>
                            <input
                                bind:value={senha}
                                type="password"
                                name="password"
                                id="password"
                                class="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter Password" />
                        </div>

                        <div class="col-md-12 text-center pt-2">
                            <router-link to="Mainpage">
                                <button on:click="{login}"
                                    type="submit"
                                    class=" btn btn-block mybtn btn-secondary">Login</button>
                            </router-link>
                        </div>

                        <div class="form-group py-5">
                            <p class="text-center">
                                Não possui uma conta?
                                <a href="/" id="signup">Crie agora</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
