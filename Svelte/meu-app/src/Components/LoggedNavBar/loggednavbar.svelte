<script lang="ts">
    import {
        Nav,
        NavItem,
        Dropdown,
        DropdownItem,
        DropdownToggle,
        DropdownMenu,
        NavLink,
        Navbar,
        NavbarBrand,
        NavbarToggler,
        Button,
    } from "sveltestrap";

    let isOpen = false;
</script>

<main>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Multido</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a href="/" class="nav-link" >Página inicial <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a href="/Mainpage" class="nav-link" >Perfil</a>
                </li>
            </ul>
            <div class="form-inline my-2 my-lg-0">
                <a href="/"><button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Sair</button></a>
            </div>
        </div>
    </nav>
</main>
